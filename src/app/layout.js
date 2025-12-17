import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import ReduxProvider from "./ReduxProvider";
import { ErrorBoundary } from "./components";

const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "500", "700", "900"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Iair Kaplun",
  description: "Iair Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.variable}`}>
        <ReduxProvider>
          <ErrorBoundary>{children}</ErrorBoundary>
        </ReduxProvider>
      </body>
    </html>
  );
}
//
