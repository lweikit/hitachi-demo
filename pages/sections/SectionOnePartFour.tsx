import { Row, Col } from 'reactstrap'
import TrackVisility from 'react-on-screen'

import styles from './styles/SectionOnePartFour.module.scss'

export default function SectionOnePartFour() {
  return (
    <div className={`section ${styles['part-four']}`}>
      <h4>Comparing ASEAN's manufacturing productivity</h4>
      <div className={styles['underline']} />
      
      <Row>
        <Col xs={{ size: 2 }} lg={{ size: 1 }}>
          <object type="image/svg+xml" data="svg/mouseover.svg" />
        </Col>
        <Col>
          <h5>manufacturing productivity is defined as value added per employee, measured in thousands of US$, as of 2017</h5>
        </Col>
        <Col xs={{ size: 2 }} lg={{ size: 1 }}>
          <object type="image/svg+xml" data="svg/mouseover.svg" />
        </Col>
      </Row>

      <TrackVisility partialVisibility once>
        {
          ({ isVisible }) => isVisible && (
            <Row>
              <Col>
                <object type="image/svg+xml" data="svg/productivity-1-mobile.svg" />
              </Col>
            </Row>
          )
        }
      </TrackVisility>
    </div>
  )
}