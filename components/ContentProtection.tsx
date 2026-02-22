'use client'

import { useEffect, useState } from 'react'

export function ContentProtection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return
    
    // Проверка, находится ли элемент внутри админ-панели
    const isInAdminPanel = (target: EventTarget | null): boolean => {
      if (!target || !(target instanceof HTMLElement)) return false
      // Проверяем, находится ли элемент внутри формы админ-панели или внутри элементов с id="username", id="password"
      const adminForm = target.closest('form')
      const isAdminInput = target.id === 'username' || target.id === 'password' || 
                          !!target.closest('#username') || !!target.closest('#password')
      const isAdminPage = window.location.pathname === '/admin' || 
                         !!target.closest('[data-admin="true"]')
      return !!(adminForm && (isAdminInput || isAdminPage)) || isAdminPage
    }

    // ========== ЗАЩИТА ОТ ВЫДЕЛЕНИЯ ТЕКСТА ==========
    const disableSelection = (e: Event) => {
      if (isInAdminPanel(e.target)) return
      e.preventDefault()
      return false
    }

    // ========== ЗАЩИТА ОТ КОНТЕКСТНОГО МЕНЮ ==========
    const disableContextMenu = (e: MouseEvent) => {
      if (isInAdminPanel(e.target)) return
      e.preventDefault()
      return false
    }

    // ========== ЗАЩИТА ОТ ПЕРЕТАСКИВАНИЯ ==========
    const disableDrag = (e: DragEvent) => {
      e.preventDefault()
      return false
    }

    const disableDragStart = (e: DragEvent) => {
      e.preventDefault()
      return false
    }

    // ========== ЗАЩИТА ОТ КОПИРОВАНИЯ ЧЕРЕЗ КЛАВИАТУРУ ==========
    const disableCopy = (e: KeyboardEvent) => {
      // Разрешаем вставку (Ctrl+V) в админ-панели
      if (isInAdminPanel(e.target) && (e.ctrlKey || e.metaKey) && (e.key === 'v' || e.key === 'V')) {
        return
      }
      // Разрешаем копирование (Ctrl+C) в админ-панели
      if (isInAdminPanel(e.target) && (e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) {
        return
      }
      // Разрешаем вырезание (Ctrl+X) в админ-панели
      if (isInAdminPanel(e.target) && (e.ctrlKey || e.metaKey) && (e.key === 'x' || e.key === 'X')) {
        return
      }
      // Ctrl+C, Ctrl+X, Ctrl+A, Ctrl+V, Ctrl+S, Ctrl+P
      if ((e.ctrlKey || e.metaKey) && (
        e.key === 'c' || e.key === 'C' || 
        e.key === 'x' || e.key === 'X' || 
        e.key === 'a' || e.key === 'A' ||
        e.key === 'v' || e.key === 'V' ||
        e.key === 's' || e.key === 'S' ||
        e.key === 'p' || e.key === 'P' ||
        e.key === 'u' || e.key === 'U' // Ctrl+U (View Source)
      )) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
      // ВРЕМЕННО ОТКЛЮЧЕНО: БЛОКИРОВКА F12 И ВСЕХ СПОСОБОВ ОТКРЫТИЯ DEVTOOLS
      // if (e.key === 'F12' || 
      //     e.keyCode === 123 || // F12 keyCode
      //     (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c' || e.key === 'K' || e.key === 'k'))) {
      //   e.preventDefault()
      //   e.stopPropagation()
      //   e.stopImmediatePropagation()
      //   return false
      // }
    }

    // ========== ЗАЩИТА ОТ PRINT SCREEN ==========
    const disablePrintScreen = (e: KeyboardEvent) => {
      if (e.key === 'PrintScreen' || (e.shiftKey && e.key === 'F13')) {
        e.preventDefault()
        return false
      }
    }

    // ========== ЗАЩИТА ОТ БУФЕРА ОБМЕНА ==========
    const disableClipboard = (e: ClipboardEvent) => {
      if (isInAdminPanel(e.target)) return
      e.preventDefault()
      if (e.clipboardData) {
        e.clipboardData.setData('text/plain', '')
        e.clipboardData.setData('text/html', '')
      }
      return false
    }

    // ========== ЗАЩИТА ОТ ВСТАВКИ ==========
    const disablePaste = (e: ClipboardEvent) => {
      if (isInAdminPanel(e.target)) return
      e.preventDefault()
      return false
    }

    // ========== ЗАЩИТА ОТ КОПИРОВАНИЯ ИЗОБРАЖЕНИЙ ==========
    const disableImageContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'IMG') {
        e.preventDefault()
        return false
      }
    }

    // ========== ЗАЩИТА ОТ IFRAME EMBEDDING ==========
    if (window.self !== window.top && window.top) {
      window.top.location.href = window.self.location.href
    }

    // ========== ЗАЩИТА ОТ DEVTOOLS (обнаружение открытия) ==========
    let devtools = { open: false, orientation: null as string | null }
    const threshold = 160
    let devToolsWarningCount = 0

    const detectDevTools = () => {
      const widthThreshold = window.outerWidth - window.innerWidth > threshold
      const heightThreshold = window.outerHeight - window.innerHeight > threshold
      
      if (widthThreshold || heightThreshold) {
        if (!devtools.open) {
          devtools.open = true
          devToolsWarningCount++
          
          console.clear()
          console.log('%c⚠️ ВНИМАНИЕ! ⚠️', 'color: red; font-size: 50px; font-weight: bold;')
          console.log('%cНе пытайтесь копировать контент этого сайта!', 'color: red; font-size: 20px;')
          console.log('%cЭто действие может нарушать авторские права.', 'color: red; font-size: 16px;')
          
          // Блокируем DevTools через закрытие окна или перенаправление
          if (devToolsWarningCount > 2) {
            // Попытка закрыть DevTools через blur
            window.blur()
            window.focus()
            // Перенаправление на главную страницу
            if (devToolsWarningCount > 3) {
              window.location.href = '/'
            }
          }
        }
      } else {
        devtools.open = false
      }
    }

    // ВРЕМЕННО ОТКЛЮЧЕНО: обнаружение DevTools через размеры окна
    // const devToolsInterval = setInterval(detectDevTools, 100) // Более частое обнаружение

    // ========== ВРЕМЕННО ОТКЛЮЧЕНО: ЗАЩИТА ОТ ИНСПЕКТИРОВАНИЯ ЭЛЕМЕНТОВ ==========
    const disableInspect = (e: KeyboardEvent) => {
      // ВРЕМЕННО ОТКЛЮЧЕНО для разработки
      // if (e.key === 'F12' || 
      //     e.keyCode === 123 ||
      //     (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'C' || e.key === 'c' || e.key === 'J' || e.key === 'j' || e.key === 'K' || e.key === 'k'))) {
      //   e.preventDefault()
      //   e.stopPropagation()
      //   e.stopImmediatePropagation()
      //   return false
      // }
    }
    
    // ВРЕМЕННО ОТКЛЮЧЕНО: Дополнительная защита через перехват всех F-клавиш
    const disableFunctionKeys = (e: KeyboardEvent) => {
      // ВРЕМЕННО ОТКЛЮЧЕНО для разработки
      // if (e.keyCode >= 112 && e.keyCode <= 123) { // F1-F12
      //   if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey)) {
      //     e.preventDefault()
      //     e.stopPropagation()
      //     e.stopImmediatePropagation()
      //     return false
      //   }
      // }
    }

    // ========== ЗАЩИТА ОТ ПРАВОЙ КНОПКИ МЫШИ НА ИЗОБРАЖЕНИЯХ ==========
    const disableImageRightClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'IMG' || target.closest('img')) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
    }

    // ========== ЗАЩИТА ОТ ВЫДЕЛЕНИЯ МЫШЬЮ ==========
    const disableMouseSelection = (e: MouseEvent) => {
      if (e.button === 0) { // Левая кнопка мыши
        const selection = window.getSelection()
        if (selection && selection.toString().length > 0) {
          selection.removeAllRanges()
        }
      }
    }

    // ========== ЗАЩИТА ОТ АВТОМАТИЧЕСКОГО КОПИРОВАНИЯ ==========
    const disableAutoCopy = () => {
      document.addEventListener('copy', disableClipboard, true)
      document.addEventListener('cut', disableClipboard, true)
      document.addEventListener('paste', disablePaste, true)
    }

    // ========== ЗАЩИТА ОТ КОПИРОВАНИЯ ЧЕРЕЗ ВЫДЕЛЕНИЕ ==========
    const disableTextSelection = () => {
      // CSS защита
      document.body.style.userSelect = 'none'
      document.body.style.webkitUserSelect = 'none'
      ;(document.body.style as any).mozUserSelect = 'none'
      ;(document.body.style as any).msUserSelect = 'none'
      ;(document.body.style as any).webkitTouchCallout = 'none'
      
      // JavaScript защита
      document.addEventListener('selectstart', disableSelection, true)
      document.addEventListener('mousedown', disableMouseSelection, true)
    }

    // ========== ЗАЩИТА ОТ КОПИРОВАНИЯ ИЗОБРАЖЕНИЙ ==========
    const protectImages = () => {
      const images = document.querySelectorAll('img')
      images.forEach(img => {
        img.setAttribute('draggable', 'false')
        // Не блокируем pointer-events для изображений внутри ссылок
        if (!img.closest('a')) {
          img.style.pointerEvents = 'none'
        }
        img.style.userSelect = 'none'
        ;(img.style as any).webkitUserDrag = 'none'
        img.style.webkitUserSelect = 'none'
      })
    }


    // ========== ЗАЩИТА ОТ БОТОВ/СКРАПЕРОВ ==========
    const detectBots = () => {
      // Проверка на автоматические инструменты
      if (navigator.webdriver || 
          (window as any).__webdriver_script_fn || 
          (window as any).__selenium_unwrapped || 
          (window as any).__webdriver_evaluate || 
          (window as any).__selenium_evaluate || 
          (window as any).__fxdriver_evaluate ||
          (window as any).__driver_evaluate ||
          (window as any).__webdriver_script_func ||
          (window as any).__webdriver_script_fn ||
          (window as any).__fxdriver_unwrapped ||
          (window as any).__driver_unwrapped ||
          (window as any).__selenium_unwrapped ||
          (window as any).__webdriver_unwrapped) {
        // Обнаружен бот/скрапер
        console.clear()
        console.log('%c⚠️ Обнаружена автоматизация! ⚠️', 'color: red; font-size: 30px; font-weight: bold;')
      }
    }

    // ========== ЗАЩИТА ОТ КОПИРОВАНИЯ ЧЕРЕЗ КОНСОЛЬ ==========
    const protectConsole = () => {
      // Очистка консоли при попытке использования
      const originalLog = console.log
      const originalWarn = console.warn
      const originalError = console.error
      const originalDebug = console.debug
      
      console.log = function(...args: any[]) {
        if (args.some(arg => typeof arg === 'string' && (arg.includes('copy') || arg.includes('select') || arg.includes('getSelection')))) {
          return
        }
        originalLog.apply(console, args)
      }
      
      // Блокировка debugger
      const originalDebugger = (window as any).debugger
      ;(window as any).debugger = function() {
        // Блокируем debugger
        return
      }
    }
    
    // ========== ДОПОЛНИТЕЛЬНАЯ ЗАЩИТА ОТ DEVTOOLS ==========
    const blockDevTools = () => {
      // Блокировка через обнаружение консоли
      const noop = () => {}
      const devtools = {
        open: false,
        orientation: null as string | null
      }
      
      setInterval(() => {
        if (window.outerHeight - window.innerHeight > 200 || 
            window.outerWidth - window.innerWidth > 200) {
          if (!devtools.open) {
            devtools.open = true
            // Попытка закрыть DevTools
            window.blur()
            window.focus()
            // Перенаправление после нескольких попыток
            setTimeout(() => {
              if (devtools.open) {
                window.location.href = '/'
              }
            }, 1000)
          }
        } else {
          devtools.open = false
        }
      }, 100)
    }
    
    // ВРЕМЕННО ОТКЛЮЧЕНО: блокировка DevTools
    // blockDevTools()

    // ========== ПРИМЕНЕНИЕ ВСЕХ ЗАЩИТ ==========
    document.addEventListener('selectstart', disableSelection, true)
    document.addEventListener('contextmenu', disableContextMenu, true)
    document.addEventListener('contextmenu', disableImageContextMenu, true)
    document.addEventListener('contextmenu', disableImageRightClick, true)
    document.addEventListener('dragstart', disableDrag, true)
    document.addEventListener('dragstart', disableDragStart, true)
    document.addEventListener('keydown', disableCopy, true)
    document.addEventListener('keydown', disablePrintScreen, true)
    document.addEventListener('keydown', disableInspect, true)
    document.addEventListener('keydown', disableFunctionKeys, true)
    document.addEventListener('copy', disableClipboard, true)
    document.addEventListener('cut', disableClipboard, true)
    document.addEventListener('paste', disablePaste, true)
    
    disableTextSelection()
    disableAutoCopy()
    protectImages()
    detectBots()
    protectConsole()

    // Защита изображений при динамической загрузке
    const observer = new MutationObserver(() => {
      protectImages()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    // ========== ОЧИСТКА ПРИ РАЗМОНТИРОВАНИИ ==========
    return () => {
      // clearInterval(devToolsInterval) // ВРЕМЕННО ОТКЛЮЧЕНО
      observer.disconnect()
      
      document.removeEventListener('selectstart', disableSelection, true)
      document.removeEventListener('contextmenu', disableContextMenu, true)
      document.removeEventListener('contextmenu', disableImageContextMenu, true)
      document.removeEventListener('contextmenu', disableImageRightClick, true)
      document.removeEventListener('dragstart', disableDrag, true)
      document.removeEventListener('dragstart', disableDragStart, true)
      document.removeEventListener('keydown', disableCopy, true)
      document.removeEventListener('keydown', disablePrintScreen, true)
      document.removeEventListener('keydown', disableInspect, true)
      document.removeEventListener('keydown', disableFunctionKeys, true)
      document.removeEventListener('copy', disableClipboard, true)
      document.removeEventListener('cut', disableClipboard, true)
      document.removeEventListener('paste', disablePaste, true)
      document.removeEventListener('mousedown', disableMouseSelection, true)
      
      document.body.style.userSelect = ''
      document.body.style.webkitUserSelect = ''
      ;(document.body.style as any).mozUserSelect = ''
      ;(document.body.style as any).msUserSelect = ''
      ;(document.body.style as any).webkitTouchCallout = ''
    }
  }, [mounted])

  if (!mounted) return null

  return null
}
