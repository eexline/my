import nextDynamic from 'next/dynamic'
import { getBlogs } from '@/lib/api-server'
import { getLocale } from '@/lib/get-locale'
import { getTranslations } from '@/lib/get-translations'

// Делаем страницу динамической, так как данные приходят из внешнего API
export const dynamic = 'force-dynamic'

// Code splitting для компонентов
const Header = nextDynamic(() => import('@/components/Header').then(mod => ({ default: mod.Header })), { 
  ssr: true,
  loading: () => <div className="h-16 bg-white border-b border-gray-200 animate-pulse" />
})
const Footer = nextDynamic(() => import('@/components/Footer').then(mod => ({ default: mod.Footer })), { 
  ssr: true,
  loading: () => <div className="h-32 bg-gray-50 animate-pulse" />
})
const BlogPageClient = nextDynamic(() => import('./page-client').then(mod => ({ default: mod.BlogPageClient })), { 
  ssr: true 
})

export async function generateMetadata() {
  const locale = await getLocale()
  const t = getTranslations(locale)
  return {
    title: t.blog.metadata.title,
    description: t.blog.metadata.description,
  }
}

async function getBlogPosts() {
  try {
    const posts = await getBlogs(true) // Только опубликованные
    return posts || []
  } catch (error) {
    console.error('Failed to fetch blog posts:', error)
    return []
  }
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts()
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <BlogPageClient blogPosts={blogPosts} />
      <Footer />
    </div>
  )
}


