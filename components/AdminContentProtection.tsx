'use client'

import { useEffect } from 'react'

// Компонент для отключения защиты контента на странице админки
export function AdminContentProtection() {
  useEffect(() => {
    // Отключаем защиту от выделения для админки
    const enableSelection = () => {
      document.body.style.userSelect = 'text'
      document.body.style.setProperty('-webkit-user-select', 'text')
      document.body.style.setProperty('-moz-user-select', 'text')
      document.body.style.setProperty('-ms-user-select', 'text')
    }

    // Разрешаем контекстное меню в админке
    const enableContextMenu = (e: MouseEvent) => {
      e.stopPropagation()
    }

    // Разрешаем копирование в админке (для Ctrl+C)
    const enableCopyKey = (e: KeyboardEvent) => {
      e.stopPropagation()
    }

    // Разрешаем копирование через событие copy
    const enableCopy = (e: ClipboardEvent) => {
      e.stopPropagation()
    }

    // Разрешаем вырезание через событие cut
    const enableCut = (e: ClipboardEvent) => {
      e.stopPropagation()
    }

    // Разрешаем вставку в админке
    const enablePaste = (e: ClipboardEvent) => {
      e.stopPropagation()
    }

    // Разрешаем выделение
    const enableSelectStart = (e: Event) => {
      e.stopPropagation()
    }

    enableSelection()

    // Добавляем обработчики, которые останавливают распространение событий
    document.addEventListener('contextmenu', enableContextMenu, true)
    document.addEventListener('keydown', enableCopyKey, true)
    document.addEventListener('paste', enablePaste, true)
    document.addEventListener('copy', enableCopy, true)
    document.addEventListener('cut', enableCut, true)
    document.addEventListener('selectstart', enableSelectStart, true)

    // Очистка при размонтировании
    return () => {
      document.removeEventListener('contextmenu', enableContextMenu, true)
      document.removeEventListener('keydown', enableCopyKey, true)
      document.removeEventListener('paste', enablePaste, true)
      document.removeEventListener('copy', enableCopy, true)
      document.removeEventListener('cut', enableCut, true)
      document.removeEventListener('selectstart', enableSelectStart, true)
    }
  }, [])

  return null
}

