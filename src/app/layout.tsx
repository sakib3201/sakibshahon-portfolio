import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const viewport: Viewport = {
  themeColor: "#131313",
};

export const metadata: Metadata = {
  title: "Sakib Ahammed Shahon",
  description:
    "Agentic engineer specializing in AI-first features and agentic cost optimization",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${ibmPlexMono.variable} ${playfairDisplay.variable}`}
    >
      <body className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
