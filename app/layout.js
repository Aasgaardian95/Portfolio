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
  title: "Marius Aasgaard | Portfolio",
  description:
    "Portfolio og CV for Marius Aasgaard – dataingeniørstudent med fokus på embedded systems, backend og systemutvikling.",

  openGraph: {
    title: "Marius Aasgaard | Portfolio",
    description:
      "Portfolio og CV for Marius Aasgaard – dataingeniørstudent med fokus på embedded systems, backend og systemutvikling.",
    url: "https://www.mariusaasgaard.no",
    siteName: "Marius Aasgaard Portfolio",
    images: [
      {
        url: "/images/preview.jpg",
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
      "Portfolio og CV for Marius Aasgaard – dataingeniørstudent med fokus på embedded systems, backend og systemutvikling.",
    images: ["/images/preview.jpg"],
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
