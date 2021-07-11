import { Row, Col } from 'reactstrap'
import TrackVisility from 'react-on-screen'
import Slide from 'react-reveal/Slide'

import styles from './styles/SectionOnePartTwo.module.scss'

export default function SectionOnePartTwo() {
  return (
    <div className={`section ${styles['part-two']}`}>
      <Slide top>
        <h3>
          Vào năm 2019, các nước ASEAN mới bắt đầu đón nhận nền Công nghiệp 4.0
        </h3>
        <div className="space-div" />
        
        <Row>
          <Col xs={{ size: 2 }} lg={{ size: 1 }}>
            <object type="image/svg+xml" data="svg/id/mouseover.svg" />
          </Col>
          <Col>
            <h4>
              5 thành phần chính của ngành Công nghiệp 4.0
            </h4>
          </Col>
          <Col xs={{ size: 2 }} lg={{ size: 1 }}>
            <object type="image/svg+xml" data="svg/id/mouseover.svg" />
          </Col>
        </Row>

        <TrackVisility partialVisibility once>
          {
            ({ isVisible }) => isVisible && (
              <div>
                <Row>
                  <Col>
                    <object type="image/svg+xml" data="svg/vn/internet-of-things.svg" />
                  </Col>
                  <Col>
                    <object type="image/svg+xml" data="svg/vn/big-data.svg" />
                  </Col>
                  <Col>
                    <object type="image/svg+xml" data="svg/vn/cloud-based-technologies.svg" />
                  </Col>
                </Row>
                <Row>
                  <Col xs={{ size: 4, offset: 2 }}>
                    <object type="image/svg+xml" data="svg/vn/artificial-intelligence.svg" />
                  </Col>
                  <Col xs={{ size: 4 }}>
                    <object type="image/svg+xml" data="svg/vn/advanced-manufacturing.svg" />
                  </Col>
                </Row>
              </div>
            )
          }
        </TrackVisility>

        <div className="space-div" />
        <Row>
          <Col xs={{ size: 2 }} lg={{ size: 1 }}>
            <object type="image/svg+xml" data="svg/id/mouseover.svg" />
          </Col>
          <Col>
            <h4>
              Hoạt động sản xuất quan trọng như thế nào đối với khu vực ASEAN?
            </h4>
          </Col>
          <Col xs={{ size: 2 }} lg={{ size: 1 }}>
            <object type="image/svg+xml" data="svg/id/mouseover.svg" />
          </Col>
        </Row>
        
        <div className="desktop">
          <Row>
            <Col>
              <object type="image/svg+xml" data="svg/vn/manufacturing-contribution.svg" />
            </Col>
          </Row>
        </div>
        <div className="mobile">
          <Row>
            <Col>
              <TrackVisility partialVisibility once>
                {
                  ({ isVisible }) => isVisible && <object type="image/svg+xml" data="svg/vn/manufacturing-contribution.svg" />
                }
              </TrackVisility>
            </Col>
          </Row>
        </div>

        <p>
          Là khu vực có nền kinh tế lớn thứ sáu toàn cầu vào năm 2019 với khoảng 3 nghìn tỷ đô la Mỹ, ASEAN được dự báo sẽ tăng trưởng trung bình 4,9% mỗi năm trong thập kỷ tới. 
          Với vai trò là động lực thúc đẩy tăng trưởng cốt lõi, ngành sản xuất đóng góp khoảng 670 tỷ đô la Mỹ hay 21% vào GDP của khu vực trong năm 2018.
        </p>
      </Slide>
      <img src="img/s1-p2-bgl.svg" className={styles['bg-left']}/>
      <img src="img/s1-p2-bgr.svg" className={styles['bg-right']}/>
    </div>
  )
}