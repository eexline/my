'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { apiClient } from '@/lib/api-client'

// Динамический импорт React Quill для избежания SSR проблем
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'

interface BlogEditorProps {
  value: string
  onChange: (value: string) => void
}

export function BlogEditor({ value, onChange }: BlogEditorProps) {
  const quillRef = useRef<any>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && quillRef.current) {
      const quill = quillRef.current.getEditor()
      
      // Отключаем защиту от выделения для редактора
      const editorElement = quillRef.current.getEditor().root
      if (editorElement) {
        editorElement.style.userSelect = 'text'
        editorElement.style.webkitUserSelect = 'text'
        editorElement.style.mozUserSelect = 'text'
        editorElement.style.msUserSelect = 'text'
        
        // Разрешаем события выделения в редакторе
        editorElement.addEventListener('selectstart', (e: Event) => {
          e.stopPropagation()
        }, true)
        editorElement.addEventListener('mousedown', (e: Event) => {
          e.stopPropagation()
        }, true)
      }
      
      // Настройка загрузки изображений
      const toolbar = quill.getModule('toolbar')
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
            const range = quill.getSelection(true)
            quill.insertText(range.index, 'Загрузка изображения...', 'user')
            quill.setSelection(range.index + 22, 0)

            // Загружаем изображение
            const result = await apiClient.uploadImage(file)
            
            // Вставляем изображение в редактор (используем относительный путь через rewrites)
            const imageUrl = result.url
            quill.deleteText(range.index, 22)
            quill.insertEmbed(range.index, 'image', imageUrl, 'user')
            quill.setSelection(range.index + 1, 0)
          } catch (error: any) {
            alert('Ошибка загрузки изображения: ' + error.message)
            const range = quill.getSelection(true)
            quill.deleteText(range.index - 22, 22)
          }
        }
      })
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
    <div className="blog-editor">
      <ReactQuill
        ref={quillRef}
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

