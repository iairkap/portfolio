import "./globals.css";
import { Inter } from "next/font/google";
import ReduxProvider from "./ReduxProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Iair Kaplun",
  description: "Iair Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
//
