import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./../components/Navbar";
import { CommonContextProvider } from '../context/CommonContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CommonContextProvider>
        <Navbar></Navbar>
        <Component {...pageProps} />
      </CommonContextProvider>
    </>
  );
}
