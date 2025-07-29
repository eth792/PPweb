# Chrome 插件隐私政策展示网站项目

## 项目概述

需要新建一个项目，这个项目是用来展示chrome插件的隐私政策的网站，相关隐私政策将会通过markdown文件提供，按照 `mdfile/插件名称/隐私权政策｜Privacy-Policy` 两种中英文文件格式放入markdown文件，所以生成的站点需要支持中英文切换。

## 技术栈选择

### 推荐技术栈
- **前端框架**: Next.js 14 (App Router)
- **样式**: TailwindCSS + Shadcn/ui
- **Markdown 处理**: next-mdx-remote 或 @next/mdx
- **国际化**: next-intl
- **部署**: Vercel 或 Netlify

### 替代方案
- **轻量级**: Astro + TailwindCSS
- **Vue 生态**: Nuxt.js + TailwindCSS

## 文件结构规划

```
PPweb/
├── mdfile/                          # Markdown 文件存放目录
│   ├── Authenticator/              # 插件名称目录
│   │   ├── 隐私权政策.md          # 中文隐私政策
│   │   └── Privacy-Policy.md       # 英文隐私政策
│   ├── [其他插件名称]/
│   │   ├── 隐私权政策.md
│   │   └── Privacy-Policy.md
│   └── ...
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── [locale]/              # 国际化路由
│   │   │   ├── page.tsx           # 首页
│   │   │   ├── [plugin]/          # 动态插件路由
│   │   │   │   └── page.tsx       # 插件详情页
│   │   │   └── layout.tsx
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components/                 # 公共组件
│   │   ├── ui/                    # Shadcn/ui 组件
│   │   ├── LanguageSwitch.tsx     # 语言切换组件
│   │   ├── PluginCard.tsx         # 插件卡片组件
│   │   ├── MarkdownViewer.tsx     # Markdown 渲染组件
│   │   └── Navigation.tsx         # 导航组件
│   ├── lib/                       # 工具函数
│   │   ├── markdown.ts            # Markdown 处理
│   │   ├── plugins.ts             # 插件数据处理
│   │   └── utils.ts
│   └── i18n/                      # 国际化配置
│       ├── locales/
│       │   ├── zh.json            # 中文翻译
│       │   └── en.json            # 英文翻译
│       └── config.ts
├── public/                        # 静态资源
│   ├── icons/                     # 插件图标
│   └── images/
├── package.json
├── next.config.js
├── tailwind.config.js
└── README.md
```

## 功能需求

### 核心功能
1. **多语言支持**
   - 中英文切换
   - URL 路由本地化 (`/zh/plugin-name` 和 `/en/plugin-name`)
   - 语言切换保持当前页面状态

2. **插件展示**
   - 插件列表页面，展示所有可用插件
   - 每个插件显示名称、图标、简短描述
   - 支持搜索和筛选功能

3. **隐私政策页面**
   - 动态路由支持多个插件
   - Markdown 文件自动渲染
   - 响应式设计，支持移动端
   - 打印友好的样式

4. **导航功能**
   - 面包屑导航
   - 侧边栏目录（TOC）
   - 页面内锚点跳转

### 附加功能
1. **SEO 优化**
   - 动态生成 meta 标签
   - 结构化数据标记
   - 多语言 sitemap

2. **用户体验**
   - 深色/浅色主题切换
   - 代码高亮
   - 搜索功能（基于内容）
   - 页面加载动画

## 界面设计要求

### 设计风格
- **现代简洁**: 采用现代 UI 设计语言
- **专业正式**: 适合法律文档展示的正式风格
- **响应式**: 完美支持桌面、平板、手机端
- **无障碍**: 符合 WCAG 2.1 AA 标准

### 主要页面布局

#### 首页
- Hero 区域：项目介绍和语言切换
- 插件网格展示
- 搜索栏
- 页脚信息

#### 插件详情页
- 页面头部：插件名称、图标、语言切换
- 侧边栏：目录导航
- 主内容区：Markdown 渲染的隐私政策
- 页脚：相关链接

### UI 组件要求
- 使用 Shadcn/ui 组件库
- 统一的颜色方案和排版
- 平滑的动画过渡
- 加载状态指示器

## 技术实现细节

### 1. Markdown 文件处理
```typescript
// 自动扫描 mdfile 目录结构
// 生成插件列表和路由映射
// 支持 frontmatter 元数据
```

### 2. 国际化实现
```typescript
// 使用 next-intl 或类似库
// 支持 URL 路由本地化
// 动态语言切换不刷新页面
```

### 3. 动态路由
```typescript
// [locale]/[plugin]/page.tsx
// 根据插件名称和语言加载对应的 markdown 文件
// 404 处理和错误边界
```

### 4. SEO 优化
```typescript
// generateMetadata 函数
// 多语言 sitemap
// 结构化数据
```

## 开发优先级

### Phase 1 (MVP)
1. 基本项目架构搭建
2. Markdown 文件读取和渲染
3. 中英文语言切换
4. 基础 UI 组件

### Phase 2 (核心功能)
1. 插件列表页面
2. 动态路由实现
3. 响应式设计优化
4. SEO 基础设置

### Phase 3 (增强功能)
1. 搜索功能
2. 主题切换
3. 高级 SEO 优化
4. 性能优化

## 部署和维护

### 部署方案
- **推荐**: Vercel (与 Next.js 完美集成)
- **备选**: Netlify, GitHub Pages

### 内容更新流程
1. 在 `mdfile/` 目录添加新的插件隐私政策
2. 提交到 Git 仓库
3. 自动触发部署流程
4. 网站自动更新内容

## 开发注意事项

1. **文件命名规范**: 严格按照 `隐私权政策.md` 和 `Privacy-Policy.md` 命名
2. **目录结构**: 插件名称目录应与实际插件名称保持一致
3. **Markdown 格式**: 确保 Markdown 文件格式标准化
4. **性能考虑**: 大量插件时考虑分页或虚拟滚动
5. **缓存策略**: 合理使用 Next.js 缓存机制

## 成功指标

1. **性能**: Lighthouse 得分 > 90
2. **SEO**: 搜索引擎收录完整
3. **用户体验**: 加载时间 < 2秒
4. **可维护性**: 新增插件隐私政策操作简单
5. **无障碍**: 通过基本无障碍测试