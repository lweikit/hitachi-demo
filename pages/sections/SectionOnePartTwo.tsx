import { Row, Col } from 'reactstrap'
import Fade from 'react-reveal/Fade'

import AseanGDP from '../components/AseanGDPSVG'

export default function SectionOnePartTwo() {
  return (
    <div className="section part-two">
      <Fade top cascade>
        <div className="align-left">
          <h4>IN 2019, ASEAN COUNTRIES WERE JUST STARTING TO EMBRACE</h4>
          <h1>INDUSTRY 4.0</h1>
        </div>

        <div className="space-div" />
        <div className="desktop">
          <Row>
            <Col>
              <object type="image/svg+xml" data="img/s1-p2-1.svg" />
            </Col>
            <Col>
              <object type="image/svg+xml" data="img/s1-p2-2.svg" />
            </Col>
            <Col>
              <object type="image/svg+xml" data="img/s1-p2-3.svg" />
            </Col>
            <Col>
              <object type="image/svg+xml" data="img/s1-p2-4.svg" />
            </Col>
            <Col>
              <object type="image/svg+xml" data="img/s1-p2-5.svg" />
            </Col>
          </Row>
        </div>
        <div className="mobile">
          <Row>
            <Col xs={{ size: 4, offset: 2 }}>
              <object type="image/svg+xml" data="img/s1-p2-1.svg" />
            </Col>
            <Col xs={{ size: 4 }}>
              <object type="image/svg+xml" data="img/s1-p2-2.svg" />
            </Col>
            <Col xs={{ size: 4 }}>
              <object type="image/svg+xml" data="img/s1-p2-3.svg" />
            </Col>
            <Col xs={{ size: 4 }}>
              <object type="image/svg+xml" data="img/s1-p2-4.svg" />
            </Col>
            <Col xs={{ size: 4 }}>
              <object type="image/svg+xml" data="img/s1-p2-5.svg" />
            </Col>
          </Row>
        </div>
        <div className="space-div" />

        <AseanGDP />
      </Fade>
      <img src="img/s1-p2-bgl.svg" className="s1-p2-bgl"/>
      <img src="img/s1-p2-bgr.svg" className="s1-p2-bgr"/>
    </div>
  )
}