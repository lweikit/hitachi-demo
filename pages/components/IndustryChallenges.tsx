import { useState } from 'react'
import { Row, Col } from 'reactstrap'
import Slider from 'rc-slider'

import styles from './styles/IndustryChallenges.module.scss'

export default function IndustryChallenges() {
  const [activeIndex, setActiveIndex] = useState(0)
  const marks = {
    0: `
    ความหลากหลายของข้อมูลที่ทำให้
    ไม่สามารถจัดข้อมูลให้เป็นหมวดหมู่ได้
    `,
    1: `
    การขาดแคลน
    ผู้จัดการมีฝีมือ
    `,
    2: `
    ภัยคุกคามต่อความปลอดภัยทางออนไลน์
    `,
  }
  return (
    <div>
      {
        activeIndex == 0 && <object className={styles['svg']} type="image/svg+xml" data="svg/common/data-living-in-silos.svg"/>
      } 
      {  
        activeIndex == 1 && <object className={styles['svg']} type="image/svg+xml" data="svg/common/lack-of-skilled-managers.svg"/>
      } 
      { 
        activeIndex == 2 && <object className={styles['svg']} type="image/svg+xml" data="svg/common/cybersecurity-threats.svg"/>
      }
      <div className="space-div" />
      <Row>
        <Col xs={{ size: 10, offset: 1 }} lg={{size: 8, offset: 2 }}>
          <Slider 
            className={styles['slider']}
            min={0} 
            max={2} 
            marks={marks} 
            included={false} 
            value={activeIndex} 
            onChange={setActiveIndex}
            railStyle={{backgroundColor: '#1CA7EC', marginTop: 35}}
            dotStyle={{borderColor: '#1CA7EC', backgroundColor: '#1CA7EC', height: 30, width: 30, marginLeft: -15, marginBottom: -45}}
            handleStyle={{borderColor: '#1E3998', backgroundColor: '#1E3998', height: 30, width: 30, marginLeft: 0, marginTop: 20}}
          />
        </Col>
      </Row>
      {
        activeIndex == 0 && (
          <div className={styles['description']}>
            <p>
              ตามการวิจัยของ IDC ปริมาณข้อมูลจากอุตสาหกรรมการผลิตแทบจะไม่ได้ถูกจัดเก็บเข้าระบบให้เป็นหมวดหมู่<br/>
              ผู้ปฏิบัติการและวิศวกรต้องรวบรวมข้อมูลที่กระจัดกระจายเหล่านี้ด้วยตนเอง<br/>
              ซึ่งเป็นกระบวนการที่ยืดเยื้อและสิ้นเปลืองเวลา<br/>
              มีส่วนทำให้ไม่เกิดนวัตกรรมใหม่และไม่เป็นการส่งเสริมต่อความร่วมมือในองค์กร<br/>
            </p>
          </div>
        ) 
      }
      {
        activeIndex == 1 && (
          <div className={styles['description']}>
            <p>
              งานวิจัย McKinsey เปิดเผยว่าบริษัทในภูมิภาคอาเซียนประสบปัญหาการขาดแคลนผู้จัดการที่มีความเข้าใจในเทคโนโลยี<br/>
              และนวัตกรรมใหม่ ที่สามารถประยุกต์ใช้กลยุทธ์ในการเปลี่ยนแปลงอย่างเหมาะสมและการขาดความรู้ความเข้าใจ ว่ากระบวนการทำงานใหม่ทั้งหมดนี้จะช่วย<br/>
              เพิ่มประสิทธิภาพการทำงานได้อย่างไร<br/>
            </p>
          </div>
        )
      }
      { 
        activeIndex == 2 && (
          <div className={styles['description']}>
            <p>
              บทความวิจัยของบริษัท Deloitteระบุอย่างชัดเจนเกี่ยวกับผู้ผลิตมีความเสี่ยงอย่างมาก<br/>
              ตั้งแต่มีการใช้ระบบออนไลน์ในกระบวนการผลิต มีความเป็นไปได้ที่มัลแวร์ขั้นสูงที่มาพร้อมการโจมตี<br/>
              โดยผู้ไม่ประสงค์ดีผ่านทางช่องโหว่ (Zero-Day Exploit) ที่เล็งเป้าหมายไปที่อุปกรณ์ที่มีความเสี่ยง<br/>
              โดยแทบไม่ต้องใช้มนุษย์ในการเข้าถึง ความน่ากังวลนี้เน้นย้ำถึงความจำเป็นที่ต้องมี<br/>
              ผู้ผลิตอุปกรณ์ Internet of Things ที่สามารถสร้างความปลอดภัยให้กับกระบวนการผลิตได้<br/>
            </p>
          </div>
        )
      }
    </div>
  )
}