import { Row, Col } from 'reactstrap'
import TrackVisility from 'react-on-screen'

import LineDown from '../components/LineDown'
import styles from './styles/SectionOnePartFive.module.scss'

export default function SectionOnePartFive() {
  return (
    <div className={`section ${styles['part-five']}`}>
      <h4>
        ผลกำไรในอุตสาหกรรมภาคการผลิต
      </h4>
      <div className={styles['underline']} />

      <Row>
        <Col xs={{ size: 2 }} lg={{ size: 1 }}>
          <object type="image/svg+xml" data="svg/th/mouseover.svg" />
        </Col>
        <Col>
          <h5>
            ตั้งแต่ปี 2008 ถึงปี 2017
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
                อุตสาหกรรม 4.0 ให้สัญญาว่าจะเปลี่ยนแปลงตัวเลขดังกล่าว ด้วยการเร่งเพิ่มมูลค่าอุตสาหกรรมการผลิตในภูมิภาค แต่ด้วยการประยุกต์ใช้อุตสาหกรรม 4.0 ในปัจจุบัน <br/>
                ยังตามหลังประเทศจีน ที่ได้มีการลงทุนอย่างเต็มที่ในด้านระบบเครื่องจักรอัตโนมัติและระบบหุ่นยนต์ใน 10 ปีที่ผ่านมา ยุทธศาสตร์นี้ทำให้ผลผลิตของประเทศจีน <br/>
                เติบโตขึ้นอีกร้อยละ 84 เทียบกับค่าเฉลี่ยร้อยละ 38 ของภูมิภาคอาเซียน
                </p>
          
                <div className={lineClass}>
                  {
                    isVisible && <LineDown type="delay"/>
                  }
                </div>
          
                <h3 className={hClass}>
                  แต่แล้วก็เกิดการแพร่ระบาดของไวรัสโคโรนาสายพันธุ์ใหม่ ที่ทำให้เกิดการเปลี่ยนแปลงของสถานการณ์ 
                </h3>
              </div>
            )
          }
        }
      </TrackVisility>
    </div>
  )
}