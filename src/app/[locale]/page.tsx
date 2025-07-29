import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { getPlugins } from '@/lib/plugins';
import { PluginGrid } from '@/components/PluginGrid';
import type { Metadata } from 'next';

interface HomePageProps {
  params: { locale: string };
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const isZh = params.locale === 'zh';
  
  return {
    title: isZh ? 'PPweb - Chrome 插件隐私政策' : 'PPweb - Chrome Extension Privacy Policies',
    description: isZh 
      ? '查看我们 Chrome 插件的隐私政策和数据使用说明'
      : 'View privacy policies and data usage information for our Chrome extensions',
  };
}

export default function HomePage({ params }: HomePageProps) {
  setRequestLocale(params.locale);
  
  const t = useTranslations();
  const plugins = getPlugins();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          {t('home.title')}
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          {t('home.subtitle')}
        </p>
      </div>

      <PluginGrid plugins={plugins} locale={params.locale} />
    </div>
  );
}