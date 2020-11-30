import Head from 'next/head'
import { Row, Col, Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import NavBar from './sections/NavBar'
import SectionOnePartOne from './sections/SectionOnePartOne'
import SectionOnePartTwo from './sections/SectionOnePartTwo'
import SectionOnePartThree from './sections/SectionOnePartThree'
import SectionOnePartFour from './sections/SectionOnePartFour'
import SectionOnePartFive from './sections/SectionOnePartFive'
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
        <div className="gradient-bg-1">
          <Container fluid>
            <Row>
              <Col xs={{ size: 10, offset: 1 }} lg={{ size: 6, offset: 3 }}>
                <SectionOnePartOne />
                <SectionOnePartTwo />
                <SectionOnePartThree />
                <SectionOnePartFour />
                <SectionOnePartFive />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="gradient-bg-2">
          <Container fluid>
            <Row>
              <Col xs={{ size: 10, offset: 1 }} lg={{ size: 6, offset: 3 }}>
                <SectionTwo />
                <SectionThree />
                <SectionFour />
              </Col>
            </Row>
            <Row>
              <Col xs={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }}>
                <SectionFive />
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </div>
  )
}