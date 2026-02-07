export const en = {
  // Common
  common: {
    siteName: 'Pocket Option Community',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    readMore: 'Read More',
    goToTelegram: 'Go to Telegram',
    joinTelegram: 'Join Telegram',
    getSignals: 'Get Signals',
    start: 'Start',
    back: 'Back',
    any: 'Any',
  },
  
  // Navigation
  nav: {
    home: 'Home',
    strategies: 'Strategies',
    bot: 'Signal Bot',
    broker: 'Broker',
    blog: 'Blog',
    telegram: 'Telegram',
  },

  // Home page
  home: {
    hero: {
      title: 'Professional Trading Signals for <PocketOptionLink>Pocket Option</PocketOptionLink>',
      description: 'Automated trading signals with 85%+ accuracy from an AI bot. Receive signals in real-time directly in Telegram. Work with proven strategies and a reliable broker <PocketOptionLink>Pocket Option</PocketOptionLink>.',
      cta: 'Go to Telegram',
      ctaSecondary: 'Learn About Bot',
      pocketOption: 'Pocket Option',
    },
    quickLinks: {
      strategies: 'Strategies',
      bot: 'Signal Bot',
      payouts: 'Payouts',
      signals: 'Signals',
    },
    features: {
      title: 'Why Choose Us',
      accuracy: {
        title: 'High Accuracy',
        description: 'Signal accuracy exceeds 85% thanks to AI and machine learning. Perfect for trading on <PocketOptionLink>Pocket Option</PocketOptionLink>.',
        link: 'Learn More',
      },
      instant: {
        title: 'Instant Signals',
        description: 'Receive signals in real-time without delays via Telegram. Use them for trading on <PocketOptionLink>Pocket Option</PocketOptionLink>.',
        link: 'Get Signals',
      },
      security: {
        title: 'Security',
        description: 'Secure communication channels and proven market analysis algorithms. We work with a reliable broker <PocketOptionLink>Pocket Option</PocketOptionLink>.',
        link: 'About Broker',
      },
      analytics: {
        title: 'Analytics',
        description: 'Detailed statistics and analytics for each signal for successful trading on <PocketOptionLink>Pocket Option</PocketOptionLink>.',
        link: 'Strategies',
      },
    },
    stats: {
      users: 'Active Users',
      accuracy: 'Signal Accuracy',
      support: 'Support',
      signalsPerDay: 'Signals Per Day',
      join: 'Join',
    },
    howItWorks: {
      title: 'How It Works',
      step1: {
        title: 'Registration',
        description: 'Join our Telegram channel with one click. No complex settings required.',
        link: 'Go to Telegram',
      },
      step2: {
        title: 'Receiving Signals',
        description: 'Receive trading signals in real-time directly in Telegram. Each signal contains all necessary information.',
        link: 'Learn About Bot',
      },
      step3: {
        title: 'Trading',
        description: 'Use signals to make trading decisions. Work with reliable broker and proven strategies.',
        link: 'About Broker',
      },
    },
    additionalInfo: {
      strategies: {
        title: 'Trading Strategies',
        description: 'Learn about 4+ effective strategies for binary options. From level-based strategies to AI signals.',
        link: 'Explore Strategies',
      },
      bot: {
        title: 'Signal Bot',
        description: 'How AI bot works, what technologies it uses, signal examples and frequently asked questions.',
        link: 'Learn About Bot',
      },
      broker: {
        title: 'About Broker',
        description: 'High payouts up to 92%, fast withdrawals, reliable platform. Everything you need to know about recommended broker.',
        link: 'Learn About Broker',
      },
    },
  },

  // Strategies page
  strategies: {
    hero: {
      title: 'Trading Strategies for Binary Options',
      description: 'Detailed guides on effective trading strategies. Learn how to use signal bot for maximum profit.',
      cta: 'Get Signals',
      pocketOption: 'Pocket Option',
    },
    list: {
      strategy1: {
        title: 'Support and Resistance Levels Strategy',
        complexity: 'Medium',
        description: 'Classic strategy based on price bounces from key support and resistance levels. Perfect for trading on <PocketOptionLink>Pocket Option</PocketOptionLink>.',
        details: [
          'Identifying key support and resistance levels on the chart',
          'Entering positions when price bounces from a level',
          'Using candlestick patterns for confirmation',
          'Setting stop-loss beyond the level',
          'Target profit at the next level',
        ],
        how: [
          'Study the chart and find key support and resistance levels',
          'Wait for price to approach a level',
          'Look for reversal signals: pin bars, doji, engulfing patterns',
          'Open a position in the direction of the bounce from the level',
          'Set stop-loss beyond the level and target at the next level',
        ],
        assets: ['EUR/USD', 'GBP/USD', 'USD/JPY', 'XAU/USD'],
        riskText:
          'Recommended risk is no more than 2-3% of the deposit per trade. Use a stop-loss around 1.5-2% of position size.',
        timeframe: 'Timeframe',
        winrate: 'Winrate',
        features: 'Strategy Features',
        howItWorks: 'How Strategy Works',
        bestAssets: 'Best Assets',
        riskManagement: 'Risk Management',
        cta: 'Try This Strategy',
        ctaType: 'pocketoption',
      },
      strategy2: {
        title: 'Trend Strategy with Moving Average',
        complexity: 'Low',
        description: 'Simple and effective strategy for beginner traders. Works on any timeframe with clear trend. Great for trading on <PocketOptionLink>Pocket Option</PocketOptionLink>.',
        details: [
          'Determining trend direction using EMA 20 and EMA 50',
          'Entering in trend direction when moving averages cross',
          'Using RSI indicator for confirmation',
          'Works on all timeframes from M1 to H1',
          'High frequency of trading opportunities',
        ],
        how: [
          'Add EMA 20 and EMA 50 to the chart',
          'Determine trend direction: if EMA 20 is above EMA 50 - uptrend',
          'Wait for price pullback to moving averages',
          'When price bounces from EMA with RSI confirmation, open a position',
          'Trade only in the trend direction',
        ],
        assets: ['EUR/USD', 'GBP/USD', 'BTC/USD', 'ETH/USD'],
        riskText:
          'Use a fixed position size. Do not increase stake after a losing trade. Max risk per trade: 3% of deposit.',
        timeframe: 'Timeframe',
        winrate: 'Winrate',
        features: 'Strategy Features',
        howItWorks: 'How Strategy Works',
        bestAssets: 'Best Assets',
        riskManagement: 'Risk Management',
        cta: 'Try This Strategy',
        ctaType: 'pocketoption',
      },
      strategy3: {
        title: 'Trading with Signal Bot',
        complexity: 'Simple',
        description: 'Automated strategy using AI bot. You simply go to the Telegram bot, select a currency pair and timeframe, and the bot analyzes the market and gives you a signal to buy or sell.',
        details: [
          'Select currency pair in the bot',
          'Select timeframe for analysis',
          'Automatic market analysis by the bot',
          'Receive Call (buy) or Put (sell) signal',
          'High accuracy thanks to AI analysis',
        ],
        how: [
          'Go to our Telegram channel and open the bot',
          'Select command to start working with the bot',
          'Choose a currency pair from the available list',
          'Select timeframe (M1, M5, M15, M30, H1)',
          'Bot analyzes the market and sends signal: Call or Put',
          'Open a position on <PocketOptionLink>Pocket Option</PocketOptionLink> according to the signal',
        ],
        assets: ['All currency pairs', 'Cryptocurrencies', 'Stocks', 'Indices'],
        riskText:
          'Recommended risk is 2-3% of deposit per trade. Follow bot signals and do not deviate from its recommendations.',
        timeframe: 'Timeframe',
        winrate: 'Winrate',
        features: 'Strategy Features',
        howItWorks: 'How Strategy Works',
        bestAssets: 'Available Assets',
        riskManagement: 'Risk Management',
        cta: 'Go to Telegram Bot',
        ctaType: 'telegram',
      },
      strategy4: {
        title: 'VIP Channel - Professional Signals',
        complexity: 'Premium',
        description: 'Exclusive VIP channel with daily trading sessions. Signals are based on comprehensive analysis of multiple indicators, news and market conditions. Maximum accuracy and professional approach.',
        details: [
          'Daily trading sessions with live analysis',
          'Signals based on multiple indicators (RSI, MACD, Bollinger Bands, Fibonacci, etc.)',
          'Consideration of economic news and events',
          'Detailed analysis of each trade',
          'Support and consultations from professional traders',
        ],
        how: [
          'Go to our Telegram channel',
          'Open the bot and find the "VIP Channel" button',
          'Click on the VIP Channel button',
          'Review the conditions for VIP channel access',
          'Complete the conditions and get access',
          'Receive premium signals and participate in daily sessions',
        ],
        assets: ['All assets', 'Exclusive signals', 'Priority support'],
        riskText:
          'VIP signals have high accuracy, but always follow risk management rules. Recommended risk: 2-4% of deposit per trade.',
        timeframe: 'Timeframe',
        winrate: 'Winrate',
        features: 'VIP Channel Features',
        howItWorks: 'How to Get VIP Channel Access',
        bestAssets: 'Available Opportunities',
        riskManagement: 'Risk Management',
        cta: 'Learn VIP Channel Conditions',
        ctaType: 'telegram',
      },
    },
    funnel: {
      title: 'Ready to Use These Strategies?',
      description: 'Join our Telegram channel and receive signals for all strategies in real-time',
      button: 'Go to Telegram',
    },
    comparison: {
      title: 'Strategy Comparison',
      strategy: 'Strategy',
      timeframe: 'Timeframe',
      winrate: 'Winrate',
      complexity: 'Complexity',
      recommendation: 'Recommendation',
      start: 'Start',
    },
  },

  // Bot page
  bot: {
    hero: {
      title: 'Signal Bot for Binary Options',
      description: 'Automated AI bot that analyzes market 24/7 and sends accurate trading signals directly to Telegram. 85%+ accuracy.',
      cta: 'Connect to Bot',
      ctaSecondary: 'Learn About Strategies',
      pocketOption: 'Pocket Option',
    },
    stats: {
      accuracy: 'Signal Accuracy',
      signalsPerDay: 'Signals Per Day',
      work: 'Non-stop Work',
      delay: 'Signal Delay',
    },
    features: {
      title: 'Bot Features',
      ai: {
        title: 'AI and Machine Learning',
        description: 'Bot uses neural networks trained on millions of historical data. Constantly improves accuracy thanks to machine learning. Optimized for trading.',
      },
      instant: {
        title: 'Instant Signals',
        description: 'Real-time data processing via WebSocket. Signals arrive without delays, directly to your Telegram. Ideal for fast trading.',
      },
      indicators: {
        title: 'Multiple Indicators',
        description: 'Analysis using RSI, MACD, Bollinger Bands, EMA, support/resistance levels and dozens of other tools.',
      },
      filtering: {
        title: 'Signal Filtering',
        description: 'Bot sends only high-quality signals with high probability of success. Filtering of false signals and market noise.',
      },
      work24: {
        title: '24/7 Operation',
        description: 'Bot works around the clock, analyzing the market even when you sleep. Don\'t miss a single trading opportunity.',
      },
      analytics: {
        title: 'Statistics and Analytics',
        description: 'Detailed statistics for each signal: accuracy, profitability, best assets and trading time.',
      },
    },
    howItWorks: {
      title: 'How Bot Works',
      step1: {
        title: 'Market Analysis',
        description: 'Bot analyzes quotes in real-time using technical indicators, support/resistance levels and AI algorithms.',
      },
      step2: {
        title: 'Data Processing',
        description: 'Neural network processes thousands of parameters: price, volumes, volatility, news, historical patterns.',
      },
      step3: {
        title: 'Signal Generation',
        description: 'When a trading opportunity with success probability above 70% is detected, bot generates signal with asset, direction and entry time.',
      },
      step4: {
        title: 'Sending to Telegram',
        description: 'Signal is instantly sent to Telegram channel with detailed information: asset, direction (Call/Put), entry level, target, stop-loss.',
      },
      step5: {
        title: 'Result Tracking',
        description: 'Bot tracks result of each trade and uses this data to improve accuracy of future signals.',
      },
    },
    technologies: {
      title: 'Technologies and Analysis Methods',
      list: [
        'Neural Networks (Deep Learning)',
        'Machine Learning',
        'Technical Analysis',
        'Volume Analysis',
        'News Sentiment Analysis',
        'WebSocket for Real-time',
        'Statistical Analysis',
        'Pattern Recognition'
      ],
    },
    example: {
      title: 'Example Signal from Bot',
      asset: 'Asset',
      direction: 'Direction',
      entryLevel: 'Entry Level',
      target: 'Target',
      stopLoss: 'Stop Loss',
      probability: 'Success Probability',
    },
    faq: {
      title: 'Frequently Asked Questions',
      q1: {
        question: 'Do I need to install bot on my computer?',
        answer: 'No, bot runs on our servers. You only need to subscribe to Telegram channel and receive signals. No installation required.',
      },
      q2: {
        question: 'How many signals per day does bot send?',
        answer: 'Number of signals depends on market volatility. On average bot sends 50-100 quality signals per day. During high volatility periods number can reach 200+ signals.',
      },
      q3: {
        question: 'Can I use bot on demo account?',
        answer: 'Yes, absolutely! We recommend testing signals on demo account first to understand how bot works and which strategies suit you.',
      },
      q4: {
        question: 'Does bot work automatically or settings needed?',
        answer: 'Bot works completely automatically. After subscribing to channel you immediately start receiving signals. No settings required. However you can configure Telegram notifications as you wish.',
      },
    },
    funnel: {
      title: 'Start receiving signals from the bot right now',
      description: 'Join thousands of traders who are already using our signal bot for successful trading',
    },
  },

  // Broker page
  broker: {
    hero: {
      title: 'Recommended Broker for Trading',
      description: 'Reliable trading platform with high payouts, fast withdrawals and excellent support. Perfect for working with our signals.',
      cta: 'Register',
      ctaSecondary: 'Get Signals',
    },
    why: {
      title: 'Why We Recommend This Broker',
      onPlatform: 'on <PocketOptionLink>Pocket Option</PocketOptionLink>',
      platformOffers: 'The <PocketOptionLink>Pocket Option</PocketOptionLink> platform offers the best conditions for traders.',
      highPayouts: {
        title: 'High Payouts',
        description: 'Up to 92% profit from one successful trade. One of the highest payout percentages in the market.',
        details: 'Many assets offer 85-92% payouts, which is significantly higher than industry average.',
      },
      fastWithdrawals: {
        title: 'Fast Withdrawals',
        description: 'Withdrawal of funds within 24 hours. Support for multiple withdrawal methods, including cryptocurrencies.',
        details: 'Withdrawal requests are processed within a few hours. Minimum withdrawal amount - $10.',
      },
      reliability: {
        title: 'Reliability',
        description: 'Regulated platform with years of history. Client fund protection and transparent terms.',
        details: 'Platform has been operating since 2017, serving millions of traders worldwide.',
      },
      mobile: {
        title: 'Mobile Applications',
        description: 'Trade from any device. Applications for iOS and Android with full functionality.',
        details: 'All features available in mobile apps: charts, indicators, quick trade, trade history.',
      },
      assets: {
        title: 'Wide Asset Selection',
        description: 'Over 100 assets: currency pairs, cryptocurrencies, stocks, indices, commodities.',
        details: 'EUR/USD, GBP/USD, BTC/USD, ETH/USD, gold, oil, Apple, Google stocks and many others.',
      },
      support: {
        title: 'Multilingual Support',
        description: 'Support in Russian, English and other languages. 24/7 support service.',
        details: 'Technical support available 24/7 via chat, email and phone. Average response time - less than 5 minutes.',
      },
    },
    deposit: {
      title: 'Deposit Methods',
      methods: {
        cards: 'Bank Cards (Visa, MasterCard)',
        crypto: 'Cryptocurrencies (Bitcoin, Ethereum, USDT)',
        wallets: 'E-wallets',
        transfer: 'Bank Transfers',
        mobile: 'Mobile Payments',
      },
      minDeposit: 'Minimum Deposit',
      fee: 'Fee',
      time: 'Processing Time',
      minAmount: '$10',
      noFee: 'None',
      instant: 'Instant',
    },
    withdrawal: {
      title: 'Withdrawal Methods',
      methods: {
        cards: 'Bank Cards',
        crypto: 'Cryptocurrencies',
        wallets: 'E-wallets',
        transfer: 'Bank Transfers',
      },
      minWithdrawal: 'Minimum Withdrawal',
      fee: 'Fee',
      time: 'Processing Time',
      minAmount: '$10',
      noFee: 'None',
      processing: 'Up to 24 hours',
    },
    features: {
      title: 'Platform Features',
      list: [
        'Minimum deposit from $10',
        'Expiry from 5 seconds to 365 days',
        'Quick Trade',
        'Tournaments with prize pools',
        'Unlimited demo account',
        'Bonuses on first deposit',
        'Loyalty program',
        'Social trading'
      ],
    },
    payouts: {
      title: 'Payout Percentage by Assets',
      category: 'Category',
      assets: 'Assets',
      payout: 'Payout',
      categories: {
        forex: 'Currency Pairs',
        crypto: 'Cryptocurrencies',
        stocks: 'Stocks',
        indices: 'Indices',
        commodities: 'Commodities',
      },
      forexAssets: 'EUR/USD, GBP/USD, USD/JPY',
      cryptoAssets: 'BTC/USD, ETH/USD, LTC/USD',
      stocksAssets: 'Apple, Google, Tesla, Amazon',
      indicesAssets: 'S&P 500, NASDAQ, Dow Jones',
      commoditiesAssets: 'Gold, Oil, Silver',
    },
    security: {
      title: 'Security and Regulation',
      protection: {
        title: 'Fund Protection',
        description: 'Client funds are stored in separate accounts. SSL encryption is used to protect data. Regular security audits.',
      },
      licensing: {
        title: 'Licensing',
        description: 'Platform operates in accordance with international standards. Compliance with client rights protection requirements.',
      },
      transparency: {
        title: 'Transparency',
        description: 'All trading terms are transparent and accessible. No hidden fees. Clear withdrawal rules.',
      },
    },
    cta: {
      title: 'Ready to Start Trading?',
      description: 'Register with broker and start receiving signals from our bot',
      register: 'Register with Broker',
      getSignals: 'Get Signals',
    },
    funnel: {
      title: 'Start receiving signals right now',
      description: 'Join our Telegram channel and receive accurate trading signals for working with the broker',
      button: 'Go to Telegram',
    },
  },

  // Blog page
  blog: {
    title: 'Trading Signals Blog',
    description: 'Learn more about trading signals, trading strategies and automated trading',
    noPosts: 'No published articles yet',
    backToHome: 'Back to Home',
    backToArticles: 'Back to Articles',
    readMore: 'Read More',
    notFound: 'Article Not Found',
    views: 'views',
    categories: {
      'Общее': 'General',
      'Стратегии': 'Strategies',
      'Сигналы': 'Signals',
      'Брокер': 'Broker',
      'Обучение': 'Education',
    },
    metadata: {
      title: 'Blog | Trading Signals',
      description: 'Articles about trading signals, trading strategies and automated trading. Learn more about how to use signals for successful trading.',
    },
  },

  // Telegram page
  telegram: {
    hero: {
      title: 'Join Telegram Channel',
      description: 'Receive professional trading signals directly in Telegram',
    },
    benefits: {
      title: 'Benefits of Our Telegram Channel',
      instant: {
        title: 'Instant Notifications',
        description: 'Receive signals in real-time without delays. Each notification contains all necessary information for trading.',
      },
      analytics: {
        title: 'Detailed Analytics',
        description: 'Each signal is accompanied by detailed analysis: entry level, target, stop-loss and reasoning.',
      },
      community: {
        title: 'Trader Community',
        description: 'Communicate with other traders, share experience and get support from the community.',
      },
      work24: {
        title: '24/7 Operation',
        description: 'Signals are available 24/7, including weekends. Don\'t miss any trading opportunity.',
      },
    },
    stats: {
      subscribers: 'Subscribers',
      accuracy: 'Accuracy',
      signalsPerDay: 'Signals Per Day',
      support: 'Support',
    },
    funnel: {
      realTime: 'Real-time Signals',
      accuracy: 'Signal Accuracy',
      activeTraders: 'Active Traders',
      redirecting: 'Redirecting...',
      title: 'Ready to Start Receiving Signals?',
      description: 'Join thousands of successful traders today',
      button: 'Join Channel',
    },
  },

  // Footer
  footer: {
    description: 'Professional trading signals for successful trading. Automated solutions with high accuracy.',
    navigation: 'Navigation',
    resources: 'Resources',
    legal: 'Legal Information',
    telegramChannel: 'Telegram Channel',
    about: 'About Us',
    contacts: 'Contacts',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    risk: 'Risk Warning',
    copyright: 'All rights reserved.',
    disclaimer: 'Trading financial instruments involves high risk. Invest only funds you can afford to lose.',
  },

  // About page
  about: {
    hero: {
      title: 'About Us',
      description: 'Professional team providing high-accuracy trading signals',
    },
    mission: {
      title: 'Our Mission',
      description: 'We strive to help traders succeed in binary options trading by providing quality signals and educational materials.',
    },
    team: {
      title: 'Our Team',
      description: 'Experienced traders and analysts working every day to improve signal quality.',
    },
    values: {
      title: 'Our Values',
      transparency: {
        title: 'Transparency',
        description: 'Honest statistics and openness to our users.',
      },
      accuracy: {
        title: 'Accuracy',
        description: 'Continuous improvement of algorithms for maximum signal accuracy.',
      },
      support: {
        title: 'Support',
        description: 'Always ready to help our users achieve their goals.',
      },
    },
  },

  // Contacts page
  contacts: {
    hero: {
      title: 'Contacts',
      description: 'Contact us in any convenient way',
    },
    telegram: {
      title: 'Telegram',
      description: 'Join our channel to receive signals and support',
      button: 'Go to Telegram',
    },
    support: {
      title: 'Support',
      description: 'If you have questions, write to us on Telegram',
    },
    hours: {
      title: 'Working Hours',
      description: 'We work 24/7 for your convenience',
    },
  },

  // Privacy page
  privacy: {
    hero: {
      title: 'Privacy Policy',
      description: 'How we collect, use and protect your data',
    },
    lastUpdated: 'Last updated',
    sections: {
      dataCollection: {
        title: 'Data Collection',
        content: 'We collect the minimum necessary information to provide our services. We do not share your data with third parties without your consent.',
      },
      dataUsage: {
        title: 'Data Usage',
        content: 'Collected data is used solely to improve the quality of our services and communicate with users.',
      },
      dataProtection: {
        title: 'Data Protection',
        content: 'We use modern data protection methods to ensure the security of your information.',
      },
      cookies: {
        title: 'Cookies',
        content: 'Our website uses cookies to improve user experience. You can disable cookies in your browser settings.',
      },
      rights: {
        title: 'Your Rights',
        content: 'You have the right to request access, correction or deletion of your personal data at any time.',
      },
    },
  },

  // Terms page
  terms: {
    hero: {
      title: 'Terms of Use',
      description: 'Rules and conditions for using our service',
    },
    lastUpdated: 'Last updated',
    sections: {
      acceptance: {
        title: 'Acceptance of Terms',
        content: 'By using our service, you agree to these terms of use. If you do not agree, please do not use our service.',
      },
      service: {
        title: 'Service Description',
        content: 'We provide trading signals and educational materials for binary options trading. Signals are for informational purposes only and are not financial advice.',
      },
      risks: {
        title: 'Risks',
        content: 'Trading financial instruments involves a high risk of loss. You must understand all risks before starting trading.',
      },
      liability: {
        title: 'Limitation of Liability',
        content: 'We are not responsible for financial losses resulting from the use of our signals. All trading decisions are made by you independently.',
      },
      changes: {
        title: 'Changes to Terms',
        content: 'We reserve the right to change these terms at any time. Continued use of the service means acceptance of the new terms.',
      },
    },
  },

  // Risk page
  risk: {
    hero: {
      title: 'Risk Warning',
      description: 'Important information about trading risks',
    },
    warning: {
      title: 'Warning',
      content: 'Trading binary options and other financial instruments involves a high risk of capital loss. You may lose all invested funds.',
    },
    risks: {
      title: 'Main Risks',
      market: {
        title: 'Market Risks',
        description: 'Prices of financial instruments can change unpredictably due to various factors.',
      },
      leverage: {
        title: 'Leverage Risks',
        description: 'Using leverage can increase both profits and losses.',
      },
      technical: {
        title: 'Technical Risks',
        description: 'Internet connection or platform issues may affect trade execution.',
      },
    },
    recommendations: {
      title: 'Recommendations',
      content: 'Invest only funds you can afford to lose. Never trade with borrowed funds. Use proper risk management and do not risk more than 2-5% of your deposit on a single trade.',
    },
    disclaimer: {
      title: 'Disclaimer',
      content: 'Our signals and materials are for informational purposes only and are not financial advice. All trading decisions are made by you independently, and you bear full responsibility for trading results.',
    },
  },
}

