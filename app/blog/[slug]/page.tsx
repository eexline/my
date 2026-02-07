import nextDynamic from 'next/dynamic'
import { getBlog } from '@/lib/api-server'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getLocale } from '@/lib/get-locale'
import { getTranslations } from '@/lib/get-translations'

// Делаем страницу динамической, так как данные приходят из внешнего API
export const dynamic = 'force-dynamic'

const Header = nextDynamic(() => import('@/components/Header').then(mod => ({ default: mod.Header })), { 
  ssr: true,
  loading: () => <div className="h-16 bg-white border-b border-gray-200 animate-pulse" />
})
const Footer = nextDynamic(() => import('@/components/Footer').then(mod => ({ default: mod.Footer })), { 
  ssr: true,
  loading: () => <div className="h-32 bg-gray-50 animate-pulse" />
})
const BlogPostPageClient = nextDynamic(() => import('./page-client').then(mod => ({ default: mod.BlogPostPageClient })), { 
  ssr: true 
})

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

async function getBlogPost(slug: string) {
  try {
    const post = await getBlog(slug)
    return post
  } catch (error) {
    console.error('Failed to fetch blog post:', error)
    return null
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const locale = await getLocale()
  const t = getTranslations(locale)
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: `${t.blog.notFound} | ${t.blog.metadata.title}`,
    }
  }

  const metaTitle = post.metaTitle || post.title
  const metaDesc = post.metaDesc || post.excerpt

  return {
    title: `${metaTitle} | ${t.blog.metadata.title}`,
    description: metaDesc,
    keywords: post.metaKeywords || undefined,
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      images: post.featuredImage ? [post.featuredImage] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug)

  if (!post || !post.published) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <BlogPostPageClient post={post} />
      <Footer />
    </div>
  )
}

