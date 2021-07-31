import { Row, Col } from 'reactstrap'
import TrackVisility from 'react-on-screen'

import styles from './styles/SectionOnePartFour.module.scss'

export default function SectionOnePartFour() {
  return (
    <div className={`section ${styles['part-four']}`}>
      <h4>
        การเปรียบเทียบผลผลิตจากอุตสาหกรรมของระดับภูมิภาคอาเซียน
      </h4>
      <div className={styles['underline']} />
      
      <Row>
        <Col xs={{ size: 2 }} lg={{ size: 1 }}>
          <object type="image/svg+xml" data="svg/th/mouseover.svg" />
        </Col>
        <Col>
          <h5>ผลผลิตจะกำหนดตามมูลค่าที่เพิ่มขึ้นต่อลูกจ้างในหนึ่งอัตรา</h5>
          <h5>วัดเป็นหน่วยหลายพันดอลลาร์ ณ ปี 2017</h5>
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