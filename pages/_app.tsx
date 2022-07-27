import * as React from 'react'
import { SessionProvider } from 'next-auth/react'
// import PropTypes from 'prop-types';
// import Head from 'next/head';
// import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
// import '../styles/global.css';
// import { CacheProvider } from '@emotion/react';
// import createEmotionCache from '../src/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
/* const clientSideEmotionCache = createEmotionCache(); */

export default function MyApp(props) {
  const { Component, pageProps } = props

  return (
    <SessionProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

// MyApp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   emotionCache: PropTypes.object,
//   pageProps: PropTypes.object.isRequired,
// };
