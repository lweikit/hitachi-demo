import { Container, Row, Col } from 'reactstrap'
import AnimatedNumber from 'animated-number-react'
import Slide from 'react-reveal/Slide'

export default function SectionTwo() {
  return (
    <div id="section-two" className="section section-two">
      <Container fluid>
        <Row>
          <Col sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2}}>  
            <h4>URGENT NEED FOR</h4>
            <h1>TRANSFORMATION</h1>

            <p className="point">
              Covid-19 has interrupted production, exposed supply chains weakness & drove an urgent need to modernise operations.
            </p>

            <img src="img/s2-p1-1.svg" id="s2-p1-1" />

            <p>
              Telling tales of manufacturers' reliance on manual processes and operations, coupled with the lack of visibility designed into their supply chains have surfaced. Both hinder manufacturers' ability to respond dynamically during times of uncertain demand. Modernising these capabilities will be essential for manufacturers to recover from the pandemic quickly.
            </p>

            <div className="video-container">
              <iframe src="https://www.youtube-nocookie.com/embed/nqmpddNspSE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            <p className="emphasis">
              TO PUT IT SIMPLY, COVID-19 IS SPEARHEADING THIS SECTOR TOWARDS URGENT TRANSFORMATION.
            </p>

            <Row className="side-by-side m-4">
              <Col>
                <Row className="left-side">
                  <Col xs={{ order: 2 }} md={{ size: 8, order: 1 }}>
                    <h4>
                      OF ASEAN MANUFACTURERS SAY THE PANDEMIC HAS ACCELERATED THEIR DIGITAL TRANSFORMATION PLANS
                    </h4>
                  </Col>
                  <Col xs={{ order: 1 }} md={{ size: 4, order: 2 }}>
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
                  <Col md={{ size: 4 }}>
                    <h2>
                      <AnimatedNumber 
                        value={42} 
                        formatValue={(value) => `${Number(value).toFixed(0)} %`}
                        duration={2000}
                      />
                    </h2>
                  </Col>
                  <Col md={{ size: 8 }}>
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