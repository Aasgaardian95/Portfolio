import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Marius Aasgaard | Portfolio",
  description:
    "Portfolio for Marius Aasgaard – building embedded and sensor-driven systems.",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Marius Aasgaard",
    description:
      "Portfolio for Marius Aasgaard – building embedded and sensor-driven systems.",
    url: "https://www.mariusaasgaard.no",
    siteName: "Marius Aasgaard",
    images: [
      {
        url: "https://www.mariusaasgaard.no/images/preview1.png",
        width: 1200,
        height: 630,
        alt: "Portfolio til Marius Aasgaard",
      },
    ],
    locale: "nb_NO",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Marius Aasgaard | Portfolio",
    description:
      "Portfolio for Marius Aasgaard – building embedded and sensor-driven systems.",
    images: ["https://www.mariusaasgaard.no/images/preview1.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-950">
        <div className="w-full bg-[#030712]">
          <div className="mx-auto flex h-11 max-w-5xl items-center gap-3 px-6">
            <div className="flex h-5 w-5 items-center justify-center rounded-md bg-red-700 text-[10px] font-bold text-white">
              A
            </div>
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-red-400/75">
              Aasgaard IT
            </span>
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-red-800/70 via-red-500/60 to-red-800/70" />
        </div>

        {children}
      </body>
    </html>
  );
}
