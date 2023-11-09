import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import Credentials from 'next-auth/providers/credentials';
import { auth } from '../../../../lib/firebase';

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
			clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
		}),
		Credentials({
			id: 'login',
			credentials: {},

			async authorize({ email, password }) {
				try {
					const res = await signInWithEmailAndPassword(
						auth,
						email,
						password,
					);

					return res.user;
				} catch (error) {
					throw new Error("Credentials doesn't match");
				}
			},
		}),
		Credentials({
			id: 'signup',
			credentials: {},
			async authorize({ email, password }) {
				try {
					const res = await createUserWithEmailAndPassword(
						auth,
						email,
						password,
					);

					return res.user;
				} catch (error) {
					throw new Error('Email already in use');
				}
			},
		}),
	],
};

export default NextAuth(authOptions);
