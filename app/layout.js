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
      <body className="min-h-full flex flex-col">
        <div className="w-full bg-black">
          <div className="mx-auto flex h-16 max-w-5xl items-center gap-3 px-6">
            <div className="h-8 w-8 rounded-md bg-red-600 flex items-center justify-center text-xs font-bold text-white">
              A
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-red-500/90">
              Aasgaard IT
            </span>
          </div>
          <div className="h-[6px] w-full bg-gradient-to-r from-red-600 via-red-500 to-red-600" />
        </div>

        {children}
      </body>
    </html>
  );
}
