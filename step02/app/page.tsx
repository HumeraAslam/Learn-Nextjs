import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
//import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <center> 
        <h1>Hello World <br /></h1>
        <h4>from <br /></h4>
        <h2>  Humera Aslam</h2>
       </center><br />
      <Link href="/name"><b> Go to name page</b></Link>  
    </div>
    
  )
}
