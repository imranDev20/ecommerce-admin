import type { AppProps } from "next/app";
import RootLayout from "./components/root-layout";
import { CssBaseline } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}
