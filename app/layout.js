import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Marius Aasgaard",
  description:
    "Portfolio for Marius Aasgaard – building embedded and sensor-driven systems.",

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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
