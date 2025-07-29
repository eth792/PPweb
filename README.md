# PPweb - Chrome Extension Privacy Policy Website

A Next.js 14 website for displaying Chrome extension privacy policies with multi-language support.

## Features

- 🌐 Multi-language support (Chinese & English)
- 📱 Responsive design
- 🔍 Search functionality
- 📄 Markdown-based content management
- 🚀 Static site generation
- ♿ Accessibility-focused
- 🎨 Modern UI with Tailwind CSS and Shadcn/ui

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
PPweb/
├── mdfile/                          # Markdown files for privacy policies
│   ├── Authenticator/              # Plugin name directory
│   │   ├── 隐私权政策.md          # Chinese privacy policy
│   │   └── Privacy-Policy.md       # English privacy policy
│   └── [other-plugins]/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── [locale]/              # Internationalized routes
│   │   │   ├── page.tsx           # Homepage
│   │   │   └── [plugin]/          # Dynamic plugin routes
│   │   │       └── page.tsx       # Plugin detail page
│   │   ├── sitemap.ts             # SEO sitemap
│   │   └── robots.ts              # SEO robots.txt
│   ├── components/                 # React components
│   │   ├── ui/                    # Shadcn/ui components
│   │   ├── LanguageSwitch.tsx     # Language toggle
│   │   ├── PluginCard.tsx         # Plugin display card
│   │   ├── MarkdownViewer.tsx     # Markdown renderer
│   │   └── Navigation.tsx         # Site navigation
│   ├── lib/                       # Utility functions
│   │   ├── markdown.ts            # Markdown processing
│   │   ├── plugins.ts             # Plugin data handling
│   │   └── utils.ts               # General utilities
│   └── i18n/                      # Internationalization
│       ├── locales/               # Translation files
│       └── config.ts              # i18n configuration
├── public/                        # Static assets
└── middleware.ts                  # Next.js middleware for i18n
```

## Adding New Plugins

1. Create a new directory in `mdfile/` with your plugin name
2. Add two markdown files:
   - `隐私权政策.md` (Chinese version)
   - `Privacy-Policy.md` (English version)
3. The plugin will automatically appear on the homepage

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm run start
```

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + Shadcn/ui
- **Internationalization**: next-intl
- **Markdown**: next-mdx-remote
- **TypeScript**: Full type safety
- **Deployment**: Vercel-ready

## License

This project is licensed under the MIT License.