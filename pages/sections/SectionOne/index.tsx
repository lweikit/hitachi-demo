import { useEffect, useState } from 'react'
import { Row, Col, Container } from 'reactstrap'
import AnimatedNumber from 'animated-number-react'
import Fade from 'react-reveal/Fade'
import lottie from 'lottie-web'

import fivePillarsAnimation from '../../../public/lottie_data/data.json'
import AseanGDP from './components/AseanGDP'
import ManufacturingCarousel from './components/ManufacturingCarousel'
import ProductivityBubble from './components/ProductivityBubble'
import ProductivityBar from './components/ProductivityBar'

export default function SectionOne() {
  const [renderLottie, setRenderLottie] = useState(false)

  useEffect(() => {
    if (!renderLottie) {
      lottie.loadAnimation({
        container: document.querySelector('#five-pillars'),
        animationData: fivePillarsAnimation,
        renderer: "svg",
      })
      setRenderLottie(true)
    }
  })

  return (
    <div id="section-one" className="section-one">
      <Container fluid>
        <Row>
          <Col xs={{ size: 10, offset: 1 }} lg={{ size: 6, offset: 3 }}>
            <div className="section part-one">
              <h4>ACCELERATED CHANGE IN ASEAN'S</h4>
              <h2>MANUFACTURING</h2>
              <h1>SECTOR</h1>
            </div>

            <div className="section part-two">
              <div className="align-left">
                <h4>IN 2019, ASEAN COUNTRIES WERE JUST STARTING TO EMBRACE</h4>
                <h1>INDUSTRY 4.0</h1>
              </div>

              <img src="img/s1-p2-bgl.svg" className="s1-p2-bgl"/>
              <img src="img/s1-p2-bgr.svg" className="s1-p2-bgr"/>
              <div id="five-pillars"></div>
              <AseanGDP />
            </div>

            <div className="section part-three">
              <img src="img/s1-p3-bg.svg" className="s1-p3-bg" />
              <h4>THE SIZE OF</h4>
              <h2>MANUFACTURING</h2>
              <h1>SECTOR</h1>
              <h4>COMPARED TO TOTAL GDP OF THE COUNTRY IN 2018</h4>
              <div className="my-4" />

              <ManufacturingCarousel />

              <div className="my-4" />
              <img src="img/location.svg" height="100px" />
              <h4>SOUTHEAST ASIA</h4>

              <p className="black">
                In spite of its size, ASEAN's manufacturing sector only ranks fourth in the world, behind China, United States and Germany. In terms of average productivity, all ASEAN member states, with the exception of Singapore, score significantly lower than United States and Germany.
              </p>
            </div>

            <div className="section part-four">
              <h4>MANUFACTURING</h4>
              <h2>PRODUCTIVITY</h2>
              <h1>IN 2017</h1>
              <div className="my-4" />

              <ProductivityBubble />

              <p>
                Industry 4.0 promises to change that by escalating the region's manufacturing value. However, the current pace of adoption lags behind China, which has invested heavily in automation and robots in the past 10 years.
              </p>

              <Row className="side-by-side">
                <Col>
                  <Row className="left-side">
                    <Col xs={{ order: 2 }} lg={{ size: 6, order: 1 }}>
                      <h4>
                        PRODUCTIVITY GROWTH IN CHINA
                      </h4>
                    </Col>
                    <Col xs={{ order: 1 }} lg={{ size: 6, order: 2 }}>
                      <h2>
                        <AnimatedNumber 
                          value={84} 
                          formatValue={(value) => `${Number(value).toFixed(0)} %`}
                          duration={5000}
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
                          value={38} 
                          formatValue={(value) => `${Number(value).toFixed(0)} %`}
                          duration={2500}
                        />
                      </h2>
                    </Col>
                    <Col lg={{ size: 6 }}>
                      <h4>
                        PRODUCTIVITY GROWTH IN ASEAN
                      </h4>
                    </Col>
                  </Row>
                  </Col>
              </Row>

              <p className="emphasis purple">
                This move has enabled Chinese productivity to grow by 84%, compared with 38% on average for ASEAN.
              </p>
            </div>

            <div className="section part-five">
              <div className="align-left">
                <h4>CHANGE IN MANUFACTURING</h4>
                <h2>PRODUCTIVITY</h2>
                <h1>2008 - 2017</h1>
              </div>
              <div className="my-4" />

              <ProductivityBar />

              <img src="img/s1-p5-bg.jpg" className="bg s1-p5-bg" />
              <p>
                According to McKinsey, ASEAN could capture productivity gains worth US$216 billion to US$627 billion by moving up the Industry 4.0 technology ladder. Still, the pace remains slow and sluggish. A 2018 survey of ASEAN manufacturers showed that only 15 to 25 percent have fully adopted Industry 4.0 and related technologies.
              </p>

              <h4>UP TO</h4>
              <h2>US$ 627 BILLION</h2>
              <h4 className="mb-5">WORTH OF PRODUCTIVITY GAINS FOR ASEAN</h4>

              <img src="img/line-down.svg" className="line-down" />

              <h2 className="mt-5">THEN, COVID-19 CAME AND CHANGED EVERYTHING</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}