import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale } from "./i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segment = pathname.split("/")[1];

  if (segment && isLocale(segment)) {
    return NextResponse.next();
  }

  // Always default to English; avoid automatic language negotiation.
  const destination = request.nextUrl.clone();
  destination.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(destination);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
