
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Define admin paths
  const adminPaths = /^\/admin(\/.*)?$/;

  // Allow access to the login page itself
  if (pathname === '/admin/login') {
    return NextResponse.next();
  }

  // Check for an authentication token (this is a simple example)
  // In a real app, you would verify a JWT or session cookie
  const isAuthenticated = request.cookies.get('firebaseAuthToken')?.value;

  // If trying to access an admin path without being authenticated, redirect to login
  if (adminPaths.test(pathname) && !isAuthenticated) {
    const loginUrl = new URL('/admin/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/admin/:path*',
};
