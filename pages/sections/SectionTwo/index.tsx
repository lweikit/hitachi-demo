import { Container, Row, Col } from 'reactstrap'
import AnimatedNumber from 'animated-number-react'
import Slide from 'react-reveal/Slide'

export default function SectionTwo() {
  return (
    <div id="section-two" className="section section-two">
      <Container fluid>
        <Row>
          <Col xs={{ size: 10, offset: 1 }} lg={{ size: 6, offset: 3 }}>  
            <h4>URGENT NEED FOR</h4>
            <h1>TRANSFORMATION</h1>

            <p className="point">
              Covid-19 has interrupted production, exposed supply chains weakness & drove an urgent need to modernise operations.
            </p>

            <img src="img/line-down.svg" className="line-down" />

            <p>
              Telling tales of manufacturers' reliance on manual processes and operations, coupled with the lack of visibility designed into their supply chains have surfaced. Both hinder manufacturers' ability to respond dynamically during times of uncertain demand. Modernising these capabilities will be essential for manufacturers to recover from the pandemic quickly.
            </p>

            <img src="img/s2-bg.jpg" className="bg s2-bg" />

            <div className="video-container">
              <iframe src="https://www.youtube-nocookie.com/embed/nqmpddNspSE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            <p className="emphasis">
              TO PUT IT SIMPLY, COVID-19 IS SPEARHEADING THIS SECTOR TOWARDS URGENT TRANSFORMATION.
            </p>

            <Row className="side-by-side">
              <Col>
                <Row className="left-side">
                  <Col xs={{ order: 2 }} lg={{ size: 6, order: 1 }}>
                    <h4>
                      OF ASEAN MANUFACTURERS SAY THE PANDEMIC HAS ACCELERATED THEIR DIGITAL TRANSFORMATION PLANS
                    </h4>
                  </Col>
                  <Col xs={{ order: 1 }} lg={{ size: 6, order: 2 }}>
                    <h2>
                      <AnimatedNumber 
                        value={92} 
                        formatValue={(value) => `${Number(value).toFixed(0)} %`}
                        duration={4000}
                      />
                    </h2>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row className="right-side">
                  <Col lg={{ size: 6 }}>
                    <h2>
                      <AnimatedNumber 
                        value={42} 
                        formatValue={(value) => `${Number(value).toFixed(0)} %`}
                        duration={2000}
                      />
                    </h2>
                  </Col>
                  <Col lg={{ size: 6 }}>
                    <h4>
                      SEEK MORE EFFICIENT DATA MANAGEMENT SOLUTIONS SUCH AS ROBOTIC PROCESS AUTOMATION (RPA)
                    </h4>
                  </Col>
                </Row>
              </Col>
            </Row>

            <div></div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}