'use client'

import { useState, useEffect, useMemo } from 'react'
import { apiClient } from '@/lib/api-client'
import { FiPlus, FiEdit, FiTrash2, FiSave, FiX, FiEye, FiEyeOff, FiSearch, FiImage, FiTag, FiExternalLink, FiFilter } from 'react-icons/fi'
import { BlogEditor } from './BlogEditor'
import { AdminBlogStats } from './AdminBlogStats'
import Link from 'next/link'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  tags: string
  featuredImage: string
  metaTitle: string
  metaDesc: string
  metaKeywords: string
  published: boolean
  publishedAt: string | null
  views: number
  createdAt: string
  updatedAt: string
}

export function AdminBlogsEnhanced() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState<BlogPost | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [error, setError] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [showPreview, setShowPreview] = useState(false)

  useEffect(() => {
    loadBlogs()
    loadCategories()
  }, [])

  const loadBlogs = async () => {
    try {
      setLoading(true)
      const data = await apiClient.getBlogs()
      setPosts(data)
    } catch (err: any) {
      setError('Не удалось загрузить посты: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  const loadCategories = async () => {
    try {
      const data = await apiClient.getBlogCategories()
      setCategories(data)
    } catch (err: any) {
      console.error('Failed to load categories:', err)
    }
  }

  const filteredPosts = useMemo(() => {
    let filtered = posts

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
      )
    }

    if (selectedCategory) {
      filtered = filtered.filter(post => post.category === selectedCategory)
    }

    return filtered
  }, [posts, searchQuery, selectedCategory])

  const handleCreate = () => {
    setEditing({
      id: '',
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      category: 'Общее',
      tags: '[]',
      featuredImage: '',
      metaTitle: '',
      metaDesc: '',
      metaKeywords: '',
      published: false,
      publishedAt: null,
      views: 0,
      createdAt: '',
      updatedAt: '',
    })
    setShowForm(true)
  }

  const handleEdit = (post: BlogPost) => {
    setEditing(post)
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Вы уверены, что хотите удалить этот пост?')) return

    try {
      await apiClient.deleteBlog(id)
      await loadBlogs()
    } catch (err: any) {
      setError('Ошибка при удалении: ' + err.message)
    }
  }

  const handleSave = async () => {
    if (!editing) return

    if (!editing.title.trim()) {
      setError('Заголовок обязателен')
      return
    }
    if (!editing.slug.trim()) {
      setError('Slug обязателен')
      return
    }
    if (!editing.excerpt.trim()) {
      setError('Краткое описание обязательно')
      return
    }

    const normalizedSlug = editing.slug.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/(^-|-$)/g, '')
    
    try {
      setError('')
      const postData = {
        ...editing,
        slug: normalizedSlug,
        publishedAt: editing.published && !editing.publishedAt ? new Date().toISOString() : editing.publishedAt
      }
      
      if (editing.id) {
        await apiClient.updateBlog(editing.id, postData)
      } else {
        await apiClient.createBlog(postData)
      }
      setShowForm(false)
      setEditing(null)
      await loadBlogs()
      await loadCategories()
    } catch (err: any) {
      setError('Ошибка при сохранении: ' + err.message)
    }
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]+/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/(^-|-$)/g, '')
  }

  const handleImageUpload = async (file: File) => {
    try {
      const result = await apiClient.uploadImage(file)
      if (editing) {
        setEditing({ ...editing, featuredImage: result.url })
      }
      return result.url
    } catch (err: any) {
      setError('Ошибка загрузки изображения: ' + err.message)
      return ''
    }
  }

  const parseTags = (tagsString: string): string[] => {
    try {
      return JSON.parse(tagsString || '[]')
    } catch {
      return tagsString ? tagsString.split(',').map(t => t.trim()) : []
    }
  }

  const stringifyTags = (tags: string[]): string => {
    return JSON.stringify(tags)
  }

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto">
        <div className="card p-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Загрузка...</p>
        </div>
      </div>
    )
  }

  const tags = editing ? parseTags(editing.tags) : []

  return (
    <div className="max-w-6xl mx-auto">
      <AdminBlogStats />
      
      <div className="card p-6 md:p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Управление блогом</h2>
            <p className="text-gray-600">Создавайте и редактируйте статьи блога</p>
          </div>
          <button
            onClick={handleCreate}
            className="btn-primary px-4 py-2"
          >
            <FiPlus size={18} />
            Новый пост
          </button>
        </div>

        {/* Поиск и фильтрация */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              placeholder="Поиск по заголовку, описанию..."
            />
          </div>
          <div className="relative">
            <FiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 appearance-none bg-white"
            >
              <option value="">Все категории</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {showForm && editing && (
          <div className="mb-6 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">
                {editing.id ? 'Редактировать пост' : 'Новый пост'}
              </h3>
              <div className="flex gap-2">
                {editing.id && editing.published && (
                  <Link
                    href={`/blog/${editing.slug}`}
                    target="_blank"
                    className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                    title="Просмотр"
                  >
                    <FiExternalLink size={20} />
                  </Link>
                )}
                <button
                  onClick={() => {
                    setShowForm(false)
                    setEditing(null)
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FiX size={24} />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {/* Основные поля */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Заголовок *
                  </label>
                  <input
                    type="text"
                    value={editing.title}
                    onChange={(e) => {
                      const newEditing = { ...editing, title: e.target.value }
                      if (!editing.id) {
                        newEditing.slug = generateSlug(e.target.value)
                        newEditing.metaTitle = e.target.value
                      }
                      setEditing(newEditing)
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    placeholder="Заголовок статьи"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Slug (URL) *
                  </label>
                  <input
                    type="text"
                    value={editing.slug}
                    onChange={(e) => {
                      const slug = e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/(^-|-$)/g, '')
                      setEditing({ ...editing, slug })
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    placeholder="url-slug"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Краткое описание *
                </label>
                <textarea
                  value={editing.excerpt}
                  onChange={(e) => {
                    const newEditing = { ...editing, excerpt: e.target.value }
                    if (!editing.metaDesc) {
                      newEditing.metaDesc = e.target.value
                    }
                    setEditing(newEditing)
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  rows={3}
                  placeholder="Краткое описание статьи"
                />
              </div>

              {/* Обложка */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Обложка статьи
                </label>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={editing.featuredImage}
                      onChange={(e) => setEditing({ ...editing, featuredImage: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      placeholder="URL изображения или загрузите файл"
                    />
                  </div>
                  <label className="btn-secondary px-4 py-2 cursor-pointer">
                    <FiImage size={18} />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={async (e) => {
                        const file = e.target.files?.[0]
                        if (file) {
                          const url = await handleImageUpload(file)
                          if (url) {
                            setEditing({ ...editing, featuredImage: url })
                          }
                        }
                      }}
                      className="hidden"
                    />
                  </label>
                </div>
                {editing.featuredImage && (
                  <div className="mt-2">
                    <img
                      src={editing.featuredImage}
                      alt="Preview"
                      className="max-w-xs h-32 object-cover rounded-lg border border-gray-300"
                    />
                  </div>
                )}
              </div>

              {/* Теги */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Теги
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm flex items-center gap-2"
                    >
                      {tag}
                      <button
                        onClick={() => {
                          const newTags = tags.filter((_, i) => i !== index)
                          setEditing({ ...editing, tags: stringifyTags(newTags) })
                        }}
                        className="text-primary-600 hover:text-primary-800"
                      >
                        <FiX size={14} />
                      </button>
                    </span>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="Введите тег и нажмите Enter"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                      e.preventDefault()
                      const newTags = [...tags, e.currentTarget.value.trim()]
                      setEditing({ ...editing, tags: stringifyTags(newTags) })
                      e.currentTarget.value = ''
                    }
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>

              {/* Содержание */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Содержание
                </label>
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <BlogEditor
                    value={editing.content}
                    onChange={(content) => setEditing({ ...editing, content })}
                  />
                </div>
              </div>

              {/* SEO поля */}
              <div className="border-t pt-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">SEO настройки</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Meta Title
                    </label>
                    <input
                      type="text"
                      value={editing.metaTitle}
                      onChange={(e) => setEditing({ ...editing, metaTitle: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      placeholder="SEO заголовок (если пусто, используется заголовок статьи)"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Meta Description
                    </label>
                    <textarea
                      value={editing.metaDesc}
                      onChange={(e) => setEditing({ ...editing, metaDesc: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      rows={2}
                      placeholder="SEO описание (если пусто, используется краткое описание)"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Meta Keywords
                    </label>
                    <input
                      type="text"
                      value={editing.metaKeywords}
                      onChange={(e) => setEditing({ ...editing, metaKeywords: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                      placeholder="Ключевые слова через запятую"
                    />
                  </div>
                </div>
              </div>

              {/* Категория и статус */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Категория
                  </label>
                  <select
                    value={editing.category}
                    onChange={(e) => setEditing({ ...editing, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                    <option value={editing.category}>{editing.category}</option>
                  </select>
                  <input
                    type="text"
                    value={editing.category}
                    onChange={(e) => setEditing({ ...editing, category: e.target.value })}
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    placeholder="Или введите новую категорию"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Статус
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={editing.published}
                      onChange={(e) => setEditing({ ...editing, published: e.target.checked })}
                      className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
                    />
                    <span className="text-gray-700">Опубликовано</span>
                  </label>
                  {editing.published && editing.publishedAt && (
                    <p className="mt-2 text-xs text-gray-500">
                      Опубликовано: {new Date(editing.publishedAt).toLocaleString('ru-RU')}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleSave}
                  className="btn-primary px-6 py-2"
                >
                  <FiSave size={18} />
                  Сохранить
                </button>
                <button
                  onClick={() => {
                    setShowForm(false)
                    setEditing(null)
                  }}
                  className="btn bg-gray-100 text-gray-800 px-6 py-2 hover:bg-gray-200"
                >
                  <FiX size={18} />
                  Отмена
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Список постов */}
        <div className="space-y-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p>{searchQuery || selectedCategory ? 'Посты не найдены' : 'Пока нет постов. Создайте первый пост!'}</p>
            </div>
          ) : (
            filteredPosts.map((post) => (
              <div
                key={post.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  {post.featuredImage && (
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                      {post.published ? (
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold flex items-center gap-1">
                          <FiEye size={12} />
                          Опубликовано
                        </span>
                      ) : (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-semibold flex items-center gap-1">
                          <FiEyeOff size={12} />
                          Черновик
                        </span>
                      )}
                      {post.views > 0 && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">
                          {post.views} просмотров
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{post.excerpt}</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                      <span>Slug: {post.slug}</span>
                      <span>Категория: {post.category}</span>
                      {parseTags(post.tags).length > 0 && (
                        <div className="flex items-center gap-1">
                          <FiTag size={12} />
                          {parseTags(post.tags).join(', ')}
                        </div>
                      )}
                      <span>
                        {new Date(post.createdAt).toLocaleDateString('ru-RU')}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {post.published && (
                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                        title="Просмотр"
                      >
                        <FiExternalLink size={18} />
                      </Link>
                    )}
                    <button
                      onClick={() => handleEdit(post)}
                      className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                      title="Редактировать"
                    >
                      <FiEdit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Удалить"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

