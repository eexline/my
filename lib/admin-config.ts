// Конфигурация админки
export const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123' // Измените пароль!

// Ключи для localStorage
export const STORAGE_KEYS = {
  LINKS: 'admin_links_config',
  BLOGS: 'admin_blogs_config',
  AUTH: 'admin_auth_token',
} as const

// Интерфейсы для конфигурации
export interface LinksConfig {
  pocketOptionRef: string
  telegramChannel: string
  [key: string]: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  category: string
  published: boolean
}

export interface BlogsConfig {
  posts: BlogPost[]
}

// Функции для работы с конфигурацией
export function getLinksConfig(): LinksConfig {
  if (typeof window === 'undefined') {
    return {
      pocketOptionRef: 'https://pocketoption.com',
      telegramChannel: 'https://t.me/your_channel',
    }
  }

  const stored = localStorage.getItem(STORAGE_KEYS.LINKS)
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch {
      return getDefaultLinksConfig()
    }
  }
  return getDefaultLinksConfig()
}

export function saveLinksConfig(config: LinksConfig): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEYS.LINKS, JSON.stringify(config))
}

export function getDefaultLinksConfig(): LinksConfig {
  return {
    pocketOptionRef: 'https://pocketoption.com',
    telegramChannel: 'https://t.me/your_channel',
  }
}

export function getBlogsConfig(): BlogsConfig {
  if (typeof window === 'undefined') {
    return { posts: [] }
  }

  const stored = localStorage.getItem(STORAGE_KEYS.BLOGS)
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch {
      return { posts: [] }
    }
  }
  return { posts: [] }
}

export function saveBlogsConfig(config: BlogsConfig): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEYS.BLOGS, JSON.stringify(config))
}

export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false
  return localStorage.getItem(STORAGE_KEYS.AUTH) === 'true'
}

export function setAuthenticated(value: boolean): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEYS.AUTH, value.toString())
}

