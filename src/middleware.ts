import { auth } from "@/auth"

export default auth((req) => {

  console.log("Ran middleware on " + req.nextUrl.pathname);

});

export const config = {
  matcher: '/dashboard/:path*'
}