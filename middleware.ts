// import { NextRequest, NextResponse } from "next/server";

// import { withAuth } from "next-auth/middleware";

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - images (images)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     "/((?!api|images|_next/static|_next/image|favicon.ico).*)",
//     "/"
//   ]
// };

// export default withAuth(
//   function middleware(req) {
//     return NextResponse.next();
//   },
//   {
//     pages: {
//       signIn: "/login",
//       newUser: "/register"
//     },
//     callbacks: {
//       authorized({ token, req }: { token: any; req: NextRequest }) {
//         const url = req.nextUrl;

//         const path = url.pathname;

//         return !(path.includes("account") && !token?.access_token);
//       }
//     }
//   }
// );
