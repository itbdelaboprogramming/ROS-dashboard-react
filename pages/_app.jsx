'use client'

import Providers from "@/redux/provider";
import { useEffect } from "react";



export default function MyApp({ Component, pageProps }) {

  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}
