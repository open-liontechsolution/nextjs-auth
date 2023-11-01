import { Inter } from "next/font/google";
import "./globals.css";
import Header from "src/components/Header/Header";
import SessionProvider from "./SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auth App",
  description: "Authentication app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
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
