import { ReactNode } from 'react'
import { PocketOptionLink } from '@/components/PocketOptionLink'

/**
 * Парсит строку перевода и заменяет маркеры <PocketOptionLink>...</PocketOptionLink> на компоненты
 */
export function renderTranslation(
  text: string,
  variant: 'default' | 'underline' | 'button' | 'light' = 'default',
  keyPrefix?: string
): ReactNode {
  if (!text) return null

  // Регулярное выражение для поиска <PocketOptionLink>...</PocketOptionLink>
  const regex = /<PocketOptionLink(?: variant="(\w+)")?>([^<]*)<\/PocketOptionLink>/g
  
  const parts: ReactNode[] = []
  let lastIndex = 0
  let match
  let linkIndex = 0

  while ((match = regex.exec(text)) !== null) {
    // Добавляем текст до маркера
    if (match.index > lastIndex) {
      const textPart = text.substring(lastIndex, match.index)
      if (textPart) {
        parts.push(
          <span key={keyPrefix ? `${keyPrefix}-text-${lastIndex}` : `text-${lastIndex}`}>
            {textPart}
          </span>
        )
      }
    }

    // Определяем вариант из атрибута или используем переданный
    const linkVariant = (match[1] || variant) as 'default' | 'underline' | 'button' | 'light'
    const linkText = match[2].trim()

    // Добавляем компонент PocketOptionLink с suppressHydrationWarning
    parts.push(
      <PocketOptionLink 
        key={keyPrefix ? `${keyPrefix}-link-${linkIndex}` : `link-${linkIndex}`} 
        variant={linkVariant}
      >
        {linkText}
      </PocketOptionLink>
    )

    lastIndex = regex.lastIndex
    linkIndex++
  }

  // Добавляем оставшийся текст
  if (lastIndex < text.length) {
    const remainingText = text.substring(lastIndex)
    if (remainingText) {
      parts.push(
        <span key={keyPrefix ? `${keyPrefix}-text-${lastIndex}` : `text-${lastIndex}`}>
          {remainingText}
        </span>
      )
    }
  }

  // Если не было совпадений, возвращаем исходный текст
  if (parts.length === 0) {
    return text
  }

  return <span suppressHydrationWarning>{parts}</span>
}

