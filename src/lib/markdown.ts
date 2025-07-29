import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PluginData {
  name: string;
  slug: string;
  icon?: string;
  description?: string;
}

export interface MarkdownContent {
  content: string;
  data: {
    title?: string;
    description?: string;
    lastUpdated?: string;
    [key: string]: any;
  };
}

export function getPlugins(): PluginData[] {
  const mdfileDir = path.join(process.cwd(), 'mdfile');
  
  if (!fs.existsSync(mdfileDir)) {
    return [];
  }
  
  const pluginDirs = fs.readdirSync(mdfileDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  return pluginDirs.map(pluginName => ({
    name: pluginName,
    slug: pluginName.toLowerCase(),
    icon: `/icons/${pluginName.toLowerCase()}.png`,
    description: `Privacy policy for ${pluginName}`
  }));
}

export function getMarkdownContent(pluginSlug: string, locale: 'zh' | 'en'): MarkdownContent | null {
  const plugins = getPlugins();
  const plugin = plugins.find(p => p.slug === pluginSlug.toLowerCase());
  
  if (!plugin) {
    return null;
  }
  
  const pluginDir = path.join(process.cwd(), 'mdfile', plugin.name);
  
  if (!fs.existsSync(pluginDir)) {
    return null;
  }
  
  const fileName = locale === 'zh' ? '隐私权政策.md' : 'Privacy-Policy.md';
  const filePath = path.join(pluginDir, fileName);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    content,
    data: {
      title: data.title,
      description: data.description,
      lastUpdated: data.lastUpdated,
      ...data
    }
  };
}

export function getPluginBySlug(slug: string): PluginData | null {
  const plugins = getPlugins();
  return plugins.find(plugin => plugin.slug === slug.toLowerCase()) || null;
}

export function generateTableOfContents(content: string): Array<{ id: string; title: string; level: number }> {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const toc = [];
  let match;
  
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const title = match[2].trim();
    const id = title
      .toLowerCase()
      .replace(/[^a-z0-9\u4e00-\u9fff\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    
    toc.push({ id, title, level });
  }
  
  return toc;
}