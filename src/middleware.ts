import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    // Match only internationalized pathnames
    // Match only internationalized pathnames, excluding /admin
    matcher: ['/((?!api|_next|admin|.*\\..*).*)', '/(tr|en)/:path*']
};
