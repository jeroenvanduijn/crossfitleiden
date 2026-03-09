import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Always use locale prefix (e.g., /nl, /en)
  localePrefix: 'always',

  // Disable automatic locale detection so all visitors land on /nl by default
  // Visitors can still manually switch to /en
  localeDetection: false
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(nl|en)/:path*']
};
