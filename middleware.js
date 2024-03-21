import { NextResponse } from "next/server";
import { ACCESS_KEY } from "./app/utils/constant";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const isLoggedIn = request.cookies.get(ACCESS_KEY);
  const url = request.nextUrl.pathname;
  if (isLoggedIn && url === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (!isLoggedIn && url === "/") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/login",
// };
