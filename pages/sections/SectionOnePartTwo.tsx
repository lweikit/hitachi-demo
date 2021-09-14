import { Row, Col } from 'reactstrap'
import TrackVisility from 'react-on-screen'
import Slide from 'react-reveal/Slide'

import styles from './styles/SectionOnePartTwo.module.scss'

export default function SectionOnePartTwo() {
  return (
    <div className={`section ${styles['part-two']}`}>
      <Slide top>
        <h3>
          ในปีพ.ศ. 2562 ประเทศในระดับภูมิภาคอาเซียนเริ่มต้นนำอุตสาหกรรม 4.0 เข้ามาในประเทศ
        </h3>
        <div className="space-div" />
        
        <Row>
          <Col xs={{ size: 2 }} lg={{ size: 1 }}>
            <object type="image/svg+xml" data="svg/th/mouseover.svg" />
          </Col>
          <Col>
            <h4>
              5 องค์ประกอบหลักของอุตสาหกรรม 4.0
            </h4>
          </Col>
          <Col xs={{ size: 2 }} lg={{ size: 1 }}>
            <object type="image/svg+xml" data="svg/th/mouseover.svg" />
          </Col>
        </Row>

        <TrackVisility partialVisibility once>
          {
            ({ isVisible }) => isVisible && (
              <div>
                <Row>
                  <Col>
                    <object type="image/svg+xml" data="svg/th/internet-of-things.svg" />
                  </Col>
                  <Col>
                    <object type="image/svg+xml" data="svg/th/big-data.svg" />
                  </Col>
                  <Col>
                    <object type="image/svg+xml" data="svg/th/cloud-based-technologies.svg" />
                  </Col>
                </Row>
                <Row>
                  <Col xs={{ size: 4, offset: 2 }}>
                    <object type="image/svg+xml" data="svg/th/artificial-intelligence.svg" />
                  </Col>
                  <Col xs={{ size: 4 }}>
                    <object type="image/svg+xml" data="svg/th/advanced-manufacturing.svg" />
                  </Col>
                </Row>
              </div>
            )
          }
        </TrackVisility>

        <div className="space-div" />
        <Row>
          <Col xs={{ size: 2 }} lg={{ size: 1 }}>
            <object type="image/svg+xml" data="svg/th/mouseover.svg" />
          </Col>
          <Col>
            <h4>
              อุตสาหกรรมการผลิตในระดับภูมิภาคอาเซียนเข้าขั้นวิกฤตอย่างไร?
            </h4>
          </Col>
          <Col xs={{ size: 2 }} lg={{ size: 1 }}>
            <object type="image/svg+xml" data="svg/th/mouseover.svg" />
          </Col>
        </Row>
        
        <div className="desktop">
          <Row>
            <Col>
              <object type="image/svg+xml" data="svg/th/manufacturing-contribution.svg" />
            </Col>
          </Row>
        </div>
        <div className="mobile">
          <Row>
            <Col>
              <TrackVisility partialVisibility once>
                {
                  ({ isVisible }) => isVisible && <object type="image/svg+xml" data="svg/th/manufacturing-contribution.svg" />
                }
              </TrackVisility>
            </Col>
          </Row>
        </div>

        <p>
          ในปีพ.ศ.2562 ภูมิภาคอาเซียนติดอันดับ 6 ที่มีเศรษฐกิจใหญ่ที่สุดในโลกคิดเป็นมูลค่าประมาณ 3 ล้านล้านดอลลาร์สหรัฐ<br/>
          และคาดการณ์ว่าจะเติบโตที่เฉลี่ยร้อยละ 4.9 ต่อปีในอีกสิบปีข้างหน้า<br/>
          ทั้งนี้อุตสาหกรรมภาคการผลิตถือเป็นตัวขับเคลื่อนหลักของการเติบโตจีดีพีของภูมิภาค<br/>
          ปีพ.ศ.2562 อยู่ที่ร้อยละ 21 หรือคิดเป็นมูลค่า 670 พันล้านดอลลาร์สหรัฐ<br/>
        </p>
      </Slide>
      <img src="img/s1-p2-bgl.svg" className={styles['bg-left']}/>
      <img src="img/s1-p2-bgr.svg" className={styles['bg-right']}/>
    </div>
  )
}