'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PocketOptionLink } from '@/components/PocketOptionLink'
import Link from 'next/link'
import { FiCheck, FiShield, FiDollarSign, FiClock, FiTrendingUp, FiSmartphone, FiGlobe, FiZap, FiBarChart2 } from 'react-icons/fi'
import { renderTranslation } from '@/lib/render-translation'
import { useTranslations } from '@/hooks/useTranslations'

export function BrokerPageClient() {
  const t = useTranslations()

  const advantages = [
    {
      icon: FiDollarSign,
      title: t.broker.why.highPayouts.title,
      description: t.broker.why.highPayouts.description,
      details: t.broker.why.highPayouts.details
    },
    {
      icon: FiClock,
      title: t.broker.why.fastWithdrawals.title,
      description: t.broker.why.fastWithdrawals.description,
      details: t.broker.why.fastWithdrawals.details
    },
    {
      icon: FiShield,
      title: t.broker.why.reliability.title,
      description: t.broker.why.reliability.description,
      details: t.broker.why.reliability.details
    },
    {
      icon: FiSmartphone,
      title: t.broker.why.mobile.title,
      description: t.broker.why.mobile.description,
      details: t.broker.why.mobile.details
    },
    {
      icon: FiTrendingUp,
      title: t.broker.why.assets.title,
      description: t.broker.why.assets.description,
      details: t.broker.why.assets.details
    },
    {
      icon: FiGlobe,
      title: t.broker.why.support.title,
      description: t.broker.why.support.description,
      details: t.broker.why.support.details
    }
  ]

  const depositMethods = [
    t.broker.deposit.methods.cards,
    t.broker.deposit.methods.crypto,
    t.broker.deposit.methods.wallets,
    t.broker.deposit.methods.transfer,
    t.broker.deposit.methods.mobile
  ]

  const withdrawalMethods = [
    t.broker.withdrawal.methods.cards,
    t.broker.withdrawal.methods.crypto,
    t.broker.withdrawal.methods.wallets,
    t.broker.withdrawal.methods.transfer
  ]

  const tradingFeatures = t.broker.features.list

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-4 sm:pt-6 md:pt-8 lg:pt-4 xl:pt-6 pb-12 sm:pb-16 md:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8 min-h-[85vh] sm:min-h-[90vh] md:min-h-screen flex items-center">
          {/* Градиентные орбы для глубины */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow will-change-opacity"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-slow will-change-opacity" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow will-change-opacity" style={{ animationDelay: '2s' }}></div>
          </div>
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-dark opacity-30"></div>
          <div className="absolute inset-0 opacity-10 bg-pattern-dense"></div>
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 lg:mb-8 text-balance leading-[1.1] drop-shadow-lg" suppressHydrationWarning>
                {renderTranslation(t.broker.hero.title.replace('Pocket Option', '<PocketOptionLink>Pocket Option</PocketOptionLink>'), 'light', 'hero-title')}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 md:mb-10 lg:mb-12 max-w-3xl mx-auto text-balance drop-shadow font-medium leading-relaxed" suppressHydrationWarning>
                {renderTranslation(t.broker.hero.description, 'light', 'hero-description')}
              </p>
              
              {/* Два пути: Telegram или Веб-приложение */}
              <div className="mb-6 md:mb-8">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-4 md:mb-6 font-semibold">
                  {t.home.hero.chooseMethod}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-2xl mx-auto">
                  {/* Кнопка Telegram */}
                  <Link
                    href="/telegram"
                    className="btn-telegram flex-1 px-6 py-4 md:px-8 md:py-5 text-base md:text-lg font-semibold shadow-2xl hover:scale-105 transition-transform duration-200 ease-out will-change-transform flex items-center justify-center gap-2"
                  >
                    <FiZap size={20} className="md:w-6 md:h-6" />
                    <span>{t.home.hero.ctaTelegram}</span>
                  </Link>
                  {/* Кнопка Веб-приложение */}
                  <Link
                    href="/app"
                    className="btn-primary flex-1 px-6 py-4 md:px-8 md:py-5 text-base md:text-lg font-semibold shadow-2xl hover:shadow-blue-500/50 glow-primary hover:scale-105 transition-[transform,box-shadow] duration-200 ease-out will-change-transform flex items-center justify-center gap-2"
                  >
                    <FiBarChart2 size={20} className="md:w-6 md:h-6" />
                    <span>{t.home.hero.ctaWebApp}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Broker */}
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50">
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-light opacity-40"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                {t.broker.why.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-xl transition-[border-color,box-shadow] duration-200 ease-out"
                >
                  <div className="mb-4">
                    <div className="icon-bubble-gradient">
                      <advantage.icon size={24} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">
                    {advantage.title} {renderTranslation(t.broker.why.onPlatform, 'default')}
                  </h3>
                  <p className="text-slate-700 mb-3 leading-relaxed">
                    {advantage.description} {renderTranslation(t.broker.why.platformOffers, 'default')}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {advantage.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trading Features */}
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-dark opacity-30"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight">
                {t.broker.features.title}
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tradingFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 text-center border border-blue-600/30 hover:bg-slate-800/70 hover:border-blue-500/50 transition-[background-color,border-color] duration-200 ease-out"
                >
                  <div className="flex items-center justify-center mb-2">
                    <FiCheck size={24} className="text-blue-400" />
                  </div>
                  <div className="text-white text-sm md:text-base font-medium">
                    {feature}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deposit & Withdrawal */}
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50">
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-light opacity-40"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Deposit Methods */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-6 md:p-8 shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                  <div className="icon-bubble-gradient bg-green-500/20">
                    <FiDollarSign size={24} />
                  </div>
                  {t.broker.deposit.title}
                </h3>
                <ul className="space-y-3">
                  {depositMethods.map((method, index) => (
                    <li key={index} className="flex items-center gap-3 text-slate-700">
                      <FiCheck size={20} className="text-green-600 flex-shrink-0" />
                      <span className="text-base md:text-lg">{method}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-green-300">
                  <p className="text-slate-700 text-sm md:text-base">
                    <strong>{t.broker.deposit.minDeposit}:</strong> {t.broker.deposit.minAmount}<br />
                    <strong>{t.broker.deposit.fee}:</strong> {t.broker.deposit.noFee}<br />
                    <strong>{t.broker.deposit.time}:</strong> {t.broker.deposit.instant}
                  </p>
                </div>
              </div>

              {/* Withdrawal Methods */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-6 md:p-8 shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900 flex items-center gap-3">
                  <div className="icon-bubble-gradient bg-blue-500/20">
                    <FiClock size={24} />
                  </div>
                  {t.broker.withdrawal.title}
                </h3>
                <ul className="space-y-3">
                  {withdrawalMethods.map((method, index) => (
                    <li key={index} className="flex items-center gap-3 text-slate-700">
                      <FiCheck size={20} className="text-blue-600 flex-shrink-0" />
                      <span className="text-base md:text-lg">{method}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-blue-300">
                  <p className="text-slate-700 text-sm md:text-base">
                    <strong>{t.broker.withdrawal.minWithdrawal}:</strong> {t.broker.withdrawal.minAmount}<br />
                    <strong>{t.broker.withdrawal.fee}:</strong> {t.broker.withdrawal.noFee}<br />
                    <strong>{t.broker.withdrawal.time}:</strong> {t.broker.withdrawal.processing}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payouts Table */}
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-dark opacity-30"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight">
                {renderTranslation(t.broker.payouts.title.replace('Pocket Option', '<PocketOptionLink>Pocket Option</PocketOptionLink>'), 'default')}
              </h2>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-blue-600/30 shadow-xl overflow-hidden">
              <div className="overflow-x-auto -mx-2 sm:mx-0">
                <table className="w-full min-w-[280px]">
                  <thead className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                    <tr>
                      <th className="px-2 py-3 sm:px-4 sm:py-4 text-left text-xs sm:text-sm font-semibold">{t.broker.payouts.category}</th>
                      <th className="px-2 py-3 sm:px-4 sm:py-4 text-center text-xs sm:text-sm font-semibold">{t.broker.payouts.assets}</th>
                      <th className="px-2 py-3 sm:px-4 sm:py-4 text-center text-xs sm:text-sm font-semibold">{t.broker.payouts.payout}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-600/20">
                    <tr className="hover:bg-slate-800/70 transition-[background-color] duration-200 ease-out">
                      <td className="px-2 py-3 sm:px-4 sm:py-4 font-medium text-white text-xs sm:text-sm">{t.broker.payouts.categories.forex}</td>
                      <td className="px-2 py-3 sm:px-4 sm:py-4 text-center text-blue-200 text-xs sm:text-sm">{t.broker.payouts.forexAssets}</td>
                      <td className="px-2 py-3 sm:px-4 sm:py-4 text-center">
                        <span className="inline-block px-2 py-1 sm:px-3 sm:py-1.5 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">
                          85-92%
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/70 transition-[background-color] duration-200 ease-out">
                      <td className="px-2 py-3 sm:px-4 sm:py-4 font-medium text-white text-xs sm:text-sm">{t.broker.payouts.categories.crypto}</td>
                      <td className="px-2 py-3 sm:px-4 sm:py-4 text-center text-blue-200 text-xs sm:text-sm">{t.broker.payouts.cryptoAssets}</td>
                      <td className="px-2 py-3 sm:px-4 sm:py-4 text-center">
                        <span className="inline-block px-2 py-1 sm:px-3 sm:py-1.5 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">
                          80-90%
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/70 transition-[background-color] duration-200 ease-out">
                      <td className="px-2 py-3 sm:px-4 sm:py-4 font-medium text-white text-xs sm:text-sm">{t.broker.payouts.categories.stocks}</td>
                      <td className="px-2 py-3 sm:px-4 sm:py-4 text-center text-blue-200 text-xs sm:text-sm">{t.broker.payouts.stocksAssets}</td>
                      <td className="px-2 py-3 sm:px-4 sm:py-4 text-center">
                        <span className="inline-block px-2 py-1 sm:px-3 sm:py-1.5 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">
                          75-88%
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/70 transition-[background-color] duration-200 ease-out">
                      <td className="px-2 py-3 sm:px-4 sm:py-4 font-medium text-white text-xs sm:text-sm">{t.broker.payouts.categories.indices}</td>
                      <td className="px-2 py-3 sm:px-4 sm:py-4 text-center text-blue-200 text-xs sm:text-sm">{t.broker.payouts.indicesAssets}</td>
                      <td className="px-2 py-3 sm:px-4 sm:py-4 text-center">
                        <span className="inline-block px-2 py-1 sm:px-3 sm:py-1.5 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">
                          82-90%
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-800/70 transition-[background-color] duration-200 ease-out">
                      <td className="px-2 py-3 sm:px-4 sm:py-4 font-medium text-white text-xs sm:text-sm">{t.broker.payouts.categories.commodities}</td>
                      <td className="px-2 py-3 sm:px-4 sm:py-4 text-center text-blue-200 text-xs sm:text-sm">{t.broker.payouts.commoditiesAssets}</td>
                      <td className="px-2 py-3 sm:px-4 sm:py-4 text-center">
                        <span className="inline-block px-2 py-1 sm:px-3 sm:py-1.5 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">
                          80-87%
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Regulation */}
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50">
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-light opacity-40"></div>
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                {renderTranslation(t.broker.security.title.replace('Pocket Option', '<PocketOptionLink>Pocket Option</PocketOptionLink>'), 'default')}
              </h2>
            </div>
            <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="icon-bubble-gradient flex-shrink-0 w-10 h-10 min-w-10 min-h-10 sm:w-12 sm:h-12 sm:min-w-12 sm:min-h-12 md:w-14 md:h-14 md:min-w-14 md:min-h-14 flex items-center justify-center">
                  <FiShield className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-900">
                    {t.broker.security.protection.title}
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {t.broker.security.protection.description}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="icon-bubble-gradient flex-shrink-0 w-10 h-10 min-w-10 min-h-10 sm:w-12 sm:h-12 sm:min-w-12 sm:min-h-12 md:w-14 md:h-14 md:min-w-14 md:min-h-14 flex items-center justify-center">
                  <FiCheck className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-900">
                    {t.broker.security.licensing.title}
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {t.broker.security.licensing.description}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="icon-bubble-gradient flex-shrink-0 w-10 h-10 min-w-10 min-h-10 sm:w-12 sm:h-12 sm:min-w-12 sm:min-h-12 md:w-14 md:h-14 md:min-w-14 md:min-h-14 flex items-center justify-center">
                  <FiShield className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-900">
                    {t.broker.security.transparency.title}
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {t.broker.security.transparency.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-dark opacity-30"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-12 border border-blue-600/30 shadow-xl">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 leading-tight px-4">
                {renderTranslation(t.broker.cta.title.replace('Pocket Option', '<PocketOptionLink>Pocket Option</PocketOptionLink>'), 'light')}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-blue-200 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                {renderTranslation(t.broker.cta.description.replace('Pocket Option', '<PocketOptionLink>Pocket Option</PocketOptionLink>'), 'light')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                <Link
                  href="/app"
                  className="btn-primary px-6 py-4 md:px-10 md:py-5 text-base md:text-lg font-semibold shadow-2xl hover:scale-105 transition-transform duration-200 ease-out will-change-transform flex items-center justify-center gap-2"
                >
                  <FiBarChart2 size={20} className="md:w-6 md:h-6" />
                  <span>{t.home.hero.ctaWebApp}</span>
                </Link>
                <Link
                  href="/telegram"
                  className="btn-telegram px-6 py-4 md:px-10 md:py-5 text-base md:text-lg font-semibold shadow-2xl hover:scale-105 transition-transform duration-200 ease-out will-change-transform flex items-center justify-center gap-2"
                >
                  <FiZap size={20} className="md:w-6 md:h-6" />
                  <span>{t.home.hero.ctaTelegram}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

