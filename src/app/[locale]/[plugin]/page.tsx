import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { getMarkdownContent, getPluginBySlug, getPlugins, generateTableOfContents } from '@/lib/plugins';
import { MarkdownViewer } from '@/components/MarkdownViewer';
import { TableOfContents } from '@/components/TableOfContents';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText } from 'lucide-react';
import type { Metadata } from 'next';

interface PluginPageProps {
  params: { locale: 'zh' | 'en'; plugin: string };
}

export async function generateStaticParams() {
  const plugins = getPlugins();
  const locales = ['zh', 'en'] as const;
  
  const params = [];
  for (const plugin of plugins) {
    for (const locale of locales) {
      params.push({
        locale,
        plugin: plugin.slug,
      });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: PluginPageProps): Promise<Metadata> {
  const plugin = getPluginBySlug(params.plugin);
  const content = getMarkdownContent(params.plugin, params.locale);
  
  if (!plugin || !content) {
    return {
      title: 'Plugin Not Found',
    };
  }
  
  return {
    title: `${plugin.name} - Privacy Policy`,
    description: content.data.description || `Privacy policy for ${plugin.name}`,
  };
}

export default function PluginPage({ params }: PluginPageProps) {
  setRequestLocale(params.locale);
  
  const plugin = getPluginBySlug(params.plugin);
  const content = getMarkdownContent(params.plugin, params.locale);
  
  if (!plugin || !content) {
    notFound();
  }

  const toc = generateTableOfContents(content.content);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href={`/${params.locale}`}>
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {params.locale === 'zh' ? '返回首页' : 'Back to Home'}
          </Button>
        </Link>
        
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <FileText className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{plugin.name}</h1>
            <p className="text-muted-foreground">
              {params.locale === 'zh' ? '隐私权政策' : 'Privacy Policy'}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <article className="prose prose-gray dark:prose-invert max-w-none">
            <MarkdownViewer content={content.content} />
          </article>
        </div>
        
        <div className="lg:col-span-1">
          <TableOfContents toc={toc} />
        </div>
      </div>
    </div>
  );
}