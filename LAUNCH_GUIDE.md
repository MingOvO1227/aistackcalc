# 10 美元零代码全自动上线指南（小白傻瓜版）

整个网站已经自动生成完毕，包含：
- **实时 AI 大模型 API 成本计算器**（每天自动抓取 OpenRouter 公开价格，无需人工维护）
- **AI 语音与多语言配音成本计算器**（对接 ElevenLabs 22% 持续分佣）
- **云 GPU 自建 vs API 盈亏平衡计算器**（对接 RunPod 持续分佣）
- **AI 商业 SaaS 自动化预算估算器**（对接 Webflow 50%、Notion 20%、Zapier、ActiveCampaign）
- **5 种语言界面**（英语 / 日语 / 德语 / 西班牙语 / 法语）+ **120+ 个自动生成的 SEO 对比与定价页**

你完全不需要懂代码，按下面 5 步点鼠标即可上线运转。

---

## 第 1 步：花 3–10 美元买 1 个 `.com` 域名（支持 PayPal）

1. 打开 **[Porkbun.com](https://porkbun.com)**（续费透明）或 **[Spaceship.com](https://www.spaceship.com)**（首年常低至 3–5 美元）。
2. 搜索并注册一个干净好记的 `.com` 域名（建议选和 AI 成本/Token 计算相关的短词，如 `tokencostlab.com` / `aicostledger.com` / `aibillcalc.com` 等，以网站实际显示可注册为准）。
3. 结账时直接选 **PayPal** 付款即可。

> 买完域名后，把你买到的**真实域名**告诉我，我帮你一键把 `src/config/site.json` 和 `public/robots.txt` 里的域名替换好！

---

## 第 2 步：把代码传到 GitHub（免费）

1. 注册并登录 [GitHub.com](https://github.com)。
2. 点右上角 `+` → `New repository`，仓库名填 `ai-cost-hub`，设为 **Public**（公开仓库的 GitHub Actions 免费额度几乎无限），点创建。
3. 回到这里告诉我你的 GitHub 仓库地址，或者在电脑上安装 [GitHub Desktop](https://desktop.github.com/) 直接把 `d:\GeminiWorkSpace\ai-cost-hub` 文件夹发布上去即可。

---

## 第 3 步：绑定 Cloudflare Pages 免费上线（0 美元）

1. 注册并登录 [Cloudflare.com](https://dash.cloudflare.com)。
2. 左侧菜单点击 **Workers & Pages** → **Create** → **Pages** → **Connect to Git**。
3. 授权你的 GitHub，选择 `ai-cost-hub` 仓库。
4. 构建设置保持自动识别即可：
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. 点 **Save and Deploy**，等 1 分钟网站就会生成全球可访问的链接！
6. 在 Cloudflare Pages 项目的 **Custom domains** 里绑定你刚买的 `.com` 域名（按提示把域名 DNS 改到 Cloudflare 即可，同时在 Cloudflare 菜单 **Email → Email Routing** 免费开启 `hello@你的域名.com` 自动转发到你的 Gmail）。

---

## 第 4 步：提交搜索引擎（让免费流量进来）

1. **Google Search Console**：登录 [search.google.com/search-console](https://search.google.com/search-console)，添加你的域名，在左侧 `Sitemaps` 提交：
   `sitemap-index.xml`
2. **Bing Webmaster Tools**（冷启动出流量最快）：登录 [bing.com/webmasters](https://www.bing.com/webmasters)，直接一键从 Google 导入即可。
3. **开启每日自动更新**：打开你的 GitHub 仓库 → 顶部 **Actions** 选项卡 → 点绿色按钮启用 Workflow。从此每天凌晨 4 点（UTC）它会自动抓最新大模型价格并自动重新发布网站！

---

## 第 5 步：接入高佣金变现（全自动打款 PayPal）

等你的 `.com` 域名上线且能正常打开后：
1. 用你的域名邮箱（`hello@你的域名.com`）免费注册 **[PartnerStack Marketplace](https://partnerstack.com)**，在收款设置里绑定你的 **PayPal**。
2. 在 PartnerStack 市场里依次搜索并申请以下项目（介绍写：`We operate an interactive AI & SaaS cost calculator hub helping founders estimate monthly API, voice, GPU, and automation expenses.`）：
   - **ElevenLabs**（22% 持续分佣 12 个月）
   - **Webflow**（50% 首年分佣）
   - **Notion**（20% 持续分佣 12 个月）
   - **RunPod**（云 GPU 算力）
   - **Zapier** / **ActiveCampaign** / **Glide**
3. 审核通过拿到专属推广链接后，打开项目里的 **`src/config/affiliates.json`**，把对应的 `url` 替换成你的链接（或者直接把链接发给我，我帮你填好并推送），全站所有语言页面的按钮会自动切换成你的收款链接！
