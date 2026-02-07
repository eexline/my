'use client'

import { useEffect } from 'react'

// Компонент для отключения защиты контента на странице админки
export function AdminContentProtection() {
  useEffect(() => {
    // Отключаем защиту от выделения для админки
    const enableSelection = () => {
      document.body.style.userSelect = 'text'
      document.body.style.webkitUserSelect = 'text'
      document.body.style.mozUserSelect = 'text'
      document.body.style.msUserSelect = 'text'
    }

    // Разрешаем контекстное меню в админке
    const enableContextMenu = (e: MouseEvent) => {
      e.stopPropagation()
    }

    // Разрешаем копирование в админке
    const enableCopy = (e: KeyboardEvent) => {
      e.stopPropagation()
    }

    // Разрешаем выделение
    const enableSelectStart = (e: Event) => {
      e.stopPropagation()
    }

    enableSelection()

    // Добавляем обработчики, которые останавливают распространение событий
    document.addEventListener('contextmenu', enableContextMenu, true)
    document.addEventListener('keydown', enableCopy, true)
    document.addEventListener('selectstart', enableSelectStart, true)

    // Очистка при размонтировании
    return () => {
      document.removeEventListener('contextmenu', enableContextMenu, true)
      document.removeEventListener('keydown', enableCopy, true)
      document.removeEventListener('selectstart', enableSelectStart, true)
    }
  }, [])

  return null
}

