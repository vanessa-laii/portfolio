import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://localhost:3000"),

	title: "Vanessa Lai",
	authors: {
		name: "Vanessa Lai",
	},

	description:
  "Software Engineering Student at McMaster University. I'm passionate about designing for accessibility!",
	openGraph: {
		title: "Personal Website",
		description:
			"Software Engineering Student at McMaster University. I'm passionate about designing for accessibility!",
		url: "https://localhost:3000",
		siteName: "Vanessa Lai",
		images: "/profilePhoto.jpg",
		type: "website",
	},
	keywords: ["Vanessa Lai"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
