'use client'

import Link from 'next/link'
import { FiArrowRight, FiCalendar, FiZap, FiBarChart2 } from 'react-icons/fi'
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
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-4 sm:pt-6 md:pt-8 lg:pt-4 xl:pt-6 pb-12 sm:pb-16 md:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8 min-h-[85vh] sm:min-h-[90vh] md:min-h-screen flex items-center">
        {/* Градиентные орбы для глубины */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow will-change-opacity"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-slow will-change-opacity" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow will-change-opacity" style={{ animationDelay: '2s' }}></div>
        </div>
        {/* Сетка на фоне */}
        <div className="absolute inset-0 bg-grid-dark opacity-30"></div>
        <div className="absolute inset-0 opacity-10 bg-pattern-dense"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 lg:mb-8 text-balance leading-[1.1] drop-shadow-lg">
              {t.blog.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 md:mb-10 lg:mb-12 max-w-3xl mx-auto text-balance drop-shadow font-medium leading-relaxed">
              {t.blog.description}
            </p>
            
            {/* Два пути: Telegram или Веб-приложение */}
            <div className="mb-6 md:mb-8">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-4 md:mb-6 font-semibold">
                {t.home.hero.chooseMethod}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-2xl mx-auto">
                {/* Кнопка Telegram */}
                <Link
                  href="/telegram"
                  className="btn-telegram flex-1 px-6 py-4 md:px-8 md:py-5 text-base md:text-lg font-semibold shadow-2xl hover:scale-105 transition-transform duration-200 ease-out will-change-transform flex items-center justify-center gap-2"
                >
                  <FiZap size={20} className="md:w-6 md:h-6" />
                  <span>{t.home.hero.ctaTelegram}</span>
                </Link>
                {/* Кнопка Веб-приложение */}
                <Link
                  href="/app"
                  className="btn-primary flex-1 px-6 py-4 md:px-8 md:py-5 text-base md:text-lg font-semibold shadow-2xl hover:shadow-blue-500/50 glow-primary hover:scale-105 transition-[transform,box-shadow] duration-200 ease-out will-change-transform flex items-center justify-center gap-2"
                >
                  <FiBarChart2 size={20} className="md:w-6 md:h-6" />
                  <span>{t.home.hero.ctaWebApp}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50">
        {/* Сетка на фоне */}
        <div className="absolute inset-0 bg-grid-light opacity-40"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          {blogPosts.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
              <p className="text-slate-600 mb-4 text-lg">{t.blog.noPosts}</p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                {t.blog.backToHome}
              </Link>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {blogPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white border-2 border-slate-200 rounded-2xl shadow-lg hover:shadow-xl hover:border-blue-500/50 transition-[box-shadow,border-color] duration-200 ease-out overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-slate-500 mb-3 flex-wrap">
                        <FiCalendar size={16} className="text-blue-600" />
                        <time dateTime={post.createdAt}>
                          {new Date(post.createdAt).toLocaleDateString(locale === 'en' ? 'en-US' : 'ru-RU', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                        <span className="px-2 py-1 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full text-xs font-semibold shadow-md">
                          {t.blog.categories[post.category as keyof typeof t.blog.categories] || post.category}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-slate-900 mb-3">
                        {post.title}
                      </h2>
                      
                      <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
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
      </section>

      {/* CTA Section */}
      {blogPosts.length > 0 && (
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-dark opacity-30"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-12 border border-blue-600/30 shadow-xl">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 leading-tight px-4">
                {t.home.hero.chooseMethod}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-blue-200 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                Получайте торговые сигналы в Telegram или используйте веб-приложение
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                <Link
                  href="/app"
                  className="btn-primary px-6 py-4 md:px-10 md:py-5 text-base md:text-lg font-semibold shadow-2xl hover:scale-105 transition-transform duration-200 ease-out will-change-transform flex items-center justify-center gap-2"
                >
                  <FiBarChart2 size={20} className="md:w-6 md:h-6" />
                  <span>{t.home.hero.ctaWebApp}</span>
                </Link>
                <Link
                  href="/telegram"
                  className="btn-telegram px-6 py-4 md:px-10 md:py-5 text-base md:text-lg font-semibold shadow-2xl hover:scale-105 transition-transform duration-200 ease-out will-change-transform flex items-center justify-center gap-2"
                >
                  <FiZap size={20} className="md:w-6 md:h-6" />
                  <span>{t.home.hero.ctaTelegram}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

