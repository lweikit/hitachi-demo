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
        ด้วยความมุ่งมั่นที่จะพัฒนาไปสู่อุตสาหกรรม 4.0 อย่างรวดเร็วผู้ผลิตในภูมิภาคอาเซียนกำลังเร่งนำเทคโนโลยี<br/>
        มาพัฒนาระบบการผลิต ร้อยละ 39 ของผู้ผลิตได้นำระบบศูนย์ควบคุมกลางมาใช้<br/>
        ซึ่งเป็นแนวทางในการเพิ่มผลผลิตและความโปร่งใสของระบบการผลิตตั้งแต่ต้นน้ำไปจนถึงปลายน้ำ<br/>
      </p>

      <div className="space-div" />
      <h3>
        ร้อยละ 25 ของผู้ผลิตกำลังเร่งปรับใช้ระบบการทำงานอัตโนมัติ<br/>
        เพื่อทดแทนการขาดแคลนแรงงาน<br/>
        จากการแพร่ระบาดของโรคติดเชื้อไวรัสโคโรนา 2019<br/>
      </h3>
      <div className="space-div" />

      <p>
        แม้ว่าการเปลี่ยนแปลงความต้องการระบบอัตโนมัติเพิ่มขึ้นอย่างรวดเร็วเป็นเรื่องที่น่าประทับใจ<br/>
        แต่การแข่งขันในการกลายเป็นโรงงานอัจฉริยะแห่งอนาคตนั้นประกอบไปด้วยความท้าทาย 3 ประการได้แก่<br/>
        ความหลากหลายของข้อมูลที่ทำให้ไม่สามารถจัดข้อมูลให้เป็นหมวดหมู่ การขาดแคลนผู้จัดการที่มีฝีมือ<br/>
        และภัยคุกคามต่อความปลอดภัยทางออนไลน์<br/>
      </p>

      <IndustryChallenges />
    </div>
  )
}