import Head from 'next/head'
import Image from 'next/image'

// page style
import styles from '@/pages/styles/Home.module.css'

// routing
import Layout from '../components/layout/Layout'

// index page, entry point
export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="sudo-adduser-jordan" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
        {/* favicon image */}
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      {/* single page layout */}
      <Layout />
    </>
  )
}
