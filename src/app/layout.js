import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import ReduxProvider from "./ReduxProvider";
import { ErrorBoundary } from "./components";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap", // Performance optimization
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"], // Only bold for hero/headings - reduces font payload
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Iair Kaplun | Full Stack Developer & Audiovisual Designer",
  description: "Portfolio of Iair Kaplun, a Full Stack Developer and Audiovisual Designer specializing in React, Next.js, and immersive web experiences.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Portfolio", "Web Design", "Audiovisual", "Frontend", "Backend"],
  authors: [{ name: "Iair Kaplun" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Iair Kaplun | Full Stack Developer",
    description: "Immersive portfolio showcasing web development and audiovisual projects.",
    url: "https://iairkaplun.com.ar",
    siteName: "Iair Kaplun Portfolio",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iair Kaplun | Full Stack Developer",
    description: "Check out my portfolio featuring web dev and audiovisual work.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#050a0e",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* CRITICAL: Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Recursos de imágenes */}
        <link rel="dns-prefetch" href="https://firebasestorage.googleapis.com" />
      </head>
      <body className={`${inter.className} ${montserrat.variable}`}>
        <ReduxProvider>
          <ErrorBoundary>{children}</ErrorBoundary>
        </ReduxProvider>
      </body>
    </html>
  );
}
//
