'use client'

import Link from 'next/link'
import { FiArrowRight, FiCalendar } from 'react-icons/fi'
import { useTranslations } from '@/hooks/useTranslations'
import { useLocale } from '@/contexts/LocaleContext'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  slug: string
  createdAt: string
  category: string
}

interface BlogPageClientProps {
  blogPosts: BlogPost[]
}

export function BlogPageClient({ blogPosts }: BlogPageClientProps) {
  const t = useTranslations()
  const { locale } = useLocale()

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 md:py-28 px-4">
        {/* Градиентные орбы для глубины */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 opacity-10 bg-pattern-dense"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-balance leading-tight drop-shadow-lg">
              {t.blog.title}
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-10 md:mb-14 max-w-3xl mx-auto text-balance drop-shadow">
              {t.blog.description}
            </p>
          </div>
        </div>
      </section>

      <div className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {blogPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4 text-lg">{t.blog.noPosts}</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
            >
              {t.blog.backToHome}
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-200"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 flex-wrap">
                      <FiCalendar size={16} />
                      <time dateTime={post.createdAt}>
                        {new Date(post.createdAt).toLocaleDateString(locale === 'en' ? 'en-US' : 'ru-RU', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-semibold">
                        {t.blog.categories[post.category as keyof typeof t.blog.categories] || post.category}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                    >
                      {t.blog.readMore}
                      <FiArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </>
          )}
        </div>
      </div>
    </main>
  )
}

