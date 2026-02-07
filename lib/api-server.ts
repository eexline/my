// Server-side API client для использования в Server Components

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

async function serverRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_URL}${endpoint}`
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
      cache: 'no-store', // Всегда получаем свежие данные
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Unknown error' }))
      throw new Error(error.error || `HTTP ${response.status}`)
    }

    return response.json()
  } catch (error: any) {
    console.error(`API request failed: ${endpoint}`, error)
    throw error
  }
}

export async function getBlogs(published?: boolean) {
  const query = published ? '?published=true' : ''
  return serverRequest<any[]>(`/api/blogs${query}`)
}

export async function getBlog(slug: string) {
  return serverRequest<any>(`/api/blogs/${slug}`)
}

