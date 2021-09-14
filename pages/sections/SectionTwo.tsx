import TrackVisility from 'react-on-screen'

import LineDown from '../components/LineDown'
import DataByPercent from '../components/DataByPercent'
import styles from './styles/SectionTwo.module.scss'

export default function SectionTwo() {
  return (
    <div id="section-two" className={`section ${styles['section-two']}`}>
      <h2>
        การปฏิรูป
      </h2>
      <div className={styles['underline']} />
      <h1>
        อย่างเร่งด่วน
      </h1>

      <div className="space-div" />
      <TrackVisility once>
        {
          ({ isVisible }) => isVisible && <LineDown type="teal" />
        }
      </TrackVisility>
      <div className="space-div" />

      <h3>
        การแพร่ระบาดของโรคติดเชื้อไวรัสโคโรนา 2019<br/>
        กระตุ้นให้ต้องสร้างระบบปฏิบัติการที่ทันสมัย<br/>
      </h3>

      <p>
        การพึ่งพาแรงงานของมนุษย์ในกระบวนการผลิตผนวกกับการขาดวิสัยทัศน์ในการออกแบบระบบการผลิต<br/>
        ตั้งแต่ต้นน้ำไปจนถึงปลายน้ำทำให้เป็นอุปสรรคต่อผู้ผลิตกับการตอบสนองการขับเคลื่อนธุรกิจ<br/>
        ในยุคที่ความต้องการของผู้บริโภคมีความไม่แน่นอน การปรับปรุงกระบวนการเหล่านี้ให้ทันสมัยขึ้นเป็นสิ่งจำเป็น<br/>
        สำหรับผู้ผลิตต่อการฟื้นตัวจากการแพร่ระบาดของโรคติดเชื้อไวรัสโคโรนา 2019 ได้อย่างรวดเร็ว<br/>
      </p>
      
      <div className="space-div" />
      <div className="space-div" />

      <div className="video-container">
        <iframe src="https://www.youtube-nocookie.com/embed/FSU6oThPaNA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      <div className="space-div" />
      <h3>
        กล่าวได้ว่าการแพร่ระบาดของโรคติดเชื้อไวรัสโคโรนา 2019<br/>
        เป็นตัวขับเคลื่อนหลัก<br/>
        สู่การปฏิรูปเร่งด่วนในอุตสาหกรรมภาคส่วนนี้<br/>
      </h3>
      <div className="space-div" />

      <DataByPercent />
      <img src="img/s2-bg.jpg" className={`bg ${styles['bg']}`} />
    </div>
  )
}