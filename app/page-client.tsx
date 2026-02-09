'use client'

import dynamic from 'next/dynamic'
import { FiCheck, FiArrowRight, FiZap, FiShield, FiTrendingUp, FiUsers, FiClock, FiBarChart2, FiSmartphone, FiCheckCircle, FiStar } from 'react-icons/fi'
import Link from 'next/link'
import { useTranslations } from '@/hooks/useTranslations'
import { renderTranslation } from '@/lib/render-translation'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { ProgressBar } from '@/components/ProgressBar'
import { TrustBadge } from '@/components/TrustBadge'
import { ScrollAnimation } from '@/components/ScrollAnimation'
import { FAQ } from '@/components/FAQ'

// Code splitting для тяжелых компонентов
const Header = dynamic(() => import('@/components/Header').then(mod => ({ default: mod.Header })), { 
  ssr: true,
  loading: () => <div className="h-16 bg-white border-b border-gray-200 animate-pulse" />
})
const Footer = dynamic(() => import('@/components/Footer').then(mod => ({ default: mod.Footer })), { 
  ssr: true,
  loading: () => <div className="h-32 bg-gray-50 animate-pulse" />
})
const PocketOptionLink = dynamic(() => import('@/components/PocketOptionLink').then(mod => ({ default: mod.PocketOptionLink })), { 
  ssr: true 
})

export function HomeClient() {
  const t = useTranslations()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* 1. Hero Section - Первый экран (самый важный) */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 md:py-28 px-4">
          {/* Градиентные орбы для глубины */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute inset-0 opacity-10 bg-pattern-dense"></div>
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="text-center">
              {/* Бейджи доверия */}
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <TrustBadge text={t.home.hero.badges.users} variant="primary" />
                <TrustBadge text={t.home.hero.badges.accuracy} variant="success" />
                <TrustBadge text={t.home.hero.badges.verified} variant="info" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-balance leading-tight drop-shadow-lg">
                {t.home.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-10 md:mb-14 max-w-3xl mx-auto text-balance drop-shadow">
                {t.home.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Первая кнопка - рефералка (главная) */}
                <div className="relative inline-block">
                  <PocketOptionLink 
                    variant="button" 
                    className="btn-primary px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-primary-500/50 glow-primary"
                  >
                    {t.home.hero.cta}
                    <FiArrowRight size={20} />
                  </PocketOptionLink>
                  <span className="badge-popular absolute -top-2 -right-2 text-xs px-2 py-0.5 whitespace-nowrap">
                    {t.home.guarantees.popular}
                  </span>
                </div>
                {/* Вторая кнопка - Telegram */}
                <Link
                  href="/telegram"
                  className="btn-telegram"
                >
                  {t.home.hero.ctaSecondary}
                  <FiZap size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Как это работает (3-4 шага) */}
        <section className="relative py-20 md:py-24 px-4 overflow-hidden">
          {/* Красивый градиентный фон с орбами */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16 md:mb-20 relative z-20">
              <ScrollAnimation animation="fade-in">
                <h2 className="section-title mb-4 bg-gradient-to-r from-primary-800 via-primary-700 to-primary-600 bg-clip-text text-transparent drop-shadow-sm">
                  {t.home.howItWorks.title}
                </h2>
              </ScrollAnimation>
              <p className="section-subtitle">{t.home.howItWorks.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
              <ScrollAnimation animation="slide-up" delay={0}>
                <div className="card-gradient p-8 text-center group relative h-full flex flex-col">
                  <div className="step-number mb-6 mx-auto group-hover:scale-110">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{t.home.howItWorks.step1.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {t.home.howItWorks.step1.description}
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="slide-up" delay={100}>
                <div className="card-gradient p-8 text-center group relative h-full flex flex-col">
                  <div className="step-number mb-6 mx-auto group-hover:scale-110">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{t.home.howItWorks.step2.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {t.home.howItWorks.step2.description}
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="slide-up" delay={200}>
                <div className="card-gradient p-8 text-center group relative h-full flex flex-col">
                  <div className="step-number mb-6 mx-auto group-hover:scale-110">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{t.home.howItWorks.step3.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {t.home.howItWorks.step3.description}
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="slide-up" delay={300}>
                <div className="card-gradient p-8 text-center group relative h-full flex flex-col">
                  <div className="step-number mb-6 mx-auto group-hover:scale-110">
                    4
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{t.home.howItWorks.step4.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {t.home.howItWorks.step4.description}
                  </p>
                </div>
              </ScrollAnimation>
            </div>
            <div className="text-center">
              <PocketOptionLink 
                variant="button" 
                className="btn-primary px-10 py-5 text-lg font-semibold shadow-xl glow-primary"
              >
                {t.home.howItWorks.cta}
                <FiArrowRight size={20} />
              </PocketOptionLink>
            </div>
          </div>
        </section>

        {/* 3. Блок доверия (критически важен) */}
        <section className="relative py-20 md:py-24 px-4 overflow-hidden">
          {/* Градиентный фон с акцентами */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/40 via-white to-slate-50/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-50/30 via-transparent to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-300/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-300/15 rounded-full blur-3xl"></div>
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 md:mb-20 relative z-20">
              <ScrollAnimation animation="fade-in">
                <h2 className="section-title mb-4 bg-gradient-to-r from-primary-800 via-primary-700 to-primary-600 bg-clip-text text-transparent drop-shadow-sm">
                  {t.home.trust.title}
                </h2>
              </ScrollAnimation>
              <p className="section-subtitle">{t.home.trust.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
              <ScrollAnimation animation="slide-up" delay={0}>
                <div className="card-gradient overflow-visible p-6 md:p-8 group relative h-full flex flex-col">
                  <TrustBadge 
                    text={t.home.trust.ai.badge} 
                    variant="primary" 
                    className="absolute -top-3 -right-3 z-10 hidden md:inline-flex shadow-lg"
                  />
                  {/* Внутренний контейнер для обрезки полоски */}
                  <div className="card-strip-container relative overflow-hidden rounded-t-2xl -mt-6 -mx-6 md:-mt-8 md:-mx-8 pt-6 md:pt-8 px-6 md:px-8 pb-0 flex-grow">
                    <div className="flex items-start gap-4 md:gap-5 flex-grow">
                      <div className="icon-bubble-gradient flex-shrink-0 group-hover:scale-110">
                        <FiTrendingUp size={28} />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2 md:mb-3">
                          <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-tight flex-1">{t.home.trust.ai.title}</h3>
                          <TrustBadge 
                            text={t.home.trust.ai.badge} 
                            variant="primary" 
                            className="md:hidden self-start sm:self-auto"
                          />
                        </div>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed flex-grow">{t.home.trust.ai.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="slide-up" delay={100}>
                <div className="card-gradient overflow-visible p-6 md:p-8 group relative h-full flex flex-col">
                  <TrustBadge 
                    text={t.home.trust.verification.badge} 
                    variant="success" 
                    className="absolute -top-3 -right-3 z-10 hidden md:inline-flex shadow-lg"
                  />
                  {/* Внутренний контейнер для обрезки полоски */}
                  <div className="card-strip-container relative overflow-hidden rounded-t-2xl -mt-6 -mx-6 md:-mt-8 md:-mx-8 pt-6 md:pt-8 px-6 md:px-8 pb-0 flex-grow">
                    <div className="flex items-start gap-4 md:gap-5 flex-grow">
                      <div className="icon-bubble-gradient flex-shrink-0 group-hover:scale-110">
                        <FiShield size={28} />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2 md:mb-3">
                          <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-tight flex-1">{t.home.trust.verification.title}</h3>
                          <TrustBadge 
                            text={t.home.trust.verification.badge} 
                            variant="success" 
                            className="md:hidden self-start sm:self-auto"
                          />
                        </div>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed flex-grow">{t.home.trust.verification.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="slide-up" delay={200}>
                <div className="card-gradient overflow-visible p-6 md:p-8 group relative h-full flex flex-col">
                  <TrustBadge 
                    text={t.home.trust.security.badge} 
                    variant="success" 
                    className="absolute -top-3 -right-3 z-10 hidden md:inline-flex shadow-lg"
                  />
                  {/* Внутренний контейнер для обрезки полоски */}
                  <div className="card-strip-container relative overflow-hidden rounded-t-2xl -mt-6 -mx-6 md:-mt-8 md:-mx-8 pt-6 md:pt-8 px-6 md:px-8 pb-0 flex-grow">
                    <div className="flex items-start gap-4 md:gap-5 flex-grow">
                      <div className="icon-bubble-gradient flex-shrink-0 group-hover:scale-110">
                        <FiShield size={28} />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2 md:mb-3">
                          <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-tight flex-1">{t.home.trust.security.title}</h3>
                          <TrustBadge 
                            text={t.home.trust.security.badge} 
                            variant="success" 
                            className="md:hidden self-start sm:self-auto"
                          />
                        </div>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed flex-grow">{t.home.trust.security.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="slide-up" delay={300}>
                <div className="card-gradient overflow-visible p-6 md:p-8 group relative h-full flex flex-col">
                  <TrustBadge 
                    text={t.home.trust.transparency.badge} 
                    variant="info" 
                    className="absolute -top-3 -right-3 z-10 hidden md:inline-flex shadow-lg"
                  />
                  {/* Внутренний контейнер для обрезки полоски */}
                  <div className="card-strip-container relative overflow-hidden rounded-t-2xl -mt-6 -mx-6 md:-mt-8 md:-mx-8 pt-6 md:pt-8 px-6 md:px-8 pb-0 flex-grow">
                    <div className="flex items-start gap-4 md:gap-5 flex-grow">
                      <div className="icon-bubble-gradient flex-shrink-0 group-hover:scale-110">
                        <FiBarChart2 size={28} />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2 md:mb-3">
                          <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-tight flex-1">{t.home.trust.transparency.title}</h3>
                          <TrustBadge 
                            text={t.home.trust.transparency.badge} 
                            variant="info" 
                            className="md:hidden self-start sm:self-auto"
                          />
                        </div>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed flex-grow">{t.home.trust.transparency.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            {/* Статистика для доверия с прогресс-барами */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ScrollAnimation animation="scale" delay={0}>
                <div className="stat-card text-center group p-8 h-full flex flex-col">
                  <div className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                    <AnimatedCounter value={1000} suffix="+" />
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium mb-4">{t.home.stats.signalsPerDay}</div>
                  <ProgressBar value={100} max={100} showLabel={false} animated={true} />
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="scale" delay={100}>
                <div className="stat-card text-center group p-8 h-full flex flex-col">
                  <div className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                    <AnimatedCounter value={85} suffix="%" />
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium mb-4">{t.home.stats.accuracy}</div>
                  <ProgressBar value={85} max={100} showLabel={false} animated={true} />
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="scale" delay={200}>
                <div className="stat-card text-center group p-8 h-full flex flex-col">
                  <div className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                    <AnimatedCounter value={10000} suffix="+" />
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium mb-4">{t.home.stats.users}</div>
                  <ProgressBar value={100} max={100} showLabel={false} animated={true} />
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="scale" delay={300}>
                <div className="stat-card text-center group p-8 h-full flex flex-col">
                  <div className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">24/7</div>
                  <div className="text-sm md:text-base text-gray-600 font-medium mb-4">{t.home.stats.support}</div>
                  <ProgressBar value={100} max={100} showLabel={false} animated={true} />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* 4. Почему Telegram, а не сайт */}
        <section className="relative py-20 md:py-24 px-4 overflow-hidden">
          {/* Динамичный градиентный фон */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/80 to-blue-50/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-50/30 via-transparent to-transparent"></div>
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-slate-200/20 rounded-full blur-3xl"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16 md:mb-20 relative z-20">
              <ScrollAnimation animation="fade-in">
                <h2 className="section-title mb-4 bg-gradient-to-r from-primary-800 via-primary-700 to-primary-600 bg-clip-text text-transparent drop-shadow-sm">
                  {t.home.whyTelegram.title}
                </h2>
              </ScrollAnimation>
              <p className="section-subtitle">{t.home.whyTelegram.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
              <ScrollAnimation animation="scale" delay={0}>
                <div className="card-gradient p-8 text-center group h-full flex flex-col">
                  <div className="icon-bubble-gradient mx-auto mb-6 group-hover:scale-110">
                    <FiZap size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{t.home.whyTelegram.instant.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{t.home.whyTelegram.instant.description}</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="scale" delay={100}>
                <div className="card-gradient p-8 text-center group h-full flex flex-col">
                  <div className="icon-bubble-gradient mx-auto mb-6 group-hover:scale-110">
                    <FiClock size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{t.home.whyTelegram.speed.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{t.home.whyTelegram.speed.description}</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="scale" delay={200}>
                <div className="card-gradient p-8 text-center group h-full flex flex-col">
                  <div className="icon-bubble-gradient mx-auto mb-6 group-hover:scale-110">
                    <FiSmartphone size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{t.home.whyTelegram.mobile.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{t.home.whyTelegram.mobile.description}</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="scale" delay={300}>
                <div className="card-gradient p-8 text-center group h-full flex flex-col">
                  <div className="icon-bubble-gradient mx-auto mb-6 group-hover:scale-110">
                    <FiUsers size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{t.home.whyTelegram.community.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{t.home.whyTelegram.community.description}</p>
                </div>
              </ScrollAnimation>
            </div>
            <div className="text-center">
              <Link
                href="/telegram"
                className="btn-telegram-light px-10 py-5"
              >
                {t.home.whyTelegram.cta}
                <FiZap size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* 5. Мини-блок про стратегии (затравка) */}
        <section className="relative py-20 md:py-24 px-4 overflow-hidden">
          {/* Градиент с акцентами */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-white to-primary-50/30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-transparent to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-200/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-200/15 rounded-full blur-3xl"></div>
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 relative z-20">
              <ScrollAnimation animation="fade-in">
                <h2 className="section-title mb-4 bg-gradient-to-r from-primary-800 via-primary-700 to-primary-600 bg-clip-text text-transparent drop-shadow-sm">
                  {t.home.strategiesPreview.title}
                </h2>
              </ScrollAnimation>
              <p className="section-subtitle">{t.home.strategiesPreview.subtitle}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
              <ScrollAnimation animation="slide-up" delay={0}>
                <div className="card-gradient p-6 text-center group hover:scale-105 h-full flex flex-col">
                  <h3 className="font-semibold mb-2 text-gray-900 text-lg">{t.home.strategiesPreview.scalping.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed flex-grow">{t.home.strategiesPreview.scalping.description}</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="slide-up" delay={100}>
                <div className="card-gradient p-6 text-center group hover:scale-105 h-full flex flex-col">
                  <h3 className="font-semibold mb-2 text-gray-900 text-lg">{t.home.strategiesPreview.intraday.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed flex-grow">{t.home.strategiesPreview.intraday.description}</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="slide-up" delay={200}>
                <div className="card-gradient p-6 text-center group hover:scale-105 h-full flex flex-col">
                  <h3 className="font-semibold mb-2 text-gray-900 text-lg">{t.home.strategiesPreview.otc.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed flex-grow">{t.home.strategiesPreview.otc.description}</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="slide-up" delay={300}>
                <div className="card-gradient p-6 text-center group hover:scale-105 h-full flex flex-col">
                  <h3 className="font-semibold mb-2 text-gray-900 text-lg">{t.home.strategiesPreview.volatile.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed flex-grow">{t.home.strategiesPreview.volatile.description}</p>
                </div>
              </ScrollAnimation>
            </div>
            <div className="text-center">
              <Link
                href="/strategies"
                className="btn-secondary px-10 py-5 text-lg font-semibold shadow-lg"
              >
                {t.home.strategiesPreview.cta}
                <FiArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* 6. Брокер - мягко, без давления */}
        <section className="relative py-20 md:py-24 px-4 overflow-hidden">
          {/* Элегантный градиентный фон */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/50 to-slate-50/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-50/40 via-transparent to-transparent"></div>
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-3xl"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16 md:mb-20 relative z-20">
              <ScrollAnimation animation="fade-in">
                <h2 className="section-title mb-4 bg-gradient-to-r from-primary-800 via-primary-700 to-primary-600 bg-clip-text text-transparent drop-shadow-sm">
                  {t.home.broker.title}
                </h2>
              </ScrollAnimation>
              <p className="section-subtitle">{t.home.broker.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
              <ScrollAnimation animation="slide-up" delay={0}>
                <div className="card-gradient p-8 text-center group h-full flex flex-col">
                  <div className="icon-bubble-gradient mx-auto mb-6 group-hover:scale-110">
                    <FiCheckCircle size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{t.home.broker.free.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{t.home.broker.free.description}</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="slide-up" delay={100}>
                <div className="card-gradient p-8 text-center group h-full flex flex-col">
                  <div className="icon-bubble-gradient mx-auto mb-6 group-hover:scale-110">
                    <FiUsers size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{t.home.broker.beginner.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{t.home.broker.beginner.description}</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="slide-up" delay={200}>
                <div className="card-gradient p-8 text-center group h-full flex flex-col">
                  <div className="icon-bubble-gradient mx-auto mb-6 group-hover:scale-110">
                    <FiZap size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{t.home.broker.compatible.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{t.home.broker.compatible.description}</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="slide-up" delay={300}>
                <div className="card-gradient p-8 text-center group h-full flex flex-col">
                  <div className="icon-bubble-gradient mx-auto mb-6 group-hover:scale-110">
                    <FiShield size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{t.home.broker.reliable.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{t.home.broker.reliable.description}</p>
                </div>
              </ScrollAnimation>
            </div>
            <div className="text-center">
              <div className="relative inline-block">
                <PocketOptionLink 
                  variant="button" 
                  className="btn-primary px-10 py-5 text-lg font-semibold shadow-xl glow-primary"
                >
                  {t.home.broker.cta}
                  <FiArrowRight size={20} />
                </PocketOptionLink>
                <span className="badge-recommended absolute -top-2 -right-2 text-xs px-2 py-0.5 whitespace-nowrap">
                  {t.home.guarantees.recommended}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 6.5. Гарантии */}
        <section className="relative py-20 md:py-24 px-4 overflow-hidden">
          {/* Мягкий градиентный фон */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-white to-slate-50/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-50/30 via-transparent to-transparent"></div>
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-200/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary-200/15 rounded-full blur-3xl"></div>
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 relative z-20">
              <ScrollAnimation animation="fade-in">
                <h2 className="section-title mb-4 bg-gradient-to-r from-primary-800 via-primary-700 to-primary-600 bg-clip-text text-transparent drop-shadow-sm">
                  {t.home.guarantees.title}
                </h2>
              </ScrollAnimation>
              <p className="section-subtitle">{t.home.guarantees.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <ScrollAnimation animation="slide-up" delay={0}>
                <div className="card-gradient p-8 text-center group h-full flex flex-col">
                  <div className="icon-bubble-gradient mx-auto mb-6 group-hover:scale-110">
                    <FiShield size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{t.home.guarantees.noHiddenFees.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{t.home.guarantees.noHiddenFees.description}</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="slide-up" delay={100}>
                <div className="card-gradient p-8 text-center group h-full flex flex-col">
                  <div className="icon-bubble-gradient mx-auto mb-6 group-hover:scale-110">
                    <FiCheckCircle size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{t.home.guarantees.freeRegistration.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{t.home.guarantees.freeRegistration.description}</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="slide-up" delay={200}>
                <div className="card-gradient p-8 text-center group h-full flex flex-col">
                  <div className="icon-bubble-gradient mx-auto mb-6 group-hover:scale-110">
                    <FiZap size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{t.home.guarantees.instantAccess.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{t.home.guarantees.instantAccess.description}</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* 6.6. FAQ секция */}
        <ScrollAnimation animation="fade-in">
          <FAQ
            title={t.home.faq.title}
            subtitle={t.home.faq.subtitle}
            items={t.home.faq.items}
          />
        </ScrollAnimation>

        {/* 7. Финальный CTA (закрытие воронки) */}
        <section className="relative py-20 md:py-28 px-4 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
          {/* Градиентные орбы */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute inset-0 opacity-10 bg-pattern-dense"></div>
          <div className="container mx-auto max-w-4xl relative z-10 text-center">
            <ScrollAnimation animation="fade-in">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance leading-tight drop-shadow-lg">
                {t.home.finalCta.title}
              </h2>
              <p className="text-xl md:text-2xl text-primary-100 mb-12 drop-shadow">
                {t.home.finalCta.description}
              </p>
            </ScrollAnimation>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PocketOptionLink 
                variant="button" 
                className="btn-primary bg-white text-primary-600 hover:bg-gray-100 px-10 py-5 text-lg font-semibold shadow-2xl glow-primary"
              >
                {t.home.finalCta.ctaBroker}
                <FiArrowRight size={20} />
              </PocketOptionLink>
              <Link
                href="/telegram"
                className="btn-telegram px-10 py-5"
              >
                {t.home.finalCta.ctaTelegram}
                <FiZap size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
