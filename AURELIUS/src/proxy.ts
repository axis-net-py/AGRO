import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl;

    // Allow public routes
    if (
      pathname.startsWith("/login") ||
      pathname.startsWith("/api/auth") ||
      pathname.startsWith("/portal") ||
      pathname.includes(".") // static files
    ) {
      return NextResponse.next();
    }

    // For API routes, allow through (auth is handled per-route)
    if (pathname.startsWith("/api/")) {
      return NextResponse.next();
    }

    // For dashboard routes, check for session token
    // NextAuth v4 with JWT strategy stores token in session cookie
    const sessionToken =
      request.cookies.get("next-auth.session-token")?.value ||
      request.cookies.get("__Secure-next-auth.session-token")?.value;

    if (!sessionToken) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl.toString());
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error caught:", error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
