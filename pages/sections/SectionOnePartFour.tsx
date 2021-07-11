import { Row, Col } from 'reactstrap'
import TrackVisility from 'react-on-screen'

import styles from './styles/SectionOnePartFour.module.scss'

export default function SectionOnePartFour() {
  return (
    <div className={`section ${styles['part-four']}`}>
      <h4>
        Membandingkan tingkat produktivitas sektor manufaktur ASEAN
      </h4>
      <div className={styles['underline']} />
      
      <Row>
        <Col xs={{ size: 2 }} lg={{ size: 1 }}>
          <object type="image/svg+xml" data="svg/id/mouseover.svg" />
        </Col>
        <Col>
          <h5>tingkat produktivitas manufaktur ditetapkan sebagai nilai tambah setiap karyawan yang diukur setiap seribu USD sebagaimana tahun 2017</h5>
        </Col>
        <Col xs={{ size: 2 }} lg={{ size: 1 }}>
          <object type="image/svg+xml" data="svg/id/mouseover.svg" />
        </Col>
      </Row>

      <TrackVisility partialVisibility once>
        {
          ({ isVisible }) => isVisible && (
            <Row>
              <Col>
                <object type="image/svg+xml" data="svg/vn/productivity-1.svg" />
              </Col>
            </Row>
          )
        }
      </TrackVisility>
    </div>
  )
}