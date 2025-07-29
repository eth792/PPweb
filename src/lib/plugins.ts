import { getPlugins, getMarkdownContent, getPluginBySlug, generateTableOfContents, type PluginData, type MarkdownContent } from './markdown';

export { getPlugins, getMarkdownContent, getPluginBySlug, generateTableOfContents };
export type { PluginData, MarkdownContent };

export function searchPlugins(query: string): PluginData[] {
  const plugins = getPlugins();
  
  if (!query.trim()) {
    return plugins;
  }
  
  const searchTerm = query.toLowerCase();
  
  return plugins.filter(plugin => 
    plugin.name.toLowerCase().includes(searchTerm) ||
    plugin.description?.toLowerCase().includes(searchTerm)
  );
}