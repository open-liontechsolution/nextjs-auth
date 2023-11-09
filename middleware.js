import { NextResponse } from 'next/server';
import { ROUTES } from './constants';
import { getToken } from 'next-auth/jwt';

const AUTH_ROUTES = [
	ROUTES.LOGIN,
	ROUTES.LOGIN_EMAIL,
	ROUTES.REGISTER,
	ROUTES.REGISTER_EMAIL,
];
// This function can be marked `async` if using `await` inside
export async function middleware(req) {
	// if(request)
	const session = await getToken({
		req: req,
		secret: process.env.NEXTAUTH_SECRET,
	});

	if (session && AUTH_ROUTES.includes(req.nextUrl.pathname)) {
		return NextResponse.redirect(new URL(ROUTES.DASHBOARD, req.url));
	}
}

// See "Matching Paths" below to learn more
// export const config = {
// 	matcher: '/login',
// };
