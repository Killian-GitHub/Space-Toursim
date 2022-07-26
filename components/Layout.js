import Head from 'next/head'

import Header from './Header'

export default function Layout({ title, children }) {
  // Page title
  const pageTitle = `Space Tourism | ${title}`

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Space Tourism app | See our planet as you’ve never seen it before."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <>{children}</>
    </>
  )
}
