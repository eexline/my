'use client'

import { useState, useEffect } from 'react'
import { apiClient } from '@/lib/api-client'
import { FiPlus, FiEdit, FiTrash2, FiSave, FiX, FiEye, FiEyeOff } from 'react-icons/fi'
import { BlogEditor } from './BlogEditor'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  published: boolean
  createdAt: string
  updatedAt: string
}

export function AdminBlogs() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState<BlogPost | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    loadBlogs()
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

  const handleCreate = () => {
    setEditing({
      id: '',
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      category: 'Общее',
      published: false,
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

    // Валидация
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

    // Нормализация slug
    const normalizedSlug = editing.slug.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/(^-|-$)/g, '')
    if (normalizedSlug !== editing.slug) {
      setEditing({ ...editing, slug: normalizedSlug })
    }

    try {
      setError('')
      const postData = {
        ...editing,
        slug: normalizedSlug,
      }
      
      if (editing.id) {
        await apiClient.updateBlog(editing.id, postData)
      } else {
        await apiClient.createBlog(postData)
      }
      setShowForm(false)
      setEditing(null)
      await loadBlogs()
    } catch (err: any) {
      setError('Ошибка при сохранении: ' + err.message)
    }
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]+/g, '') // Удаляем все кроме букв, цифр, пробелов и дефисов
      .replace(/\s+/g, '-') // Заменяем пробелы на дефисы
      .replace(/-+/g, '-') // Убираем множественные дефисы
      .replace(/(^-|-$)/g, '') // Убираем дефисы в начале и конце
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

  return (
    <div className="max-w-6xl mx-auto">
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

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Заголовок
                </label>
                <input
                  type="text"
                  value={editing.title}
                  onChange={(e) => {
                    const newEditing = { ...editing, title: e.target.value }
                    if (!editing.id) {
                      newEditing.slug = generateSlug(e.target.value)
                    }
                    setEditing(newEditing)
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  placeholder="Заголовок статьи"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Slug (URL)
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
                <p className="mt-1 text-xs text-gray-500">Только строчные буквы, цифры и дефисы</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Краткое описание
                </label>
                <textarea
                  value={editing.excerpt}
                  onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  rows={3}
                  placeholder="Краткое описание статьи"
                />
              </div>

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
                <p className="mt-2 text-xs text-gray-500">
                  Используйте редактор для форматирования текста и вставки изображений
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Категория
                  </label>
                  <input
                    type="text"
                    value={editing.category}
                    onChange={(e) => setEditing({ ...editing, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    placeholder="Категория"
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

        <div className="space-y-4">
          {posts.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p>Пока нет постов. Создайте первый пост!</p>
            </div>
          ) : (
            posts.map((post) => (
              <div
                key={post.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
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
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Slug: {post.slug}</span>
                      <span>Категория: {post.category}</span>
                      <span>
                        {new Date(post.createdAt).toLocaleDateString('ru-RU')}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
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

