'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { TelegramFunnel } from '@/components/TelegramFunnel'
import { PocketOptionLink } from '@/components/PocketOptionLink'
import Link from 'next/link'
import { FiArrowRight, FiCheck, FiShield, FiDollarSign, FiClock, FiTrendingUp, FiSmartphone, FiGlobe } from 'react-icons/fi'
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
        <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-12 md:py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-pattern-dense"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center">
              <h1 className="section-title text-white mb-4 md:mb-6 text-balance">
                {renderTranslation(t.broker.hero.title.replace('Pocket Option', '<PocketOptionLink>Pocket Option</PocketOptionLink>'), 'light')}
              </h1>
              <p className="section-subtitle text-primary-100 max-w-3xl mx-auto text-balance mb-8">
                {renderTranslation(t.broker.hero.description, 'light')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <PocketOptionLink variant="button" className="btn bg-primary-500 text-white hover:bg-primary-400 border-2 border-primary-300 hover:border-primary-200 px-8 py-4">
                  {t.broker.hero.cta}
                  <FiArrowRight size={20} />
                </PocketOptionLink>
                <Link
                  href="/telegram"
                  className="btn bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:text-white px-8 py-4"
                >
                  {t.broker.hero.ctaSecondary}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Broker */}
        <section className="relative py-12 md:py-16 px-4 bg-white bg-pattern">
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-title text-center mb-8 md:mb-12">
              {t.broker.why.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="card p-6 hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform">
                    <advantage.icon size={32} className="md:w-10 md:h-10 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {advantage.title} {renderTranslation(t.broker.why.onPlatform, 'default')}
                  </h3>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    {advantage.description} {renderTranslation(t.broker.why.platformOffers, 'default')}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {advantage.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trading Features */}
        <section className="relative py-12 md:py-16 px-4 bg-primary-50 bg-pattern">
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-title text-center mb-8 md:mb-12">
              {t.broker.features.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tradingFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="card p-4 text-center hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="flex items-center justify-center mb-2">
                    <FiCheck size={24} className="text-primary-600" />
                  </div>
                  <div className="text-gray-700 text-sm md:text-base font-medium">
                    {feature}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deposit & Withdrawal */}
        <section className="relative py-12 md:py-16 px-4 bg-white bg-pattern">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Deposit Methods */}
              <div className="card bg-gradient-to-br from-green-50 to-green-100 border-green-200 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                  <FiDollarSign size={32} className="text-green-600" />
                  {t.broker.deposit.title}
                </h3>
                <ul className="space-y-3">
                  {depositMethods.map((method, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
                      <FiCheck size={20} className="text-green-600 flex-shrink-0" />
                      <span className="text-base md:text-lg">{method}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-green-300">
                  <p className="text-gray-700 text-sm md:text-base">
                    <strong>{t.broker.deposit.minDeposit}:</strong> {t.broker.deposit.minAmount}<br />
                    <strong>{t.broker.deposit.fee}:</strong> {t.broker.deposit.noFee}<br />
                    <strong>{t.broker.deposit.time}:</strong> {t.broker.deposit.instant}
                  </p>
                </div>
              </div>

              {/* Withdrawal Methods */}
              <div className="card bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                  <FiClock size={32} className="text-blue-600" />
                  {t.broker.withdrawal.title}
                </h3>
                <ul className="space-y-3">
                  {withdrawalMethods.map((method, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
                      <FiCheck size={20} className="text-blue-600 flex-shrink-0" />
                      <span className="text-base md:text-lg">{method}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-blue-300">
                  <p className="text-gray-700 text-sm md:text-base">
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
        <section className="relative py-12 md:py-16 px-4 bg-gray-50 bg-pattern">
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-title text-center mb-8 md:mb-12">
              {renderTranslation(t.broker.payouts.title.replace('Pocket Option', '<PocketOptionLink>Pocket Option</PocketOptionLink>'), 'default')}
            </h2>
            <div className="card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary-600 text-white">
                    <tr>
                      <th className="px-4 py-4 text-left font-semibold">{t.broker.payouts.category}</th>
                      <th className="px-4 py-4 text-center font-semibold">{t.broker.payouts.assets}</th>
                      <th className="px-4 py-4 text-center font-semibold">{t.broker.payouts.payout}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 font-medium text-gray-900">{t.broker.payouts.categories.forex}</td>
                      <td className="px-4 py-4 text-center text-gray-700">{t.broker.payouts.forexAssets}</td>
                      <td className="px-4 py-4 text-center">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                          85-92%
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 font-medium text-gray-900">{t.broker.payouts.categories.crypto}</td>
                      <td className="px-4 py-4 text-center text-gray-700">{t.broker.payouts.cryptoAssets}</td>
                      <td className="px-4 py-4 text-center">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                          80-90%
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 font-medium text-gray-900">{t.broker.payouts.categories.stocks}</td>
                      <td className="px-4 py-4 text-center text-gray-700">{t.broker.payouts.stocksAssets}</td>
                      <td className="px-4 py-4 text-center">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                          75-88%
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 font-medium text-gray-900">{t.broker.payouts.categories.indices}</td>
                      <td className="px-4 py-4 text-center text-gray-700">{t.broker.payouts.indicesAssets}</td>
                      <td className="px-4 py-4 text-center">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                          82-90%
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-4 font-medium text-gray-900">{t.broker.payouts.categories.commodities}</td>
                      <td className="px-4 py-4 text-center text-gray-700">{t.broker.payouts.commoditiesAssets}</td>
                      <td className="px-4 py-4 text-center">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
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
        <section className="relative py-12 md:py-16 px-4 bg-white bg-pattern">
          <div className="container mx-auto max-w-4xl">
            <h2 className="section-title text-center mb-8 md:mb-12">
              {renderTranslation(t.broker.security.title.replace('Pocket Option', '<PocketOptionLink>Pocket Option</PocketOptionLink>'), 'default')}
            </h2>
            <div className="card-muted p-6 md:p-8 space-y-6">
              <div className="flex items-start gap-4">
                <FiShield size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {t.broker.security.protection.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t.broker.security.protection.description}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FiCheck size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {t.broker.security.licensing.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t.broker.security.licensing.description}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FiShield size={24} className="text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {t.broker.security.transparency.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t.broker.security.transparency.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-12 md:py-16 px-4 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-pattern-dense"></div>
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="section-title text-white mb-6">
              {renderTranslation(t.broker.cta.title.replace('Pocket Option', '<PocketOptionLink>Pocket Option</PocketOptionLink>'), 'light')}
            </h2>
            <p className="section-subtitle text-primary-100 mb-8 max-w-2xl mx-auto">
              {renderTranslation(t.broker.cta.description.replace('Pocket Option', '<PocketOptionLink>Pocket Option</PocketOptionLink>'), 'light')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PocketOptionLink variant="button" className="btn-primary">
                {t.broker.cta.register}
                <FiArrowRight size={20} />
              </PocketOptionLink>
              <Link
                href="/telegram"
                className="btn-primary"
              >
                {t.broker.cta.getSignals}
                <FiArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Telegram Funnel */}
        <TelegramFunnel 
          title={t.broker.funnel.title}
          description={t.broker.funnel.description}
          buttonText={t.broker.funnel.button}
        />
      </main>

      <Footer />
    </div>
  )
}

