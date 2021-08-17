import { Row, Col } from 'reactstrap'
import TrackVisility from 'react-on-screen'

import styles from './styles/SectionOnePartFour.module.scss'

export default function SectionOnePartFour() {
  return (
    <div className={`section ${styles['part-four']}`}>
      <h4>
        So sánh năng suất sản xuất của khu vực ASEAN
      </h4>
      <div className={styles['underline']} />
      
      <Row>
        <Col xs={{ size: 2 }} lg={{ size: 1 }}>
          <object type="image/svg+xml" data="svg/vn/mouseover.svg" />
        </Col>
        <Col>
          <h5>
            năng suất sản xuất được định nghĩa là giá trị gia tăng trên mỗi nhân viên, được tính bằng nghìn đô la Mỹ, tính đến năm 2017
          </h5>
        </Col>
        <Col xs={{ size: 2 }} lg={{ size: 1 }}>
          <object type="image/svg+xml" data="svg/vn/mouseover.svg" />
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