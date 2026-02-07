import { MetadataRoute } from 'next'
import { getBlogs } from '@/lib/api-server'

// Делаем sitemap динамическим, чтобы он генерировался при запросе, а не во время сборки
export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Обновляем раз в час

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://pocketoptionai.vercel.app'
  
  // Статические страницы
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/strategies`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bot`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/broker`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contacts`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/risk`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Динамические страницы блога
  let blogPages: MetadataRoute.Sitemap = []
  
  // Пытаемся получить посты из API, но не блокируем сборку, если API недоступен
  if (process.env.NEXT_PUBLIC_API_URL) {
    try {
      const posts = await getBlogs(true) // Только опубликованные
      if (posts && Array.isArray(posts)) {
        blogPages = posts.map((post: any) => ({
          url: `${baseUrl}/blog/${post.slug}`,
          lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(post.updatedAt || post.createdAt),
          changeFrequency: 'weekly' as const,
          priority: 0.7,
        }))
      }
    } catch (error) {
      // Тихая ошибка - просто не включаем посты блога в sitemap, если API недоступен
      // Это не критично, так как статические страницы все равно будут в sitemap
      console.warn('Failed to fetch blog posts for sitemap (non-critical):', error instanceof Error ? error.message : 'Unknown error')
    }
  }

  return [...staticPages, ...blogPages]
}


