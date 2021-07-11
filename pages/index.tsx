import Head from 'next/head'
import { Container, Row, Col } from 'reactstrap'

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
        <div id="section-one">
          <div className="gradient-bg-1">
            <Container>
              <Row>
                <Col xs={{ size: 10, offset: 1 }}>
                  <SectionOnePartOne />
                  <SectionOnePartTwo />
                </Col>
              </Row>
            </Container>
          </div>
          <div className="gradient-bg-2">
            <Container>
              <Row>
                <Col xs={{ size: 10, offset: 1 }}>
                  <SectionOnePartThree />
                  <SectionOnePartFour />
                  <SectionOnePartFive />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="gradient-bg-3">
          <Container>
            <Row>
              <Col xs={{ size: 10, offset: 1 }}>
                <SectionTwo />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="gradient-bg-4">
          <Container>
            <Row>
              <Col xs={{ size: 10, offset: 1 }}>
                <SectionThree />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="gradient-bg-5">
          <Container>
            <Row>
              <Col xs={{ size: 10, offset: 1 }}>
                <SectionFour />
                <SectionFive />
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </div>
  )
}