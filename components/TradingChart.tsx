'use client'

import { useState } from 'react'
import { FiTrendingUp, FiTrendingDown, FiZap } from 'react-icons/fi'
import { useTranslations } from '@/hooks/useTranslations'

const timeframes = ['M1', 'M5', 'M15', 'M30', 'H1', 'H4', 'D1']
const pairs = ['EUR/USD', 'GBP/USD', 'USD/JPY', 'AUD/USD', 'USD/CAD']

export function TradingChart() {
  const t = useTranslations()
  const [selectedTimeframe, setSelectedTimeframe] = useState('M15')
  const [selectedPair, setSelectedPair] = useState('EUR/USD')
  const [direction, setDirection] = useState<'BUY' | 'SELL'>('BUY')

  // Статичный график - простая SVG линия
  const generateChartPath = () => {
    const points = 50
    const path = []
    const basePrice = direction === 'BUY' ? 0.3 : 0.7 // BUY идет вверх, SELL вниз
    
    for (let i = 0; i <= points; i++) {
      const x = (i / points) * 100
      // Простая линия с небольшими колебаниями
      const trend = direction === 'BUY' 
        ? basePrice - (i / points) * 0.2 + Math.sin(i * 0.3) * 0.05
        : basePrice + (i / points) * 0.2 - Math.sin(i * 0.3) * 0.05
      const y = Math.max(10, Math.min(90, trend * 100))
      path.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`)
    }
    return path.join(' ')
  }

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-2xl border-2 border-dashed border-blue-500/50 shadow-2xl max-w-full overflow-visible">
      {/* Бейдж ДЕМО */}
      <div className="absolute -top-2.5 sm:-top-3 left-1/2 -translate-x-1/2 z-10">
        <div className="bg-yellow-500 text-slate-900 px-2.5 sm:px-3 md:px-4 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-bold shadow-lg border-2 border-yellow-400 whitespace-nowrap">
          {t.tradingChart.demoBadge}
        </div>
      </div>
      
      <div className="p-3 sm:p-4 md:p-5 lg:p-6 overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 min-w-0 flex-shrink">
          <div className="icon-bubble-gradient w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex-shrink-0">
            <FiZap size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl truncate">{t.tradingChart.title}</h3>
            <p className="text-blue-300 text-[10px] sm:text-xs md:text-sm font-medium truncate">{t.tradingChart.subtitle}</p>
          </div>
        </div>
        <div
          className={`px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full font-bold flex items-center gap-1 sm:gap-1.5 md:gap-2 text-xs sm:text-sm md:text-base flex-shrink-0 ${
            direction === 'BUY'
              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
              : 'bg-red-500/20 text-red-400 border border-red-500/30'
          }`}
        >
          {direction === 'BUY' ? <FiTrendingUp size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" /> : <FiTrendingDown size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />}
          <span className="whitespace-nowrap">{direction}</span>
        </div>
      </div>

      {/* Выбор валютной пары */}
      <div className="mb-2.5 sm:mb-3 md:mb-4">
        <label className="block text-blue-300 text-[10px] sm:text-xs md:text-sm font-medium mb-1 sm:mb-1.5 md:mb-2">{t.tradingChart.currencyPair}</label>
        <select
          value={selectedPair}
          onChange={(e) => setSelectedPair(e.target.value)}
          className="w-full bg-slate-800/50 border border-blue-700/30 rounded-lg px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 text-xs sm:text-sm md:text-base text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {pairs.map((pair) => (
            <option key={pair} value={pair} className="bg-slate-800">
              {pair}
            </option>
          ))}
        </select>
      </div>

      {/* Выбор таймфрейма */}
      <div className="mb-2.5 sm:mb-3 md:mb-4">
        <label className="block text-blue-300 text-[10px] sm:text-xs md:text-sm font-medium mb-1 sm:mb-1.5 md:mb-2">{t.tradingChart.timeframe}</label>
        <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
          {timeframes.map((tf) => (
            <button
              key={tf}
              onClick={() => setSelectedTimeframe(tf)}
              className={`px-2 py-1 sm:px-2.5 sm:py-1.5 md:px-3 md:py-2 lg:px-4 lg:py-2 rounded-lg text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold transition-all ${
                selectedTimeframe === tf
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-blue-700/30'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* Выбор направления */}
      <div className="mb-3 sm:mb-4 md:mb-6">
        <label className="block text-blue-300 text-[10px] sm:text-xs md:text-sm font-medium mb-1 sm:mb-1.5 md:mb-2">{t.tradingChart.direction}</label>
        <div className="flex gap-1.5 sm:gap-2 md:gap-3">
          <button
            onClick={() => setDirection('BUY')}
            className={`flex-1 px-2.5 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 rounded-lg text-xs sm:text-sm md:text-base font-bold transition-all flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 ${
              direction === 'BUY'
                ? 'bg-green-500/20 text-green-400 border-2 border-green-500/50 shadow-lg shadow-green-500/20'
                : 'bg-slate-800/50 text-slate-400 border-2 border-slate-700 hover:bg-slate-700/50'
            }`}
          >
            <FiTrendingUp size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
            <span className="whitespace-nowrap">BUY</span>
          </button>
          <button
            onClick={() => setDirection('SELL')}
            className={`flex-1 px-2.5 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 rounded-lg text-xs sm:text-sm md:text-base font-bold transition-all flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 ${
              direction === 'SELL'
                ? 'bg-red-500/20 text-red-400 border-2 border-red-500/50 shadow-lg shadow-red-500/20'
                : 'bg-slate-800/50 text-slate-400 border-2 border-slate-700 hover:bg-slate-700/50'
            }`}
          >
            <FiTrendingDown size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
            <span className="whitespace-nowrap">SELL</span>
          </button>
        </div>
      </div>

      {/* Статичный график */}
      <div className="bg-slate-800/50 rounded-lg p-2 sm:p-3 md:p-4 border border-blue-700/30">
        <div className="aspect-video relative min-h-[150px] sm:min-h-[200px] md:min-h-[250px] overflow-hidden rounded-lg">
          {/* Градиентный фон, показывающий направление */}
          <div 
            className={`absolute inset-0 ${
              direction === 'BUY' 
                ? 'bg-gradient-to-t from-green-500/20 via-green-500/10 to-transparent' 
                : 'bg-gradient-to-b from-red-500/20 via-red-500/10 to-transparent'
            }`}
          />
          
          {/* Стрелки направления на фоне */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            {direction === 'BUY' ? (
              <svg viewBox="0 0 24 24" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-green-500">
                <path d="M12 2L2 12h6v10h8V12h6L12 2z" fill="currentColor" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-red-500">
                <path d="M12 22L22 12h-6V2H8v10H2l10 10z" fill="currentColor" />
              </svg>
            )}
          </div>
          
        </div>
        <div className="mt-2 sm:mt-3 text-center space-y-1">
          <p className="text-blue-300 text-xs sm:text-sm font-medium">
            {selectedPair} • {selectedTimeframe} • {direction}
          </p>
          <p className="text-yellow-400/80 text-xs font-semibold">
            {t.tradingChart.warning}
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}

