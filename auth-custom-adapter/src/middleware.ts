import { auth } from '@/config/auth/auth';

export default auth((request) => {
  console.log('middleware', request.auth);
  return;
});

export const config = {
  // matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
