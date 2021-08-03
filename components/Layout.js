import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Nav here */}
      <main>
        { children }
      </main>
    </div>
  )
}

export default Layout
