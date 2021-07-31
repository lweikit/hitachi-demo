import TrackVisility from 'react-on-screen'

import LineDown from '../components/LineDown'
import DataByPercent from '../components/DataByPercent'
import styles from './styles/SectionTwo.module.scss'

export default function SectionTwo() {
  return (
    <div id="section-two" className={`section ${styles['section-two']}`}>
      <h2>
        การปฏิวัติ
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
        การแพร่ระบาดของไวรัสโคโรนาสายพันธุ์ใหม่ กระตุ้นให้ต้องสร้างระบบปฏิบัติการที่ทันสมัย
      </h3>

      <p>
        การพึ่งพากระบวนการและการปฏิบัติการผลิตที่ต้องใช้แรงงานของมนุษย์ ผนวกกับการขาดวิสัยทัศน์ในการออกแบบ <br/>
        ระบบโซ่อุปทานทำให้เป็นอุปสรรคต่อผู้ผลิตในการตอบสนองการขับเคลื่อนในยุคที่ความต้องการไม่แน่นอน <br/>
        การปรับปรุงกระบวนการเหล่านี้ให้ทันสมัยขึ้นเป็นสิ่งจำเป็นสำหรับผู้ผลิตในการฟื้นตัวจากการระบาดแพร่ของไวรัสโคโรนาสายพันธุ์ใหม่ได้อย่างรวดเร็ว
      </p>
      
      <div className="space-div" />
      <div className="space-div" />

      <div className="video-container">
        <iframe src="https://www.youtube-nocookie.com/embed/FSU6oThPaNA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      <div className="space-div" />
      <h3>
        กล่าวได้ว่า การระบาดแพร่ของไวรัสโคโรนาสายพันธุ์ใหม่กำลังเป็นตัวขับเคลื่อนหลัก <br/>
        สู่การปฏิรูปเร่งด่วนในอุตสาหกรรมภาคส่วนนี้
      </h3>
      <div className="space-div" />

      <DataByPercent />
      <img src="img/s2-bg.jpg" className={`bg ${styles['bg']}`} />
    </div>
  )
}