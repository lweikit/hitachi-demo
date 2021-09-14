import { Row, Col } from 'reactstrap'
import TrackVisility from 'react-on-screen'

import styles from './styles/SectionOnePartFour.module.scss'

export default function SectionOnePartFour() {
  return (
    <div className={`section ${styles['part-four']}`}>
      <h4>
        การเปรียบเทียบผลผลิตของอุตสาหกรรมการผลิตในภูมิภาคอาเซียน
      </h4>
      <div className={styles['underline']} />
      
      <Row>
        <Col xs={{ size: 2 }} lg={{ size: 1 }}>
          <object type="image/svg+xml" data="svg/th/mouseover.svg" />
        </Col>
        <Col>
          <h5>ปีพ.ศ. 2560 มีการกำหนดการวัดค่าผลผลิตดังกล่าวตามมูลค่าเพิ่มขึ้นต่อลูกจ้างในหนึ่งอัตรา โดยวัดหน่วยเป็นพันดอลลาร์สหรัฐ </h5>
        </Col>
        <Col xs={{ size: 2 }} lg={{ size: 1 }}>
          <object type="image/svg+xml" data="svg/th/mouseover.svg" />
        </Col>
      </Row>

      <TrackVisility partialVisibility once>
        {
          ({ isVisible }) => isVisible && (
            <Row>
              <Col>
                <object type="image/svg+xml" data="svg/th/productivity-1.svg" />
              </Col>
            </Row>
          )
        }
      </TrackVisility>
    </div>
  )
}