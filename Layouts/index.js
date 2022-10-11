import React from 'react';
import Head from 'next/head';
const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title ? `${title} - NextJs` : 'NextJs Form'}</title>
        <link rel="icon" type="image/ico" sizes="32x32" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
      </Head>
      {children}
    </>
  );
};
export default Layout;
