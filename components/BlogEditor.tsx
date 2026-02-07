'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { apiClient } from '@/lib/api-client'

// Динамический импорт React Quill для избежания SSR проблем
// @ts-ignore - react-quill типы несовместимы с Next.js dynamic
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'

interface BlogEditorProps {
  value: string
  onChange: (value: string) => void
}

export function BlogEditor({ value, onChange }: BlogEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Ждем, пока ReactQuill полностью загрузится
      const timer = setTimeout(() => {
        const editorElement = editorRef.current?.querySelector('.ql-editor') as HTMLElement
        const quillContainer = editorRef.current?.querySelector('.ql-container') as HTMLElement
        
        if (editorElement) {
          // Отключаем защиту от выделения для редактора
          editorElement.style.userSelect = 'text'
          editorElement.style.setProperty('-webkit-user-select', 'text')
          editorElement.style.setProperty('-moz-user-select', 'text')
          editorElement.style.setProperty('-ms-user-select', 'text')
          
          // Разрешаем события выделения в редакторе
          editorElement.addEventListener('selectstart', (e: Event) => {
            e.stopPropagation()
          }, true)
          editorElement.addEventListener('mousedown', (e: Event) => {
            e.stopPropagation()
          }, true)
        }

        // Настройка загрузки изображений через глобальный доступ к Quill
        if (quillContainer) {
          // @ts-ignore - доступ к Quill через window
          const Quill = (window as any).Quill
          if (Quill) {
            const quillInstance = Quill.find(quillContainer)
            if (quillInstance) {
              const toolbar = quillInstance.getModule('toolbar')
              if (toolbar) {
                toolbar.addHandler('image', () => {
                  const input = document.createElement('input')
                  input.setAttribute('type', 'file')
                  input.setAttribute('accept', 'image/*')
                  input.click()

                  input.onchange = async () => {
                    const file = input.files?.[0]
                    if (!file) return

                    try {
                      // Показываем индикатор загрузки
                      const range = quillInstance.getSelection(true)
                      quillInstance.insertText(range.index, 'Загрузка изображения...', 'user')
                      quillInstance.setSelection(range.index + 22, 0)

                      // Загружаем изображение
                      const result = await apiClient.uploadImage(file)
                      
                      // Вставляем изображение в редактор
                      const imageUrl = result.url
                      quillInstance.deleteText(range.index, 22)
                      quillInstance.insertEmbed(range.index, 'image', imageUrl, 'user')
                      quillInstance.setSelection(range.index + 1, 0)
                    } catch (error: any) {
                      alert('Ошибка загрузки изображения: ' + error.message)
                      const range = quillInstance.getSelection(true)
                      quillInstance.deleteText(range.index - 22, 22)
                    }
                  }
                })
              }
            }
          }
        }
      }, 200)

      return () => clearTimeout(timer)
    }
  }, [])

  const modules = {
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'color': [] }, { 'background': [] }],
        ['link', 'image', 'video'],
        ['clean']
      ],
    },
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'color', 'background',
    'link', 'image', 'video'
  ]

  return (
    <div className="blog-editor" ref={editorRef}>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder="Начните писать статью..."
        style={{ minHeight: '400px' }}
      />
      <style jsx global>{`
        .blog-editor .ql-container {
          min-height: 400px;
          font-size: 16px;
        }
        .blog-editor .ql-editor {
          min-height: 400px;
          user-select: text !important;
          -webkit-user-select: text !important;
          -moz-user-select: text !important;
          -ms-user-select: text !important;
        }
        .blog-editor .ql-editor * {
          user-select: text !important;
          -webkit-user-select: text !important;
          -moz-user-select: text !important;
          -ms-user-select: text !important;
        }
        .blog-editor .ql-editor img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 16px 0;
        }
        /* Разрешаем выделение текста в редакторе */
        .blog-editor {
          user-select: text !important;
          -webkit-user-select: text !important;
          -moz-user-select: text !important;
          -ms-user-select: text !important;
        }
        .blog-editor * {
          user-select: text !important;
          -webkit-user-select: text !important;
          -moz-user-select: text !important;
          -ms-user-select: text !important;
        }
      `}</style>
    </div>
  )
}

