import Head from 'next/head'
import Image from 'next/image'

// page style
import styles from '@/pages/styles/Home.module.css'

// routing
import Layout from '../components/Layout'
import BuildLayout from '../components/BuildLayout'

// index page, entry point
export default function About() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="sudo-adduser-jordan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* favicon image */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* single page layout */}

    </>
  )
}
