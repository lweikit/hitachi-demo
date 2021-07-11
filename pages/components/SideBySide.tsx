import { Row, Col } from 'reactstrap'
import TrackVisility from 'react-on-screen'
import CountUp from 'react-countup'

import styles from './styles/SideBySide.module.scss'

export default function SideBySide({ leftText, rightText, leftNumber, rightNumber, delay=0 }) {
  return (
    <Row className={styles['side-by-side']}>
      <Col>
        <Row className={styles['left-side']}>
          <Col xs={{ order: 2 }} lg={{ size: 6, order: 1 }}>
            <h4>
              { leftText }
            </h4>
          </Col>
          <Col xs={{ order: 1 }} lg={{ size: 6, order: 2 }}>
            <h2>
              <TrackVisility once>
                {
                  ({ isVisible }) => isVisible && <CountUp 
                    end={leftNumber} 
                    suffix=" %"
                    duration={3}
                    useEasing={false}
                    delay={delay}
                  />
                }
              </TrackVisility>
            </h2>
          </Col>
        </Row>
      </Col>
      <Col>
        <Row className={styles['right-side']}>
          <Col lg={{ size: 6 }}>
            <h2>
              <TrackVisility once>
                {
                  ({ isVisible }) => isVisible && <CountUp 
                    end={rightNumber} 
                    suffix=" %"
                    duration={1.35}
                    useEasing={false}
                    delay={delay}
                  />
                }
              </TrackVisility>
            </h2>
          </Col>
          <Col lg={{ size: 6 }}>
            <h4>
              { rightText }
            </h4>
          </Col>
        </Row>
        </Col>
    </Row>
  )
}