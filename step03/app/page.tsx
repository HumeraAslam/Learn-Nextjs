import Link from 'next/link'
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
