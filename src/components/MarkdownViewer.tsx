'use client';

import { marked } from 'marked';
import { useEffect, useState } from 'react';

interface MarkdownViewerProps {
  content: string;
}

export function MarkdownViewer({ content }: MarkdownViewerProps) {
  const [htmlContent, setHtmlContent] = useState<string>('');

  useEffect(() => {
    const convertMarkdown = async () => {
      // 配置 marked 选项
      marked.setOptions({
        gfm: true, // GitHub Flavored Markdown
        breaks: true, // 换行转换为 <br>
        headerIds: true, // 为标题生成 ID
        mangle: false, // 不混淆邮箱地址
      });

      // 自定义渲染器
      const renderer = new marked.Renderer();
      
      // 自定义标题渲染
      renderer.heading = (text, level) => {
        const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
        const classes = {
          1: 'text-3xl font-bold mt-12 mb-6',
          2: 'text-2xl font-bold mt-10 mb-5',
          3: 'text-xl font-semibold mt-8 mb-4',
          4: 'text-lg font-semibold mt-6 mb-3',
          5: 'text-base font-semibold mt-4 mb-2',
          6: 'text-sm font-semibold mt-2 mb-2'
        };
        return `<h${level} id="${escapedText}" class="${classes[level as keyof typeof classes]}">${text}</h${level}>`;
      };

      // 自定义段落渲染
      renderer.paragraph = (text) => {
        return `<p class="mb-4 leading-relaxed">${text}</p>`;
      };

      // 自定义列表渲染
      renderer.list = (body, ordered) => {
        const type = ordered ? 'ol' : 'ul';
        const listClass = ordered ? 'list-decimal' : 'list-disc';
        return `<${type} class="${listClass} ml-6 my-4 space-y-2">${body}</${type}>`;
      };

      renderer.listitem = (text) => {
        return `<li class="pl-2">${text}</li>`;
      };

      // 自定义链接渲染
      renderer.link = (href, title, text) => {
        return `<a href="${href}" class="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer"${title ? ` title="${title}"` : ''}>${text}</a>`;
      };

      // 自定义代码渲染
      renderer.code = (code, language) => {
        return `<pre class="bg-gray-100 p-4 rounded-lg my-4 overflow-x-auto"><code>${code}</code></pre>`;
      };

      renderer.codespan = (code) => {
        return `<code class="bg-gray-100 px-1 py-0.5 rounded text-sm">${code}</code>`;
      };

      // 自定义水平线渲染
      renderer.hr = () => {
        return '<hr class="my-8 border-gray-300" />';
      };

      // 自定义强调渲染
      renderer.strong = (text) => {
        return `<strong class="font-bold">${text}</strong>`;
      };

      renderer.em = (text) => {
        return `<em class="italic">${text}</em>`;
      };

      marked.use({ renderer });

      try {
        const html = await marked.parse(content);
        setHtmlContent(html);
      } catch (error) {
        console.error('Markdown parsing error:', error);
        setHtmlContent(`<p class="text-red-500">Error parsing markdown content</p>`);
      }
    };

    if (content) {
      convertMarkdown();
    }
  }, [content]);

  if (!htmlContent) {
    return <div className="animate-pulse bg-gray-200 h-96 rounded-lg" />;
  }

  return (
    <div 
      className="prose max-w-none"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}