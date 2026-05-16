import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Intercepta tudo exceto assets, _next e arquivos com extensão
  matcher: ['/((?!_next|_vercel|.*\\..*).*)'],
};
