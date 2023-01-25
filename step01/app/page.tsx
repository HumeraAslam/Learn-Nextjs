import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <center>
    <div> 
      <h1>Hello World <br /></h1>
      <h4>from <br /></h4>
      <h2> <b> Humera Aslam</b></h2>
    </div>
  </center>
  )
}
