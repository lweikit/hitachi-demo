import { Row, Col } from 'reactstrap'
import TrackVisility from 'react-on-screen'

import LineDown from '../components/LineDown'
import styles from './styles/SectionOnePartFive.module.scss'

export default function SectionOnePartFive() {
  return (
    <div className={`section ${styles['part-five']}`}>
      <h4>
        ผลกำไรของอุตสาหกรรมการผลิต
      </h4>
      <div className={styles['underline']} />

      <Row>
        <Col xs={{ size: 2 }} lg={{ size: 1 }}>
          <object type="image/svg+xml" data="svg/th/mouseover.svg" />
        </Col>
        <Col>
          <h5>
            ตั้งแต่ปีพ.ศ. 2551 ถึงปี 2560
          </h5>
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
                <object type="image/svg+xml" data="svg/th/productivity-2.svg" />
              </Col>
            </Row>
          )
        }
      </TrackVisility>

      <div className="space-div" />
      <div className="space-div" />
      <div className="space-div" />
      <TrackVisility partialVisibility once>
        {
          ({ isVisible }) => {
            const bgClass   = `${styles['hidden']} ${isVisible && styles['seq1-bg']} ${styles['bg']} bg`
            const pClass    = `${styles['hidden']} ${isVisible && styles['seq2-p']}`
            const lineClass = `${styles['hidden']} ${isVisible && styles['seq3-line']}`
            const hClass    = `${styles['hidden']} ${isVisible && styles['seq4-p']}`
            return (
              <div>
                <img src="img/s1-p5-bg.jpg" className={bgClass} />
                <p className={pClass}>
                  ถึงแม้อุตสาหกรรม 4.0 จะเป็นตัวแปรสำคัญเพื่อเปลี่ยนแปลงตัวเลขดังกล่าว ด้วยการเร่งเพิ่มมูลค่าอุตสาหกรรมการผลิตในภูมิภาค<br/>
                  แต่ด้วยการประยุกต์ใช้อุตสาหกรรม 4.0 ในปัจจุบันยังตามหลังประเทศจีนที่ได้มีการลงทุนอย่างเต็มที่<br/>
                  ในด้านระบบเครื่องจักรอัตโนมัติและระบบหุ่นยนต์ใน 10 ปีที่ผ่านมา<br/>
                  ยุทธศาสตร์นี้ทำให้ผลผลิตของประเทศจีนเติบโตขึ้นอีกร้อยละ 84 เทียบกับค่าเฉลี่ยร้อยละ 38 ของภูมิภาคอาเซียน<br/>
                </p>
          
                <div className={lineClass}>
                  {
                    isVisible && <LineDown type="delay"/>
                  }
                </div>
          
                <h3 className={hClass}>
                  แต่แล้วก็เกิดการแพร่ระบาดของโรคติดเชื้อไวรัสโคโรนา 2019<br/>
                  ที่ทำให้สถานการณ์ทุกอย่างเปลี่ยนแปลงไป<br/>
                </h3>
              </div>
            )
          }
        }
      </TrackVisility>
    </div>
  )
}