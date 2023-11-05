import { Inter } from 'next/font/google';
import './globals.css';
import SessionProvider from './SessionProvider';
import { getServerSession } from 'next-auth';
import Header from '../components/Header/Header';
import { authOptions } from '../../pages/api/auth/[...nextauth]';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Auth App',
	description: 'Authentication app',
};

export default async function RootLayout({ children }) {
	let session;
	try {
		session = await getServerSession(authOptions);
	} catch (error) {
		console.error(error);
	}
	return (
		<html lang="en">
			<body className={inter.className}>
				<SessionProvider session={session}>
					<Header />
				</SessionProvider>
				{children}
			</body>
		</html>
	);
}
