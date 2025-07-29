import createMiddleware from 'next-intl/middleware';
import { locales } from './src/i18n/config';

export default createMiddleware({
  locales,
  defaultLocale: 'zh',
  localePrefix: 'always'
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};