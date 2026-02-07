// API Client для работы с бэкендом

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export class ApiClient {
  private baseUrl: string
  private token: string | null = null

  constructor(baseUrl: string = API_URL) {
    if (!baseUrl) {
      throw new Error('API URL не настроен. Установите переменную окружения NEXT_PUBLIC_API_URL')
    }
    this.baseUrl = baseUrl
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('admin_token')
    }
  }

  setToken(token: string) {
    this.token = token
    if (typeof window !== 'undefined') {
      localStorage.setItem('admin_token', token)
    }
  }

  clearToken() {
    this.token = null
    if (typeof window !== 'undefined') {
      localStorage.removeItem('admin_token')
    }
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string> || {}),
    }

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      })

      if (!response.ok) {
        const error = await response.json().catch(() => ({ error: 'Unknown error' }))
        throw new Error(error.error || `HTTP ${response.status}`)
      }

      return response.json()
    } catch (error: any) {
      // Улучшенная обработка ошибок сети
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        throw new Error(`Не удалось подключиться к API. Убедитесь, что сервер запущен на ${this.baseUrl}`)
      }
      throw error
    }
  }

  // Auth
  async login(username: string, password: string) {
    const data = await this.request<{ token: string; user: any }>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    })
    if (data.token) {
      this.setToken(data.token)
    }
    return data
  }

  async verify() {
    return this.request<{ valid: boolean; user: any }>('/api/auth/verify')
  }

  // Links
  async getLinks() {
    return this.request<Record<string, string>>('/api/links')
  }

  async updateLinks(links: Record<string, string>) {
    return this.request<{ success: boolean; message: string }>('/api/links', {
      method: 'PUT',
      body: JSON.stringify(links),
    })
  }

  // Blogs
  async getBlogs(published?: boolean) {
    const query = published ? '?published=true' : ''
    return this.request<any[]>('/api/blogs' + query)
  }

  async getBlog(slug: string) {
    return this.request<any>(`/api/blogs/${slug}`)
  }

  async createBlog(data: any) {
    return this.request<any>('/api/blogs', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async updateBlog(id: string, data: any) {
    return this.request<any>(`/api/blogs/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  async deleteBlog(id: string) {
    return this.request<{ success: boolean; message: string }>(`/api/blogs/${id}`, {
      method: 'DELETE',
    })
  }

  async getBlogStats() {
    return this.request<{ total: number; published: number; drafts: number; totalViews: number }>('/api/blogs/stats/summary')
  }

  async getBlogCategories() {
    return this.request<string[]>('/api/blogs/categories/list')
  }

  async getBlogsWithFilters(published?: boolean, category?: string, search?: string) {
    const params = new URLSearchParams()
    if (published) params.append('published', 'true')
    if (category) params.append('category', category)
    if (search) params.append('search', search)
    const query = params.toString()
    return this.request<any[]>(`/api/blogs${query ? '?' + query : ''}`)
  }

  // Upload
  async uploadImage(file: File): Promise<{ url: string; filename: string }> {
    const formData = new FormData()
    formData.append('image', file)

    const url = `${this.baseUrl}/api/upload/image`
    const headers: HeadersInit = {}

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`
    }

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: formData,
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Unknown error' }))
      throw new Error(error.error || `HTTP ${response.status}`)
    }

    return response.json()
  }
}

export const apiClient = new ApiClient()

