'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { PluginData, searchPlugins } from '@/lib/plugins';
import { PluginCard } from '@/components/PluginCard';
import { SearchBox } from '@/components/SearchBox';

interface PluginGridProps {
  plugins: PluginData[];
  locale: string;
}

export function PluginGrid({ plugins, locale }: PluginGridProps) {
  const t = useTranslations();
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPlugins = useMemo(() => {
    if (!searchQuery.trim()) return plugins;
    return plugins.filter(plugin => 
      plugin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plugin.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [plugins, searchQuery]);

  return (
    <>
      <div className="flex justify-center mb-8">
        <SearchBox onSearch={setSearchQuery} />
      </div>
      
      <div className="text-center mb-6">
        <p className="text-sm text-muted-foreground">
          {t('home.pluginCount', { count: filteredPlugins.length })}
        </p>
      </div>

      {filteredPlugins.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            {searchQuery 
              ? (locale === 'zh' ? '未找到匹配的插件' : 'No plugins found matching your search')
              : (locale === 'zh' ? '暂无插件' : 'No plugins available')
            }
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlugins.map((plugin) => (
            <PluginCard
              key={plugin.slug}
              plugin={plugin}
              locale={locale}
            />
          ))}
        </div>
      )}
    </>
  );
}