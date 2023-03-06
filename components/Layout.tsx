import Image from 'next/image'
import styles from '@/styles/Home.module.css'

// routing
import Top from './layout/Top'
import Content from './layout/Content'

// index page, entry point
export default function Home() {
  return (
    <>
    <Top />
    <Content />
    </>
  )
}
