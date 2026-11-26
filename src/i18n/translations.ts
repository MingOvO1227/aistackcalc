export type Locale = 'en' | 'zh' | 'ja' | 'de' | 'es' | 'fr';

export const LOCALES: { code: Locale; label: string; native: string; hreflang: string }[] = [
  { code: 'en', label: 'English', native: 'EN', hreflang: 'en' },
  { code: 'zh', label: 'Chinese', native: '中文', hreflang: 'zh-Hans' },
  { code: 'ja', label: 'Japanese', native: '日本語', hreflang: 'ja' },
  { code: 'de', label: 'German', native: 'DE', hreflang: 'de' },
  { code: 'es', label: 'Spanish', native: 'ES', hreflang: 'es' },
  { code: 'fr', label: 'French', native: 'FR', hreflang: 'fr' }
];

export interface TranslationDict {
  nav: {
    llmCalc: string;
    voiceCalc: string;
    gpuCalc: string;
    stackCalc: string;
    compare: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    modelsCount: string;
    autoSync: string;
    freeTool: string;
  };
  llm: {
    sectionTitle: string;
    presetsLabel: string;
    presetChatbot: string;
    presetCoding: string;
    presetRag: string;
    presetContent: string;
    monthlyReqs: string;
    inputTokens: string;
    outputTokens: string;
    cacheRate: string;
    searchPlaceholder: string;
    allProviders: string;
    allTiers: string;
    openWeightOnly: string;
    sortBy: string;
    sortMonthly: string;
    sortInput: string;
    sortOutput: string;
    sortContext: string;
    colModel: string;
    colContext: string;
    colRates: string;
    colMonthly: string;
    colYearly: string;
    colAction: string;
    cheapestBadge: string;
    openBadge: string;
    details: string;
    summaryTotalTokens: string;
    summaryCheapest: string;
    summaryPotentialSave: string;
    cacheNote: string;
    savingsSub: string;
    noModelsFound: string;
    tierBudget: string;
    tierBalanced: string;
    tierFlagship: string;
    tierReasoning: string;
  };
  voice: {
    title: string;
    subtitle: string;
    monthlyMinutes: string;
    dubbingLangs: string;
    humanRatePerMin: string;
    studioCostLabel: string;
    aiCostLabel: string;
    monthlySavingsLabel: string;
    recommendedPlan: string;
    ctaHeadline: string;
  };
  gpu: {
    title: string;
    subtitle: string;
    monthlyMillions: string;
    hoursPerDay: string;
    apiCostLabel: string;
    gpuCostLabel: string;
    verdictSelfHost: string;
    verdictUseApi: string;
    ctaHeadline: string;
  };
  stack: {
    title: string;
    subtitle: string;
    teamSize: string;
    monthlyWorkflows: string;
    emailSubs: string;
    needWebsite: string;
    needVoice: string;
    totalMonthly: string;
    totalYearly: string;
    recommendedTools: string;
  };
  partners: {
    heading: string;
    subheading: string;
    disclosureShort: string;
  };
  compare: {
    heading: string;
    subheading: string;
    viewAll: string;
    pageTitle: string;
    pageSubtitle: string;
    viewBtn: string;
    compareBtn: string;
    costWinner: string;
    lowerBlended: string;
    cheaperOption: string;
    inputPerM: string;
    outputPerM: string;
    contextWindow: string;
    estMonthlyBill: string;
    adjustReqs: string;
    annualSavingsWith: string;
    homeCrumb: string;
    priceTieBadge: string;
    samePriceTag: string;
  };
  modelDetail: {
    tierSuffix: string;
    openSelfHost: string;
    blendedRate: string;
    quickEstimator: string;
    estMonthlyLabel: string;
    checkGpuCta: string;
    scenariosTitle: string;
    colWorkload: string;
    colVolume: string;
    colMonthlyEst: string;
    colAnnualEst: string;
    cheaperAltsTitle: string;
    pctCheaper: string;
    directComparisonsTitle: string;
  };
  footer: {
    about: string;
    privacy: string;
    disclosure: string;
    syncedPrefix: string;
    rights: string;
  };
}

export const TRANSLATIONS: Record<Locale, TranslationDict> = {
  en: {
    nav: {
      llmCalc: 'LLM API Calculator',
      voiceCalc: 'AI Voice Cost',
      gpuCalc: 'GPU vs API',
      stackCalc: 'AI SaaS Stack',
      compare: 'Compare Models'
    },
    hero: {
      badge: 'Live Pricing · Auto-Updated Daily',
      title: 'Calculate Real AI API, Voice & Cloud GPU Costs in Seconds',
      subtitle: 'Compare live token rates across top AI models, estimate monthly cloud bills, and find the lowest-cost stack for your business.',
      modelsCount: 'Live Models Tracked',
      autoSync: 'Daily Automated Sync',
      freeTool: '100% Free & Real-Time'
    },
    llm: {
      sectionTitle: 'Interactive LLM API Cost Calculator',
      presetsLabel: 'Quick Workload Presets:',
      presetChatbot: 'Support Chatbot',
      presetCoding: 'AI Coding Agent',
      presetRag: 'RAG / Doc Search',
      presetContent: 'Content Pipeline',
      monthlyReqs: 'Monthly Requests',
      inputTokens: 'Avg Input Tokens / Req',
      outputTokens: 'Avg Output Tokens / Req',
      cacheRate: 'Prompt Cache Hit %',
      searchPlaceholder: 'Search model or provider...',
      allProviders: 'All Providers',
      allTiers: 'All Tiers',
      openWeightOnly: 'Open-Weight Only',
      sortBy: 'Sort by',
      sortMonthly: 'Lowest Monthly Cost',
      sortInput: 'Lowest Input Price',
      sortOutput: 'Lowest Output Price',
      sortContext: 'Largest Context Window',
      colModel: 'Model & Provider',
      colContext: 'Context',
      colRates: 'In / Out (per 1M)',
      colMonthly: 'Est. Monthly',
      colYearly: 'Est. Yearly',
      colAction: 'Inspect',
      cheapestBadge: 'Lowest Cost',
      openBadge: 'Open-Weight',
      details: 'Breakdown',
      summaryTotalTokens: 'Monthly Token Volume',
      summaryCheapest: 'Lowest Estimated Bill',
      summaryPotentialSave: 'Max Savings vs Top Flagship',
      cacheNote: 'Assumes ~50% input discount on cached prompt tokens',
      savingsSub: 'Switching to cost-efficient tier',
      noModelsFound: 'No matching models found. Try clearing your search or filters.',
      tierBudget: 'Budget',
      tierBalanced: 'Balanced',
      tierFlagship: 'Flagship',
      tierReasoning: 'Reasoning'
    },
    voice: {
      title: 'AI Voice, Audiobook & Dubbing Cost Calculator',
      subtitle: 'Estimate monthly AI voice generation costs vs traditional voice actors and find the most cost-effective plan.',
      monthlyMinutes: 'Audio Minutes / Month',
      dubbingLangs: 'Target Languages',
      humanRatePerMin: 'Human Voice Talent ($/min)',
      studioCostLabel: 'Traditional Studio Est.',
      aiCostLabel: 'AI Voice Est. (ElevenLabs)',
      monthlySavingsLabel: 'Estimated Monthly Savings',
      recommendedPlan: 'Best-Fit Plan',
      ctaHeadline: 'Generate studio-grade multilingual voices in minutes'
    },
    gpu: {
      title: 'Self-Hosted Cloud GPU vs LLM API Break-Even Calculator',
      subtitle: 'Find out whether paying per-token API fees or renting dedicated Cloud GPUs (RunPod H100 / A100 / L40S) saves more money at your scale.',
      monthlyMillions: 'Monthly Total Tokens (Millions)',
      hoursPerDay: 'Active GPU Hours / Day',
      apiCostLabel: 'Commercial API Est. / mo',
      gpuCostLabel: 'Dedicated Cloud GPU Est. / mo',
      verdictSelfHost: 'Self-hosting on Cloud GPU wins at this scale',
      verdictUseApi: 'Per-token API (or Serverless GPU) is cheaper right now',
      ctaHeadline: 'Deploy Open-Weight LLMs on On-Demand Cloud GPUs'
    },
    stack: {
      title: 'AI Business & No-Code Automation Stack Cost Estimator',
      subtitle: 'Plan your exact monthly software budget across AI automation, web builders, workspace tools, and email funnels.',
      teamSize: 'Team Members',
      monthlyWorkflows: 'Automated Tasks / Month',
      emailSubs: 'Email Subscribers',
      needWebsite: 'Include AI Website Builder (Webflow)',
      needVoice: 'Include AI Voice / Audio (ElevenLabs)',
      totalMonthly: 'Estimated Monthly Stack Cost',
      totalYearly: 'Estimated Annual Stack Cost',
      recommendedTools: 'Recommended Cost-Optimized Stack'
    },
    partners: {
      heading: 'Cut Your AI & Automation Costs Further',
      subheading: 'Vetted infrastructure and no-code AI platforms to lower operational overhead.',
      disclosureShort: 'Partner links may earn us a commission at zero extra cost to you.'
    },
    compare: {
      heading: 'Popular Head-to-Head Model Price Comparisons',
      subheading: 'Auto-updated daily directly from live provider pricing feeds.',
      viewAll: 'View All Comparisons',
      pageTitle: 'Head-to-Head AI Model API Price Comparisons',
      pageSubtitle: 'Pick any pair below to compare live input/output token rates, context windows, and monthly production bills side by side.',
      viewBtn: 'View',
      compareBtn: 'Compare',
      costWinner: 'Cost Winner',
      lowerBlended: 'lower blended rate',
      cheaperOption: 'Cheaper Option',
      inputPerM: 'Input / 1M Tokens',
      outputPerM: 'Output / 1M Tokens',
      contextWindow: 'Context Window',
      estMonthlyBill: 'Est. Monthly Bill',
      adjustReqs: 'Adjust Monthly Requests (1,500 in / 500 out avg)',
      annualSavingsWith: 'Annual Savings with',
      homeCrumb: 'Home',
      priceTieBadge: 'Same Price · Identical Blended Rate',
      samePriceTag: 'Same Price'
    },
    modelDetail: {
      tierSuffix: 'tier',
      openSelfHost: 'Open-Weight · Self-Hostable',
      blendedRate: 'Blended (3:1)',
      quickEstimator: 'Quick Bill Estimator',
      estMonthlyLabel: 'Estimated Monthly Cost:',
      checkGpuCta: 'Check if Cloud GPU Self-Hosting is cheaper',
      scenariosTitle: 'Typical Production Cost Scenarios',
      colWorkload: 'Workload',
      colVolume: 'Volume',
      colMonthlyEst: 'Monthly Est.',
      colAnnualEst: 'Annual Est.',
      cheaperAltsTitle: 'Lower-Cost Alternatives',
      pctCheaper: 'cheaper',
      directComparisonsTitle: 'Direct Comparisons'
    },
    footer: {
      about: 'Methodology & About',
      privacy: 'Privacy Policy',
      disclosure: 'Affiliate Disclosure',
      syncedPrefix: 'Pricing synced:',
      rights: 'All rights reserved.'
    }
  },
  zh: {
    nav: {
      llmCalc: '大模型 API 计费',
      voiceCalc: 'AI 语音成本',
      gpuCalc: '云 GPU vs API',
      stackCalc: 'AI SaaS 预算',
      compare: '模型比价'
    },
    hero: {
      badge: '实时定价 · 每日全自动同步',
      title: '几秒算清 AI 大模型 API、语音与云 GPU 真实成本',
      subtitle: '实时对比全球主流大模型 Token 单价，一键测算月度云端账单，帮你挑出性价比最高的 AI 与自动化组合方案。',
      modelsCount: '个实时追踪模型',
      autoSync: '每日自动更新价格',
      freeTool: '100% 免费免登录'
    },
    llm: {
      sectionTitle: '交互式大模型 API 成本计算器',
      presetsLabel: '常用业务场景预设：',
      presetChatbot: '智能客服机器人',
      presetCoding: 'AI 编程助手',
      presetRag: '知识库 / RAG 检索',
      presetContent: '批量内容生成',
      monthlyReqs: '每月调用次数',
      inputTokens: '单次平均输入 Token',
      outputTokens: '单次平均输出 Token',
      cacheRate: '提示词缓存命中率 %',
      searchPlaceholder: '搜索模型名称或厂商...',
      allProviders: '全部厂商',
      allTiers: '全部档位',
      openWeightOnly: '仅看开源权重模型',
      sortBy: '排序方式',
      sortMonthly: '月费从低到高',
      sortInput: '输入单价从低到高',
      sortOutput: '输出单价从低到高',
      sortContext: '上下文窗口从大到小',
      colModel: '模型与厂商',
      colContext: '上下文',
      colRates: '输入 / 输出 (每百万)',
      colMonthly: '预估月费',
      colYearly: '预估年费',
      colAction: '详情',
      cheapestBadge: '性价比最高',
      openBadge: '开源',
      details: '查看明细',
      summaryTotalTokens: '月度 Token 总消耗',
      summaryCheapest: '最低预估月账单',
      summaryPotentialSave: '对比顶配旗舰最高可省',
      cacheNote: '命中缓存的输入 Token 默认按约 50% 折扣测算',
      savingsSub: '切换至高性价比档位模型',
      noModelsFound: '未找到符合条件的模型，请尝试清空搜索词或筛选条件。',
      tierBudget: '经济型',
      tierBalanced: '均衡型',
      tierFlagship: '旗舰型',
      tierReasoning: '推理型'
    },
    voice: {
      title: 'AI 语音、有声书与多语言配音成本计算器',
      subtitle: '对比真人配音棚与 AI 语音（ElevenLabs）的月度开支，自动匹配最划算的订阅方案。',
      monthlyMinutes: '每月音频时长（分钟）',
      dubbingLangs: '多语言配音语种数',
      humanRatePerMin: '真人配音单价 ($/分钟)',
      studioCostLabel: '传统配音棚预估',
      aiCostLabel: 'AI 语音预估 (ElevenLabs)',
      monthlySavingsLabel: '每月预计节省',
      recommendedPlan: '推荐最划算套餐',
      ctaHeadline: '几分钟生成广播级多语言 AI 配音'
    },
    gpu: {
      title: '自建云 GPU vs 商用大模型 API 盈亏平衡计算器',
      subtitle: '按你的月调用量快速算出：是直接按 Token 买 API 划算，还是租用按秒计费云 GPU（RunPod H100/A100/L40S）自部署开源模型更省钱。',
      monthlyMillions: '月度总 Token 量（百万）',
      hoursPerDay: 'GPU 每日活跃时长',
      apiCostLabel: '商用 API 预估 / 月',
      gpuCostLabel: '云 GPU 租赁预估 / 月',
      verdictSelfHost: '当前规模下，云 GPU 自部署更省钱',
      verdictUseApi: '当前规模下，按量付费 API（或 Serverless GPU）更划算',
      ctaHeadline: '按秒计费云 GPU，60 秒一键部署开源大模型'
    },
    stack: {
      title: 'AI 创业与无代码自动化 SaaS 预算计算器',
      subtitle: '一站估算团队每月在自动化工作流、AI 建站、协作空间与邮件营销上的总软件开支。',
      teamSize: '团队人数',
      monthlyWorkflows: '每月自动运行任务数',
      emailSubs: '邮件订阅用户数',
      needWebsite: '包含 AI 建站工具 (Webflow)',
      needVoice: '包含 AI 语音生成 (ElevenLabs)',
      totalMonthly: '预估月度软件总支出',
      totalYearly: '预估年度软件总支出',
      recommendedTools: '为你匹配的成本优化工具清单'
    },
    partners: {
      heading: '进一步降低 AI 与自动化运营成本',
      subheading: '精选经过验证的云算力、AI 语音与无代码自动化工具。',
      disclosureShort: '通过合作链接注册可能为我们带来佣金，不增加你的任何费用。'
    },
    compare: {
      heading: '热门大模型 API 价格对比',
      subheading: '数据每日从实时定价接口自动同步更新。',
      viewAll: '查看全部对比',
      pageTitle: '大模型 API 实时价格对比清单',
      pageSubtitle: '任选下方任意一组模型，横向对比最新输入/输出 Token 单价、上下文长度与预估月账单。',
      viewBtn: '查看',
      compareBtn: '对比',
      costWinner: '性价比胜出',
      lowerBlended: '综合单价更低',
      cheaperOption: '更省钱方案',
      inputPerM: '输入 / 每百万 Token',
      outputPerM: '输出 / 每百万 Token',
      contextWindow: '上下文窗口',
      estMonthlyBill: '预估月账单',
      adjustReqs: '拖动调整每月调用次数（默认 1,500 输入 / 500 输出）',
      annualSavingsWith: '改用此模型预计每年可省：',
      homeCrumb: '首页',
      priceTieBadge: '定价持平 · 综合单价相同',
      samePriceTag: '同价'
    },
    modelDetail: {
      tierSuffix: '档位',
      openSelfHost: '开源权重 · 支持自部署',
      blendedRate: '综合单价 (3:1)',
      quickEstimator: '快速账单测算',
      estMonthlyLabel: '预估月费：',
      checkGpuCta: '测算自建云 GPU 是否更省钱',
      scenariosTitle: '常见业务规模月费参考',
      colWorkload: '业务场景',
      colVolume: '月调用量',
      colMonthlyEst: '预估月费',
      colAnnualEst: '预估年费',
      cheaperAltsTitle: '更低成本替代模型',
      pctCheaper: '更省',
      directComparisonsTitle: '相关横向对比'
    },
    footer: {
      about: '计费方法与关于本站',
      privacy: '隐私政策',
      disclosure: '联盟披露声明',
      syncedPrefix: '价格同步日期：',
      rights: '保留所有权利。'
    }
  },
  ja: {
    nav: {
      llmCalc: 'LLM API 料金計算',
      voiceCalc: 'AI音声コスト',
      gpuCalc: 'GPU vs API比較',
      stackCalc: 'AI SaaS 予算',
      compare: 'モデル比較一覧'
    },
    hero: {
      badge: '毎日自動更新 · リアルタイム料金',
      title: 'AI API・AI音声・クラウドGPUの月額コストを数秒で試算',
      subtitle: '主要LLMの最新トークン単価をリアルタイム比較。月間API請求額や最適なAIツール構成を無料で見積もれます。',
      modelsCount: '追跡モデル数',
      autoSync: '毎日自動データ同期',
      freeTool: '完全無料・登録不要'
    },
    llm: {
      sectionTitle: 'リアルタイム LLM API コスト計算機',
      presetsLabel: '用途プリセット：',
      presetChatbot: '顧客対応チャット',
      presetCoding: 'AIコーディング',
      presetRag: 'RAG・社内検索',
      presetContent: '記事・翻訳量産',
      monthlyReqs: '月間リクエスト数',
      inputTokens: '平均入力トークン / 回',
      outputTokens: '平均出力トークン / 回',
      cacheRate: 'キャッシュヒット率 %',
      searchPlaceholder: 'モデル名・プロバイダー検索...',
      allProviders: '全プロバイダー',
      allTiers: '全ランク',
      openWeightOnly: 'オープンモデルのみ',
      sortBy: '並び替え',
      sortMonthly: '月額が安い順',
      sortInput: '入力単価が安い順',
      sortOutput: '出力単価が安い順',
      sortContext: 'コンテキスト長順',
      colModel: 'モデル / 提供元',
      colContext: 'コンテキスト',
      colRates: '入力 / 出力 (100万T)',
      colMonthly: '月間目安',
      colYearly: '年間目安',
      colAction: '詳細',
      cheapestBadge: '最安クラス',
      openBadge: 'オープン',
      details: '詳細を見る',
      summaryTotalTokens: '月間トークン総量',
      summaryCheapest: '最安モデルの月額目安',
      summaryPotentialSave: '最上位比の最大削減額',
      cacheNote: 'キャッシュされた入力トークンは約50%割引で計算',
      savingsSub: '高コスパモデルへの切り替え時',
      noModelsFound: '一致するモデルが見つかりません。検索条件を変更してください。',
      tierBudget: '低コスト',
      tierBalanced: 'バランス',
      tierFlagship: 'フラッグシップ',
      tierReasoning: '推論特化'
    },
    voice: {
      title: 'AI音声・ナレーション・多言語吹替コスト計算機',
      subtitle: '人間のナレーター依頼費用とAI音声（ElevenLabs）の月額コストを比較し、最適なプランを算出します。',
      monthlyMinutes: '月間音声分数（分）',
      dubbingLangs: '翻訳・吹替の言語数',
      humanRatePerMin: '人間ナレーター相場 ($/分)',
      studioCostLabel: 'スタジオ収録の目安',
      aiCostLabel: 'AI音声の目安 (ElevenLabs)',
      monthlySavingsLabel: '月間の削減見込額',
      recommendedPlan: '最適プラン',
      ctaHeadline: 'スタジオ品質の多言語AI音声を数分で生成'
    },
    gpu: {
      title: 'クラウドGPU自前運用 vs LLM API 損益分岐点計算機',
      subtitle: 'トークン従量課金APIとRunPod等のクラウドGPUレンタル（H100/A100/L40S）、どちらが安いか即判定します。',
      monthlyMillions: '月間総トークン数（百万）',
      hoursPerDay: '1日あたりのGPU稼働時間',
      apiCostLabel: '商用APIの月額目安',
      gpuCostLabel: 'クラウドGPU月額目安',
      verdictSelfHost: 'この規模ではクラウドGPU自前運用がお得です',
      verdictUseApi: '現時点では従量課金API（またはServerless GPU）がお得です',
      ctaHeadline: '秒単位課金のクラウドGPUでオープンLLMを運用'
    },
    stack: {
      title: 'AIビジネス・ノーコード自動化スタック月額試算',
      subtitle: '自動化ツール・AIサイト制作・ワークスペース・メール配信の合計コストを一括シミュレーション。',
      teamSize: 'チーム人数',
      monthlyWorkflows: '月間自動実行タスク数',
      emailSubs: 'メール購読者数',
      needWebsite: 'AIサイト構築を含める (Webflow)',
      needVoice: 'AI音声生成を含める (ElevenLabs)',
      totalMonthly: '月間ツール合計目安',
      totalYearly: '年間ツール合計目安',
      recommendedTools: 'コスト最適化おすすめ構成'
    },
    partners: {
      heading: 'AI開発・運用コストをさらに削減する定番ツール',
      subheading: '自動化・クラウドGPU・AI音声で実績のあるおすすめプラットフォーム。',
      disclosureShort: 'リンク経由での登録により運営収益を得る場合があります（追加費用なし）。'
    },
    compare: {
      heading: '人気のAIモデル料金比較',
      subheading: '公式API価格フィードから毎日自動で最新化されます。',
      viewAll: 'すべての比較を見る',
      pageTitle: 'AIモデル API 料金の直接比較一覧',
      pageSubtitle: '比較したいモデルの組み合わせを選び、最新トークン単価・コンテキスト長・月額目安を並べて確認できます。',
      viewBtn: '比較を見る',
      compareBtn: '比較',
      costWinner: 'コスト優位',
      lowerBlended: '平均単価が安い',
      cheaperOption: '低コスト案',
      inputPerM: '入力 / 100万トークン',
      outputPerM: '出力 / 100万トークン',
      contextWindow: 'コンテキスト長',
      estMonthlyBill: '月間請求目安',
      adjustReqs: '月間リクエスト数を調整（平均 1,500入力 / 500出力）',
      annualSavingsWith: '年間削減額目安：',
      homeCrumb: 'ホーム',
      priceTieBadge: '同額設定 · 平均単価が一致',
      samePriceTag: '同価格'
    },
    modelDetail: {
      tierSuffix: 'クラス',
      openSelfHost: 'オープンモデル · 自前運用可',
      blendedRate: '複合単価 (3:1)',
      quickEstimator: 'クイック料金試算',
      estMonthlyLabel: '月間目安：',
      checkGpuCta: 'クラウドGPU自前運用の方が安いか確認',
      scenariosTitle: '利用規模別の料金シミュレーション',
      colWorkload: '用途',
      colVolume: '月間リクエスト',
      colMonthlyEst: '月間目安',
      colAnnualEst: '年間目安',
      cheaperAltsTitle: 'より低コストな代替モデル',
      pctCheaper: '削減',
      directComparisonsTitle: '関連モデル比較'
    },
    footer: {
      about: '計算方法・運営情報',
      privacy: 'プライバシーポリシー',
      disclosure: '広告・アフィリエイト表記',
      syncedPrefix: '最終データ更新:',
      rights: 'All rights reserved.'
    }
  },
  de: {
    nav: {
      llmCalc: 'LLM API Rechner',
      voiceCalc: 'KI-Stimme Kosten',
      gpuCalc: 'GPU vs API',
      stackCalc: 'KI SaaS Stack',
      compare: 'Modelle vergleichen'
    },
    hero: {
      badge: 'Live-Preise · Täglich automatisch aktualisiert',
      title: 'Echte KI-API-, Sprach- & Cloud-GPU-Kosten in Sekunden berechnen',
      subtitle: 'Vergleichen Sie aktuelle Token-Preise führender KI-Modelle, kalkulieren Sie monatliche Cloud-Rechnungen und optimieren Sie Ihren KI-Stack.',
      modelsCount: 'Aktive KI-Modelle',
      autoSync: 'Tägliche Live-Synchronisation',
      freeTool: '100% Kostenlos & Sofort'
    },
    llm: {
      sectionTitle: 'Interaktiver LLM API Kostenrechner',
      presetsLabel: 'Schnell-Vorlagen:',
      presetChatbot: 'Support-Chatbot',
      presetCoding: 'KI-Coding-Agent',
      presetRag: 'RAG / Dokumentsuche',
      presetContent: 'Content-Pipeline',
      monthlyReqs: 'Anfragen pro Monat',
      inputTokens: 'Ø Input-Tokens / Anfrage',
      outputTokens: 'Ø Output-Tokens / Anfrage',
      cacheRate: 'Prompt-Cache-Quote %',
      searchPlaceholder: 'Modell oder Anbieter suchen...',
      allProviders: 'Alle Anbieter',
      allTiers: 'Alle Klassen',
      openWeightOnly: 'Nur Open-Weight',
      sortBy: 'Sortieren nach',
      sortMonthly: 'Günstigste Monatskosten',
      sortInput: 'Günstigster Input-Preis',
      sortOutput: 'Günstigster Output-Preis',
      sortContext: 'Größtes Kontextfenster',
      colModel: 'Modell & Anbieter',
      colContext: 'Kontext',
      colRates: 'In / Out (pro 1M)',
      colMonthly: 'Monatl. ca.',
      colYearly: 'Jährl. ca.',
      colAction: 'Details',
      cheapestBadge: 'Am günstigsten',
      openBadge: 'Open-Weight',
      details: 'Analyse',
      summaryTotalTokens: 'Monatliches Token-Volumen',
      summaryCheapest: 'Günstigste Schätzung',
      summaryPotentialSave: 'Max. Ersparnis vs Flaggschiff',
      cacheNote: 'Berechnet ~50% Rabatt auf gecachte Input-Tokens',
      savingsSub: 'Wechsel auf kosteneffizientes Modell',
      noModelsFound: 'Keine passenden Modelle gefunden. Filter zurücksetzen.',
      tierBudget: 'Günstig',
      tierBalanced: 'Ausgewogen',
      tierFlagship: 'Flaggschiff',
      tierReasoning: 'Reasoning'
    },
    voice: {
      title: 'KI-Stimme, Hörbuch & Synchronisations-Kostenrechner',
      subtitle: 'Vergleichen Sie menschliche Sprecherkosten mit ElevenLabs KI-Stimmen und finden Sie den günstigsten Tarif.',
      monthlyMinutes: 'Audiominuten / Monat',
      dubbingLangs: 'Zielsprachen',
      humanRatePerMin: 'Sprecher-Honorar ($/Min)',
      studioCostLabel: 'Studio-Schätzung',
      aiCostLabel: 'KI-Stimme ca. (ElevenLabs)',
      monthlySavingsLabel: 'Geschätzte Monatsersparnis',
      recommendedPlan: 'Passender Tarif',
      ctaHeadline: 'Mehrsprachige KI-Stimmen in Studioqualität erstellen'
    },
    gpu: {
      title: 'Cloud-GPU Self-Hosting vs. LLM-API Break-Even-Rechner',
      subtitle: 'Prüfen Sie, ab welchem Volumen sich eigene Cloud-GPUs (RunPod H100/A100/L40S) gegenüber Token-APIs lohnen.',
      monthlyMillions: 'Monatliche Tokens (Millionen)',
      hoursPerDay: 'Aktive GPU-Stunden / Tag',
      apiCostLabel: 'API-Kosten ca. / Monat',
      gpuCostLabel: 'Cloud-GPU ca. / Monat',
      verdictSelfHost: 'Self-Hosting auf Cloud-GPU spart in dieser Größenordnung',
      verdictUseApi: 'Pay-per-Token API ist aktuell wirtschaftlicher',
      ctaHeadline: 'Open-Weight-Modelle sekundengenau auf Cloud-GPUs hosten'
    },
    stack: {
      title: 'KI-Business & No-Code Automatisierungs-Budgetrechner',
      subtitle: 'Kalkulieren Sie Ihre monatlichen Softwarekosten für KI-Workflows, Website, Workspace und E-Mail-Marketing.',
      teamSize: 'Teamgröße',
      monthlyWorkflows: 'Automatisierte Tasks / Monat',
      emailSubs: 'E-Mail-Abonnenten',
      needWebsite: 'KI-Website-Builder einbeziehen (Webflow)',
      needVoice: 'KI-Stimme einbeziehen (ElevenLabs)',
      totalMonthly: 'Geschätzte Monatskosten',
      totalYearly: 'Geschätzte Jahreskosten',
      recommendedTools: 'Empfohlener kostenoptimierter Stack'
    },
    partners: {
      heading: 'KI- & Automatisierungskosten weiter senken',
      subheading: 'Bewährte Plattformen für Cloud-GPUs, KI-Stimmen und No-Code-Automatisierung.',
      disclosureShort: 'Partnerlinks können uns eine Provision ohne Mehrkosten für Sie einbringen.'
    },
    compare: {
      heading: 'Beliebte KI-Modell Preisvergleiche',
      subheading: 'Täglich automatisch aus Live-Preisen aktualisiert.',
      viewAll: 'Alle Vergleiche ansehen',
      pageTitle: 'KI-Modell API-Preisvergleiche im direkten Duell',
      pageSubtitle: 'Wählen Sie ein Modellpaar, um Live-Tokenpreise, Kontextfenster und Monatskosten direkt zu vergleichen.',
      viewBtn: 'Ansehen',
      compareBtn: 'Vergleichen',
      costWinner: 'Preissieger',
      lowerBlended: 'günstiger im Schnitt',
      cheaperOption: 'Günstigere Wahl',
      inputPerM: 'Input / 1M Tokens',
      outputPerM: 'Output / 1M Tokens',
      contextWindow: 'Kontextfenster',
      estMonthlyBill: 'Monatsrechnung ca.',
      adjustReqs: 'Monatliche Anfragen anpassen (1.500 In / 500 Out)',
      annualSavingsWith: 'Jährliche Ersparnis mit',
      homeCrumb: 'Startseite',
      priceTieBadge: 'Gleicher Preis · Identischer Tarif',
      samePriceTag: 'Preisgleich'
    },
    modelDetail: {
      tierSuffix: 'Klasse',
      openSelfHost: 'Open-Weight · Self-Hosting möglich',
      blendedRate: 'Mischpreis (3:1)',
      quickEstimator: 'Schnell-Kostenrechner',
      estMonthlyLabel: 'Monatskosten ca.:',
      checkGpuCta: 'Prüfen, ob Cloud-GPU Self-Hosting günstiger ist',
      scenariosTitle: 'Typische Produktions-Szenarien',
      colWorkload: 'Anwendungsfall',
      colVolume: 'Volumen',
      colMonthlyEst: 'Monatl. ca.',
      colAnnualEst: 'Jährl. ca.',
      cheaperAltsTitle: 'Günstigere Alternativen',
      pctCheaper: 'günstiger',
      directComparisonsTitle: 'Direkte Vergleiche'
    },
    footer: {
      about: 'Methodik & Über uns',
      privacy: 'Datenschutz',
      disclosure: 'Affiliate-Hinweis',
      syncedPrefix: 'Preise aktualisiert:',
      rights: 'Alle Rechte vorbehalten.'
    }
  },
  es: {
    nav: {
      llmCalc: 'Calculadora LLM API',
      voiceCalc: 'Costo Voz IA',
      gpuCalc: 'GPU vs API',
      stackCalc: 'Stack SaaS IA',
      compare: 'Comparar Modelos'
    },
    hero: {
      badge: 'Precios en Vivo · Actualización Diaria Automática',
      title: 'Calcula el Costo Real de APIs de IA, Voz y GPUs en Segundos',
      subtitle: 'Compara tarifas por token en tiempo real entre los principales modelos de IA y optimiza tu factura mensual en la nube.',
      modelsCount: 'Modelos Rastreados',
      autoSync: 'Sincronización Diaria',
      freeTool: '100% Gratis y Sin Registro'
    },
    llm: {
      sectionTitle: 'Calculadora Interactiva de Costos de API LLM',
      presetsLabel: 'Escenarios rápidos:',
      presetChatbot: 'Chatbot Soporte',
      presetCoding: 'Agente de Código',
      presetRag: 'RAG / Documentos',
      presetContent: 'Flujo de Contenido',
      monthlyReqs: 'Solicitudes Mensuales',
      inputTokens: 'Tokens Entrada Prom. / Req',
      outputTokens: 'Tokens Salida Prom. / Req',
      cacheRate: '% Acierto Caché Prompt',
      searchPlaceholder: 'Buscar modelo o proveedor...',
      allProviders: 'Todos los Proveedores',
      allTiers: 'Todos los Niveles',
      openWeightOnly: 'Solo Open-Weight',
      sortBy: 'Ordenar por',
      sortMonthly: 'Menor Costo Mensual',
      sortInput: 'Menor Precio Entrada',
      sortOutput: 'Menor Precio Salida',
      sortContext: 'Mayor Contexto',
      colModel: 'Modelo y Proveedor',
      colContext: 'Contexto',
      colRates: 'Ent / Sal (por 1M)',
      colMonthly: 'Est. Mensual',
      colYearly: 'Est. Anual',
      colAction: 'Detalle',
      cheapestBadge: 'Más Económico',
      openBadge: 'Open-Weight',
      details: 'Ver detalle',
      summaryTotalTokens: 'Volumen Mensual de Tokens',
      summaryCheapest: 'Factura Más Baja Est.',
      summaryPotentialSave: 'Ahorro Máx. vs Flagship',
      cacheNote: 'Asume ~50% de descuento en tokens de entrada en caché',
      savingsSub: 'Al cambiar a un nivel eficiente',
      noModelsFound: 'No se encontraron modelos. Prueba limpiando los filtros.',
      tierBudget: 'Económico',
      tierBalanced: 'Equilibrado',
      tierFlagship: 'Flagship',
      tierReasoning: 'Razonamiento'
    },
    voice: {
      title: 'Calculadora de Costos de Voz IA y Doblaje',
      subtitle: 'Compara locutores tradicionales frente a ElevenLabs y descubre qué plan ahorra más dinero cada mes.',
      monthlyMinutes: 'Minutos de Audio / Mes',
      dubbingLangs: 'Idiomas de Doblaje',
      humanRatePerMin: 'Tarifa Locutor ($/min)',
      studioCostLabel: 'Estudio Tradicional Est.',
      aiCostLabel: 'Voz IA Est. (ElevenLabs)',
      monthlySavingsLabel: 'Ahorro Mensual Estimado',
      recommendedPlan: 'Plan Recomendado',
      ctaHeadline: 'Crea locuciones y doblajes con IA en calidad de estudio'
    },
    gpu: {
      title: 'Calculadora Cloud GPU Propia vs API de LLM',
      subtitle: 'Descubre si te conviene pagar por token o alquilar GPUs dedicadas (RunPod H100/A100/L40S) para modelos abiertos.',
      monthlyMillions: 'Tokens Mensuales (Millones)',
      hoursPerDay: 'Horas de GPU Activas / Día',
      apiCostLabel: 'API Comercial Est. / mes',
      gpuCostLabel: 'Cloud GPU Est. / mes',
      verdictSelfHost: 'Alojar en Cloud GPU ahorra más a esta escala',
      verdictUseApi: 'La API por token es más barata por ahora',
      ctaHeadline: 'Despliega modelos Open-Weight en GPUs bajo demanda'
    },
    stack: {
      title: 'Calculadora de Stack SaaS de IA y Automatización',
      subtitle: 'Estima el presupuesto mensual de automatización, web con IA, espacio de trabajo y correo automatizado.',
      teamSize: 'Miembros del Equipo',
      monthlyWorkflows: 'Tareas Automatizadas / Mes',
      emailSubs: 'Suscriptores de Email',
      needWebsite: 'Incluir Creador Web IA (Webflow)',
      needVoice: 'Incluir Voz IA (ElevenLabs)',
      totalMonthly: 'Costo Mensual Estimado',
      totalYearly: 'Costo Anual Estimado',
      recommendedTools: 'Stack Recomendado al Menor Costo'
    },
    partners: {
      heading: 'Reduce aún más tus costos de IA y automatización',
      subheading: 'Plataformas líderes en infraestructura GPU, voz IA y automatización sin código.',
      disclosureShort: 'Los enlaces de socios pueden generar una comisión sin costo adicional para ti.'
    },
    compare: {
      heading: 'Comparativas Populares de Precios de Modelos IA',
      subheading: 'Actualizadas automáticamente cada día desde tarifas reales.',
      viewAll: 'Ver Todas las Comparativas',
      pageTitle: 'Comparativas Directas de Precios de APIs de IA',
      pageSubtitle: 'Elige cualquier par para comparar tarifas por token, contexto y factura mensual estimada lado a lado.',
      viewBtn: 'Ver',
      compareBtn: 'Comparar',
      costWinner: 'Ganador en Costo',
      lowerBlended: 'tarifa promedio más baja',
      cheaperOption: 'Opción Más Barata',
      inputPerM: 'Entrada / 1M Tokens',
      outputPerM: 'Salida / 1M Tokens',
      contextWindow: 'Ventana de Contexto',
      estMonthlyBill: 'Factura Mensual Est.',
      adjustReqs: 'Ajustar solicitudes mensuales (1.500 ent / 500 sal)',
      annualSavingsWith: 'Ahorro anual con',
      homeCrumb: 'Inicio',
      priceTieBadge: 'Mismo Precio · Tarifa Idéntica',
      samePriceTag: 'Mismo Precio'
    },
    modelDetail: {
      tierSuffix: 'nivel',
      openSelfHost: 'Open-Weight · Autoalojable',
      blendedRate: 'Mixto (3:1)',
      quickEstimator: 'Estimador Rápido',
      estMonthlyLabel: 'Costo Mensual Est.:',
      checkGpuCta: 'Comprueba si Cloud GPU propia sale más barata',
      scenariosTitle: 'Escenarios Típicos de Producción',
      colWorkload: 'Caso de Uso',
      colVolume: 'Volumen',
      colMonthlyEst: 'Mensual Est.',
      colAnnualEst: 'Anual Est.',
      cheaperAltsTitle: 'Alternativas Más Económicas',
      pctCheaper: 'más barato',
      directComparisonsTitle: 'Comparativas Directas'
    },
    footer: {
      about: 'Metodología',
      privacy: 'Privacidad',
      disclosure: 'Aviso de Afiliados',
      syncedPrefix: 'Precios actualizados:',
      rights: 'Todos los derechos reservados.'
    }
  },
  fr: {
    nav: {
      llmCalc: 'Calculateur API LLM',
      voiceCalc: 'Coût Voix IA',
      gpuCalc: 'GPU vs API',
      stackCalc: 'Stack SaaS IA',
      compare: 'Comparer Modèles'
    },
    hero: {
      badge: 'Tarifs en Direct · Mis à Jour Chaque Jour',
      title: 'Calculez vos Coûts API IA, Voix & GPU Cloud en Secondes',
      subtitle: 'Comparez les tarifs par token des meilleurs modèles IA en temps réel et optimisez votre budget mensuel.',
      modelsCount: 'Modèles Suivis',
      autoSync: 'Synchro Automatique Quotidienne',
      freeTool: '100% Gratuit et Instantané'
    },
    llm: {
      sectionTitle: 'Calculateur Interactif de Coût API LLM',
      presetsLabel: 'Profils rapides :',
      presetChatbot: 'Chatbot Support',
      presetCoding: 'Agent de Code IA',
      presetRag: 'RAG / Recherche Doc',
      presetContent: 'Production Contenu',
      monthlyReqs: 'Requêtes Mensuelles',
      inputTokens: 'Tokens Entrée Moy. / Req',
      outputTokens: 'Tokens Sortie Moy. / Req',
      cacheRate: 'Taux Cache Prompt %',
      searchPlaceholder: 'Rechercher modèle ou fournisseur...',
      allProviders: 'Tous les Fournisseurs',
      allTiers: 'Toutes Gammes',
      openWeightOnly: 'Open-Weight Uniquement',
      sortBy: 'Trier par',
      sortMonthly: 'Coût Mensuel le Plus Bas',
      sortInput: 'Prix Entrée le Plus Bas',
      sortOutput: 'Prix Sortie le Plus Bas',
      sortContext: 'Plus Grand Contexte',
      colModel: 'Modèle & Fournisseur',
      colContext: 'Contexte',
      colRates: 'Ent / Sort (par 1M)',
      colMonthly: 'Est. Mensuel',
      colYearly: 'Est. Annuel',
      colAction: 'Détails',
      cheapestBadge: 'Le Moins Cher',
      openBadge: 'Open-Weight',
      details: 'Détails',
      summaryTotalTokens: 'Volume Mensuel de Tokens',
      summaryCheapest: 'Facture Minimale Est.',
      summaryPotentialSave: 'Économie Max vs Flagship',
      cacheNote: 'Estime ~50% de remise sur les tokens d’entrée en cache',
      savingsSub: 'En passant à un modèle économique',
      noModelsFound: 'Aucun modèle trouvé. Essayez de réinitialiser les filtres.',
      tierBudget: 'Économique',
      tierBalanced: 'Équilibré',
      tierFlagship: 'Flagship',
      tierReasoning: 'Raisonnement'
    },
    voice: {
      title: 'Calculateur de Coût Voix IA & Doublage',
      subtitle: 'Comparez le coût des voix humaines face à ElevenLabs et choisissez le forfait le plus rentable.',
      monthlyMinutes: 'Minutes Audio / Mois',
      dubbingLangs: 'Langues de Doublage',
      humanRatePerMin: 'Tarif Voix Humaine ($/min)',
      studioCostLabel: 'Studio Traditionnel Est.',
      aiCostLabel: 'Voix IA Est. (ElevenLabs)',
      monthlySavingsLabel: 'Économies Mensuelles Est.',
      recommendedPlan: 'Forfait Recommandé',
      ctaHeadline: 'Générez des voix multilingues qualité studio par IA'
    },
    gpu: {
      title: 'Calculateur GPU Cloud Dédié vs API LLM',
      subtitle: 'Découvrez si payer par token ou louer un GPU Cloud (RunPod H100/A100/L40S) coûte moins cher à votre volume.',
      monthlyMillions: 'Tokens Mensuels (Millions)',
      hoursPerDay: 'Heures GPU Actives / Jour',
      apiCostLabel: 'API Commerciale Est. / mois',
      gpuCostLabel: 'GPU Cloud Est. / mois',
      verdictSelfHost: 'L’hébergement sur GPU Cloud est plus rentable à ce volume',
      verdictUseApi: 'L’API facturée au token reste plus économique',
      ctaHeadline: 'Déployez des LLM Open-Weight sur GPU à la seconde'
    },
    stack: {
      title: 'Estimateur de Budget Stack SaaS IA & Automatisation',
      subtitle: 'Estimez votre budget mensuel pour automatisation no-code, site web IA, espace de travail et e-mailing.',
      teamSize: 'Membres de l’équipe',
      monthlyWorkflows: 'Tâches Automatisées / Mois',
      emailSubs: 'Abonnés E-mail',
      needWebsite: 'Inclure Créateur Web IA (Webflow)',
      needVoice: 'Inclure Voix IA (ElevenLabs)',
      totalMonthly: 'Coût Mensuel Estimé',
      totalYearly: 'Coût Annuel Estimé',
      recommendedTools: 'Stack Recommandé Optimisé'
    },
    partners: {
      heading: 'Réduisez davantage vos coûts IA & automatisation',
      subheading: 'Plateformes fiables pour GPU Cloud, voix IA et automatisation sans code.',
      disclosureShort: 'Les liens partenaires peuvent nous rapporter une commission sans surcoût.'
    },
    compare: {
      heading: 'Comparatifs Populaires de Tarifs Modèles IA',
      subheading: 'Mis à jour quotidiennement depuis les flux tarifaires officiels.',
      viewAll: 'Voir Tous les Comparatifs',
      pageTitle: 'Comparatifs Directs des Tarifs API de Modèles IA',
      pageSubtitle: 'Sélectionnez une paire pour comparer en direct les tarifs par token, le contexte et la facture mensuelle.',
      viewBtn: 'Voir',
      compareBtn: 'Comparer',
      costWinner: 'Meilleur Prix',
      lowerBlended: 'tarif moyen inférieur',
      cheaperOption: 'Option Moins Chère',
      inputPerM: 'Entrée / 1M Tokens',
      outputPerM: 'Sortie / 1M Tokens',
      contextWindow: 'Fenêtre de Contexte',
      estMonthlyBill: 'Facture Mensuelle Est.',
      adjustReqs: 'Ajuster les requêtes mensuelles (1 500 ent / 500 sort)',
      annualSavingsWith: 'Économies annuelles avec',
      homeCrumb: 'Accueil',
      priceTieBadge: 'Même Tarif · Prix Identique',
      samePriceTag: 'Même Prix'
    },
    modelDetail: {
      tierSuffix: 'gamme',
      openSelfHost: 'Open-Weight · Auto-hébergeable',
      blendedRate: 'Mixte (3:1)',
      quickEstimator: 'Estimateur Rapide',
      estMonthlyLabel: 'Coût Mensuel Est. :',
      checkGpuCta: 'Vérifier si un GPU Cloud dédié coûte moins cher',
      scenariosTitle: 'Scénarios de Production Typiques',
      colWorkload: 'Usage',
      colVolume: 'Volume',
      colMonthlyEst: 'Mensuel Est.',
      colAnnualEst: 'Annuel Est.',
      cheaperAltsTitle: 'Alternatives Moins Chères',
      pctCheaper: 'moins cher',
      directComparisonsTitle: 'Comparatifs Directs'
    },
    footer: {
      about: 'Méthodologie',
      privacy: 'Confidentialité',
      disclosure: 'Transparence Affiliation',
      syncedPrefix: 'Tarifs synchronisés :',
      rights: 'Tous droits réservés.'
    }
  }
};

export function localePath(locale: Locale, subpath: string = ''): string {
  const clean = subpath.replace(/^\/+/, '');
  if (locale === 'en') {
    return clean ? `/${clean}` : '/';
  }
  return clean ? `/${locale}/${clean}` : `/${locale}/`;
}
