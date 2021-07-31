import TrackVisility from 'react-on-screen'

import IndustryChallenges from '../components/IndustryChallenges'
import LineDown from '../components/LineDown'
import styles from './styles/SectionThree.module.scss'

export default function SectionThree() {
  return (
    <div id="section-three" className={`section ${styles['section-three']}`}>
      <h2>
        ความท้าทายของการแข่งขัน
      </h2>
      <div className={styles['underline']} />
      <h1>
        ในภาคอุตสาหกรรม 4.0
      </h1>

      <div className="space-div" />
      <TrackVisility once>
        {
          ({ isVisible }) => isVisible && <LineDown type="blue" />
        }
      </TrackVisility>
      <div className="space-div" />

      <p>
        ด้วยความมุ่งมั่นที่จะพัฒนาไปสู่อุตสาหกรรม 4.0 อย่างรวดเร็วผู้ผลิตอาเซียนจึงเร่งพัฒนายกระดับทางเทคโนโลยี <br/>
        ร้อยละ 39 ของผู้ผลิตได้นำระบบศูนย์กลางหรือศูนย์ควบคุมมาใช้ ซึ่งเป็นแนวทางในการ <br/>
        เพิ่มความโปร่งใสของห่วงโซ่อุปทานจากต้นจนจบ
      </p>

      <div className="space-div" />
      <h3>
        ร้อยละ 25 ของผู้ผลิตกำลังเร่งปรับใช้โปรแกรมระบบการทำงานอัตโนมัติเพื่อทดแทนการขาดแคลนแรงงานจาก สถานการณ์การระบาดแพร่ของไวรัสโคโรนาสายพันธุ์ใหม่
      </h3>
      <div className="space-div" />

      <p>
        แม้ว่าการเปลี่ยนแปลงที่เพิ่มขึ้นอย่างรวดเร็วนั้นสร้างความประทับใจ แต่การแข่งขันที่จะกลายเป็นโรงงานอัจฉริยะแห่งอนาคตนั้นเต็มไปด้วยความท้าทายสามประการ <br/>
        ได้แก่: ความหลากหลายของข้อมูลที่ทำให้ไม่สามารถจัดข้อมูลให้เป็นหมวดหมู่ได้การขาดแคลนผู้จัดการที่มีฝีมือ และภัยคุกคามต่อความปลอดภัยทางออนไลน์
      </p>

      <IndustryChallenges />
    </div>
  )
}