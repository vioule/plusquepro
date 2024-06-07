import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { JWT_SECRET } from "@/lib/constant";
import * as jose from "jose";

const PUBLIC_PATHS = ["/login"];
const PRIVATE_PATHS = ["/movie", "/"];

export interface JWTPayload {
  username: string;
  email: string;
  iat: Date;
  exp: Date;
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (PUBLIC_PATHS.includes(pathname)) {
    const jwt = request.cookies.get("jwt");
    if (jwt && jwt.value) {
      try {
        await jose.jwtVerify<JWTPayload>(jwt.value, JWT_SECRET);
        const redirectUrl = new URL("/", request.url);
        return NextResponse.redirect(redirectUrl);
      } catch (error) {
        console.log(error);
      }
    }
  } else if (PRIVATE_PATHS.includes(pathname)) {
    const jwt = request.cookies.get("jwt");
    if (jwt && jwt.value) {
      try {
        await jose.jwtVerify<JWTPayload>(jwt.value, JWT_SECRET);
      } catch (error) {
        const redirectUrl = new URL("/login", request.url);
        return NextResponse.redirect(redirectUrl);
      }
    } else {
      const redirectUrl = new URL("/login", request.url);
      return NextResponse.redirect(redirectUrl);
    }
  }
}

export const config = {
  matcher: ["/movie", "/", "/login"],
};
