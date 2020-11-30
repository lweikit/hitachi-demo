import { Row, Col } from 'reactstrap'
import TrackVisility from 'react-on-screen'
import CountUp from 'react-countup'

import ProductivityBubble from '../components/ProductivityBubble'

export default function SectionOnePartFour() {
  return (
    <div className="section part-four">
      <h4>MANUFACTURING</h4>
      <h2>PRODUCTIVITY</h2>
      <h1>IN 2017</h1>
      <div className="my-4" />

      <TrackVisility once>
        {
          ({ isVisible }) => <ProductivityBubble isVisible={isVisible}/>
        }
      </TrackVisility>

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
                <TrackVisility once>
                  {
                    ({ isVisible }) => isVisible && <CountUp 
                      end={84} 
                      suffix=" %"
                      duration={3}
                      useEasing={false}
                    />
                  }
                </TrackVisility>
              </h2>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="right-side">
            <Col lg={{ size: 6 }}>
              <h2>
                <TrackVisility once>
                  {
                    ({ isVisible }) => isVisible && <CountUp 
                      end={38} 
                      suffix=" %"
                      duration={1.35}
                      useEasing={false}
                    />
                  }
                </TrackVisility>
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
  )
}