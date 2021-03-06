import Head from 'next/head'
import Nav from '../components/Nav'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        { children }
      </main>
    </div>
  )
}

export default Layout
