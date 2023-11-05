import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { CONFIG } from '../../../src/config';

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: CONFIG.NEXT_AUTH.GOOGLE.clientId,
			clientSecret: CONFIG.NEXT_AUTH.GOOGLE.clientSecret,
		}),
	],
};

export default NextAuth(authOptions);
