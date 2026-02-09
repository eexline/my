'use client'

import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  title: string
  subtitle: string
  items: {
    q1: FAQItem
    q2: FAQItem
    q3: FAQItem
    q4: FAQItem
  }
}

export function FAQ({ title, subtitle, items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqArray = [items.q1, items.q2, items.q3, items.q4]

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-16 md:py-20 px-4 overflow-hidden">
      {/* Градиентный фон для FAQ */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-white to-blue-50/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-50/30 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-indigo-200/15 rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-1/2 w-96 h-96 bg-primary-200/15 rounded-full blur-3xl translate-x-1/2"></div>
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12 md:mb-16 relative z-20">
          <h2 className="section-title mb-4 bg-gradient-to-r from-primary-800 via-primary-700 to-primary-600 bg-clip-text text-transparent drop-shadow-sm">
            {title}
          </h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>
        <div className="space-y-4">
          {faqArray.map((item, index) => (
            <div
              key={index}
              className="card-gradient overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-primary-50/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {item.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <FiChevronUp size={24} className="text-primary-600" />
                  ) : (
                    <FiChevronDown size={24} className="text-gray-400" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

