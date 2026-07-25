import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://mustafaburakbasar.com"),

  title: {
    default: "Mustafa Burak Başar | Electrical & Electronics Engineer",
    template: "%s | Mustafa Burak Başar",
  },

  description:
    "Electrical & Electronics Engineering student specializing in Artificial Intelligence, Embedded Systems, Autonomous Systems, Computer Vision, Renewable Energy and Machine Learning.",

  keywords: [
    "Mustafa Burak Başar",
    "Electrical Electronics Engineer",
    "Embedded Systems",
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Autonomous Systems",
    "STM32",
    "Python",
    "ROS2",
    "Jetson Nano",
    "Pixhawk",
    "Portfolio",
  ],

  authors: [
    {
      name: "Mustafa Burak Başar",
      url: "https://mustafaburakbasar.com",
    },
  ],

  creator: "Mustafa Burak Başar",

  publisher: "Mustafa Burak Başar",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mustafaburakbasar.com",
    siteName: "Mustafa Burak Başar Portfolio",

    title: "Mustafa Burak Başar",

    description:
      "Electrical & Electronics Engineer specializing in Artificial Intelligence, Embedded Systems and Autonomous Systems.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mustafa Burak Başar Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Mustafa Burak Başar",

    description:
      "Electrical & Electronics Engineer | AI | Embedded Systems | Autonomous Systems",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  themeColor: "#030712",

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen overflow-x-hidden bg-[#030712] text-white antialiased">
        {children}
      </body>
    </html>
  );
}