'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
// Remove the import since we'll pass the TOC data as props

interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  toc: TocItem[];
}

export function TableOfContents({ toc }: TableOfContentsProps) {
  const t = useTranslations('plugin');
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    toc.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [toc]);

  if (toc.length === 0) return null;

  return (
    <nav className="sticky top-6">
      <h3 className="font-semibold text-sm mb-4">{t('tableOfContents')}</h3>
      <ul className="space-y-2 text-sm">
        {toc.map(({ id, title, level }) => (
          <li key={id} style={{ paddingLeft: `${(level - 1) * 12}px` }}>
            <a
              href={`#${id}`}
              className={`block py-1 transition-colors hover:text-foreground ${
                activeId === id
                  ? 'text-foreground font-medium'
                  : 'text-muted-foreground'
              }`}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}