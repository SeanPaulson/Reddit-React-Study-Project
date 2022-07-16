import Head from 'next/head';
import Mobile from "../src/components/Mobile/Mobile"
import Desktop from "../src/components/Desktop/Desktop"
import { useEffect, useState } from "react";
import { isMobileTablet } from "../src/utils";



export default function App() {
  const [desktop, setDesktop] = useState(false)

  useEffect(() => {
      setDesktop(isMobileTablet());
  },[])

  return (
    <>
      <Head>
      <title>Reddit - Dive into anything</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {desktop ? <Mobile /> : <Desktop />}
    </>
  );
}
