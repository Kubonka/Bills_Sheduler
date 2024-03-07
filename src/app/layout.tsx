import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
	title: "Bills Sheduler",
	description: "Sheduler",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} h-full flex-col flex gap-0 `}>
				{children}
			</body>
		</html>
	);
}
