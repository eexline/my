'use client'

import Link from 'next/link'
import { FiArrowLeft, FiCalendar, FiTag } from 'react-icons/fi'
import { useTranslations } from '@/hooks/useTranslations'
import { useLocale } from '@/contexts/LocaleContext'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  slug: string
  createdAt: string
  category: string
  published: boolean
  featuredImage?: string
  tags?: string
  views?: number
  publishedAt?: string | null
}

interface BlogPostPageClientProps {
  post: BlogPost
}

export function BlogPostPageClient({ post }: BlogPostPageClientProps) {
  const t = useTranslations()
  const { locale } = useLocale()

  return (
    <main className="flex-grow py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8 transition-colors"
        >
          <FiArrowLeft size={18} />
          {t.blog.backToArticles}
        </Link>

        <article className="bg-white rounded-lg shadow-md p-8 md:p-12 border border-gray-200">
          {post.featuredImage && (
            <div className="mb-8">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          )}
          
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 flex-wrap">
            <div className="flex items-center gap-2">
              <FiCalendar size={16} />
              <time dateTime={post.createdAt}>
                {new Date(post.createdAt).toLocaleDateString(locale === 'en' ? 'en-US' : 'ru-RU', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <FiTag size={16} />
              <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                {t.blog.categories[post.category as keyof typeof t.blog.categories] || post.category}
              </span>
            </div>
            {post.views !== undefined && post.views > 0 && (
              <div className="text-sm text-gray-500">
                {post.views} {t.blog.views || 'просмотров'}
              </div>
            )}
          </div>
          
          {post.tags && (() => {
            try {
              const tags = JSON.parse(post.tags)
              if (Array.isArray(tags) && tags.length > 0) {
                return (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )
              }
            } catch {
              // Ignore parse errors
            }
            return null
          })()}

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
          )}

          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary-600 prose-strong:text-gray-900 prose-code:text-primary-600 prose-pre:bg-gray-100 prose-pre:border prose-pre:border-gray-200 prose-img:rounded-lg prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
          >
            <FiArrowLeft size={18} />
            {t.blog.backToArticles}
          </Link>
        </div>
      </div>
    </main>
  )
}


