import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { LanguageSwitch } from './LanguageSwitch';

interface NavigationProps {
  locale: string;
}

export function Navigation({ locale }: NavigationProps) {
  const t = useTranslations('nav');

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href={`/${locale}`} className="font-bold text-xl">
          PPweb
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href={`/${locale}`}
            className="text-sm font-medium transition-colors hover:text-foreground/80"
          >
            {t('home')}
          </Link>
          <Link
            href={`/${locale}/plugins`}
            className="text-sm font-medium transition-colors hover:text-foreground/80"
          >
            {t('plugins')}
          </Link>
        </nav>

        <LanguageSwitch />
      </div>
    </header>
  );
}