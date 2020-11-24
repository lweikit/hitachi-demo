import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

import NavBar from './sections/NavBar'
import SectionOne from './sections/SectionOne'
import SectionTwo from './sections/SectionTwo'
import SectionThree from './sections/SectionThree'
import SectionFour from './sections/SectionFour'
import SectionFive from './sections/SectionFive'


export default function Home() {

  return (
    <div>
      <Head>
        <title>Hitachi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <NavBar />
        <div className="part-one-gradient">
          <SectionOne />
        </div>
        <div className="part-two-gradient">
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
        </div>
      </main>
    </div>
  )
}