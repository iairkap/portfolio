import React from "react";
import { LanguageProvider } from "@/app/providers/LanguageProvider";

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
