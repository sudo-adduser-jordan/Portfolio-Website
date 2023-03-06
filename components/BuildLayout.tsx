// blank page to build indiviual loadComponents
import Image from 'next/image'
import styles from '@/components/styles/Top.module.css'

// routing
import Top from './layout/Top'
import Footer from './layout/Footer'


// index page, entry point
export default function Home() {
  return (
    <>
    <Top />
    <Footer />
    </>
  )
}
