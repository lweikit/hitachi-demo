import { Row, Col } from 'reactstrap'
import TrackVisility from 'react-on-screen'
import CountUp from 'react-countup'

import styles from './styles/DataByPercent.module.scss'

export default function DataByPercent({ topText, bottomText, topNumber, bottomNumber, delay=0 }) {
  return (
    <div>
      <Row>
        <Col className={styles['left-side']} xs={{ size: 6 }}>
          <div className={styles['percentage']}>
            <TrackVisility once>
              {
                ({ isVisible }) => isVisible && <CountUp 
                  end={topNumber} 
                  suffix=" %"
                  duration={3}
                  useEasing={false}
                  delay={delay}
                />
              }
            </TrackVisility>
          </div>
          <h6>of ASEAN manufacturers</h6>
        </Col>
        <Col className={styles['right-side']} xs={{ size: 6 }}>
          <p className="align-left">
            { topText }
          </p>
        </Col>
      </Row>
      <Row>
        <Col className={styles['left-side']} xs={{ size: 6 }}>
          <div className={styles['percentage']}>
            <TrackVisility once>
              {
                ({ isVisible }) => isVisible && <CountUp 
                  end={bottomNumber} 
                  suffix=" %"
                  duration={1.35}
                  useEasing={false}
                  delay={delay}
                />
              }
            </TrackVisility>
          </div>
          <h6>of ASEAN manufacturers</h6>
        </Col>
        <Col className={styles['right-side']} xs={{ size: 6 }}>
          <p className="align-left">
            { bottomText }
          </p>
        </Col>
      </Row>
    </div>
  )
}