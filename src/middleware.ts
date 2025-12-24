import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { SITE_CONFIG } from './config/site';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // EXEMPTIONS: Allow access to admin, api, static files and maintenance page itself
    const isMaintenancePage = pathname.includes('/maintenance');
    const isAdmin = pathname.startsWith('/admin') || pathname.includes('/login');
    const isApi = pathname.startsWith('/api');
    const isStatic = pathname.match(/\.(.*)$/);
    const isNext = pathname.startsWith('/_next');

    if (SITE_CONFIG.maintenanceMode && !isMaintenancePage && !isAdmin && !isApi && !isStatic && !isNext) {
        // Try to get locale from pathname or default to 'tr'
        const segments = pathname.split('/');
        const localeCandidate = segments[1];
        const targetLocale = ['tr', 'en'].includes(localeCandidate) ? localeCandidate : 'tr';

        const url = request.nextUrl.clone();
        url.pathname = `/${targetLocale}/maintenance`;
        return NextResponse.redirect(url);
    }

    return intlMiddleware(request);
}

export const config = {
    // Match only internationalized pathnames
    matcher: ['/((?!api|_next|admin|.*\\..*).*)', '/(tr|en)/:path*']
};
