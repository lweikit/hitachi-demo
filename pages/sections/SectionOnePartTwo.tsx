import { Row, Col } from 'reactstrap'
import TrackVisility from 'react-on-screen'
import Slide from 'react-reveal/Slide'

import styles from './styles/SectionOnePartTwo.module.scss'

export default function SectionOnePartTwo() {
  return (
    <div className={`section ${styles['part-two']}`}>
      <Slide top>
        <h3>In 2019, ASEAN countries were just starting to embrace Industry 4.0</h3>
        <div className="space-div" />
        
        <Row>
          <Col xs={{ size: 2 }} lg={{ size: 1 }}>
            <object type="image/svg+xml" data="svg/mouseover.svg" />
          </Col>
          <Col>
            <h4>5 key components of Industry 4.0</h4>
          </Col>
          <Col xs={{ size: 2 }} lg={{ size: 1 }}>
            <object type="image/svg+xml" data="svg/mouseover.svg" />
          </Col>
        </Row>

        <TrackVisility partialVisibility once>
          {
            ({ isVisible }) => isVisible && (
              <div>
                <Row>
                  <Col>
                    <object type="image/svg+xml" data="svg/internet-of-things-mobile.svg" />
                  </Col>
                  <Col>
                    <object type="image/svg+xml" data="svg/big-data-mobile.svg" />
                  </Col>
                  <Col>
                    <object type="image/svg+xml" data="svg/cloud-based-technologies-mobile.svg" />
                  </Col>
                </Row>
                <Row>
                  <Col xs={{ size: 4, offset: 2 }}>
                    <object type="image/svg+xml" data="svg/artificial-intelligence-mobile.svg" />
                  </Col>
                  <Col xs={{ size: 4 }}>
                    <object type="image/svg+xml" data="svg/advanced-manufacturing-mobile.svg" />
                  </Col>
                </Row>
              </div>
            )
          }
        </TrackVisility>

        <div className="space-div" />
        <Row>
          <Col xs={{ size: 2 }} lg={{ size: 1 }}>
            <object type="image/svg+xml" data="svg/mouseover.svg" />
          </Col>
          <Col>
            <h4>How critical is manufacturing to ASEAN?</h4>
          </Col>
          <Col xs={{ size: 2 }} lg={{ size: 1 }}>
            <object type="image/svg+xml" data="svg/mouseover.svg" />
          </Col>
        </Row>
        
        <div className="desktop">
          <Row>
            <Col>
              <object type="image/svg+xml" data="svg/manufacturing-contribution.svg" />
            </Col>
          </Row>
        </div>
        <div className="mobile">
          <Row>
            <Col>
              <TrackVisility partialVisibility once>
                {
                  ({ isVisible }) => isVisible && <object type="image/svg+xml" data="svg/manufacturing-contribution-mobile.svg" />
                }
              </TrackVisility>
            </Col>
          </Row>
        </div>

        <p>
          Home to the sixth largest global economy in 2019 at around US$3 trillion, 
          ASEAN is projected to grow at an average of 4.9% per annum for the next decade. 
          As a core growth driver, manufacturing contributes about US$670 billion or 21% to the region's GDP in 2018.
        </p>
      </Slide>
      <img src="img/s1-p2-bgl.svg" className={styles['bg-left']}/>
      <img src="img/s1-p2-bgr.svg" className={styles['bg-right']}/>
    </div>
  )
}