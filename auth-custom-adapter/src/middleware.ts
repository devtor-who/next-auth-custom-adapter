import { auth } from '@/config/auth/auth';
import { NextResponse } from 'next/server';

export default auth((request) => {
  console.log(request.auth);
  return NextResponse.next();
});

export const config = {
  // matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
