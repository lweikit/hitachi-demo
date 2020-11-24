import { Container, Row, Col } from 'reactstrap'

import ChallengesSVG from './ChallengesSVG'

export default function SectionThree() {
  return (
    <div id="section-three" className="section section-three">
      <Container fluid>
        <Row>
          <Col sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2}}>
            <h4>CHALLENGES OF RACING UP</h4>
            <h2>THE INDUSTRY 4.0</h2>
            <h1>LADDER</h1>

            <p>
              With a renewed urgency to commit to Industry 4.0, ASEAN manufacturers are now rushing headlong into technological upgrades. 39% of manufacturers have implemented a nerve-centre, or control-tower, approach to increase end-to-end supply-chain transparency.
            </p>

            <img src="img/s2-p1-1.svg" id="s2-p1-1" />

            <p className="point">
              Around a quarter are fast tracking automation programs to stem worker shortages arising from COVID-19
            </p>

            <p>
              While the escalated pace of change is impressive, the race to becoming smart factories of tomorrow is marred with three challenges: data silos, lack of skilled managers and cybersecurity threats.
            </p>

            <br />
            <br />

            <ChallengesSVG/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}