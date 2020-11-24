import { useEffect, useState } from 'react'
import { Row, Col, Carousel, CarouselItem, CarouselControl, Container } from 'reactstrap'
import AnimatedNumber from 'animated-number-react'
import Fade from 'react-reveal/Fade'
import lottie from 'lottie-web'

import fivePillarsAnimation from '../../../public/lottie_data/data.json'
import AseanGDP from './AseanGDP'

export default function SectionOne() {
  const manufacturingSizeByCountry = [
    {
      country: 'BRUNEI DARUSSALAM',
      percentage: '62.9%',
    },
    {
      country: 'INDONESIA',
      percentage: '39.8%',
    },
    {
      country: 'MALAYSIA',
      percentage: '37.5%',
    },
    {
      country: 'LAO PDR',
      percentage: '35.7%',
    },
    {
      country: 'VIETNAM',
      percentage: '35.6%',
    },
    {
      country: 'THAILAND',
      percentage: '35.4%',
    },
    {
      country: 'PHILIPPINES',
      percentage: '34.1%',
    },
    {
      country: 'MYANMAR',
      percentage: '32.1%',
    },
    {
      country: 'CAMBODIA',
      percentage: '32.1%',
    },
    {
      country: 'SINGAPORE',
      percentage: '25.1%',
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [renderLottie, setRenderLottie] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === manufacturingSizeByCountry.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? manufacturingSizeByCountry.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }  

  const slides = manufacturingSizeByCountry.map((dataPoint, index) => {
    const leftIndex = index === 0 ? manufacturingSizeByCountry.length - 1 : index - 1
    const rightIndex = index == manufacturingSizeByCountry.length - 1 ? 0 : index + 1
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={dataPoint.country}
      >
        <div className="data-point">
          <div className="side-data-point" id="data-left" onClick={() => goToIndex(leftIndex)}>
            <img src="img/s1-p3-3.png" height="70%" />
            {/* <h4>{manufacturingSizeByCountry[leftIndex].country}</h4>
            <h1>{manufacturingSizeByCountry[leftIndex].percentage}</h1> */}
          </div>
          <div className="main-data-point">
            <img src="img/s1-p3-2.png" height="100%" />
            {/* <h4>{dataPoint.country}</h4>
            <h1>{dataPoint.percentage}</h1> */}
          </div>
          <div className="side-data-point" id="data-right" onClick={() => goToIndex(rightIndex)}>
            <img src="img/s1-p3-3.png" height="70%" />
            {/* <h4>{manufacturingSizeByCountry[rightIndex].country}</h4>
            <h1>{manufacturingSizeByCountry[rightIndex].percentage}</h1> */}
          </div>
        </div>
      </CarouselItem>
    )
  })

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
          <Col sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2}}>
            <div className="section part-one">
              <h4>ACCELERATED CHANGE IN ASEAN'S</h4>
              <h2>MANUFACTURING</h2>
              <h1>SECTOR</h1>
            </div>

            <div className="part-two">
              <h4>IN 2019, ASEAN COUNTRIES WERE JUST STARTING TO EMBRACE</h4>
              <h1>INDUSTRY 4.0</h1>

              <div id="five-pillars"></div>
              <AseanGDP />
            </div>

            <div className="section part-three">
              <h4>THE SIZE OF</h4>
              <h2>MANUFACTURING</h2>
              <h1>SECTOR</h1>
              <h4>COMPARED TO TOTAL GDP OF THE COUNTRY IN 2018</h4>

              {/* <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
              </Carousel> */}

              <img src="img/s1-p3-4.png" height="10%" />
              <h4>SOUTHEAST ASIA</h4>

              <p>
                In spite of its size, ASEAN's manufacturing sector only ranks fourth in the world, behind China, United States and Germany. In terms of average productivity, all ASEAN member states, with the exception of Singapore, score significantly lower than United States and Germany.
              </p>
            </div>

            <div className="section part-four">
              <h4>MANUFACTURING</h4>
              <h2>PRODUCTIVITY</h2>
              <h1>IN 2017</h1>

              <div id="country-productivity">
                <div id="usa-productivity"></div>
                <div id="germany-productivity"></div>
                <div id="china-productivity"></div>
                <div id="asean-productivity"></div>
              </div>

              <p>
                Industry 4.0 promises to change that by escalating the region's manufacturing value. However, the current pace of adoption lags behind China, which has invested heavily in automation and robots in the past 10 years.
              </p>

              <Row className="side-by-side">
                <Col>
                  <Row className="left-side">
                    <Col xs={{ order: 2 }} md={{ size: 6, order: 1 }}>
                      <h4>
                        PRODUCTIVITY GROWTH IN CHINA
                      </h4>
                    </Col>
                    <Col xs={{ order: 1 }} md={{ size: 6, order: 2 }}>
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
                    <Col md={{ size: 6 }}>
                      <h2>
                        <AnimatedNumber 
                          value={38} 
                          formatValue={(value) => `${Number(value).toFixed(0)} %`}
                          duration={2500}
                        />
                      </h2>
                    </Col>
                    <Col md={{ size: 6 }}>
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
              <div className="lg-left">
                <h4>CHANGE IN MANUFACTURING</h4>
                <h2>PRODUCTIVITY</h2>
                <h1>2008 - 2017</h1>
              </div>

              <ul>
              <li>ASEAN - 38%</li>
              <li>GERMANY - 8%</li>
              <li>UNITED STATES - 4%</li>
              <li>CHINA - 84%</li>
              </ul>

              <p>
              According to McKinsey, ASEAN could capture productivity gains worth US$216 billion to US$627 billion by moving up the Industry 4.0 technology ladder. Still, the pace remains slow and sluggish. A 2018 survey of ASEAN manufacturers showed that only 15 to 25 percent have fully adopted Industry 4.0 and related technologies.
              </p>

              <h4>UP TO</h4>
              <h2>US$ 627 BILLION</h2>
              <h4>WORTH OF PRODUCTIVITY GAINS FOR ASEAN</h4>

              <img src="img/s2-p1-1.svg" id="s2-p1-1" />

              <h2>THEN, COVID-19 CAME AND CHANGED EVERYTHING</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}