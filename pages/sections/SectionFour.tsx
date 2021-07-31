import { Row, Col } from 'reactstrap'

import LumadaSolutions from '../components/LumadaSolutions'
import styles from './styles/SectionFour.module.scss'

export default function SectionFour() {
  return (
    <div id="section-four" className={`section ${styles['section-four']}`}>
      <img src="img/s4-bgl.svg" className={styles['bg-left']} />
      <img src="img/s4-bgr.svg" className={styles['bg-right']} />
      <div>
        <h2>
          การสร้างโรงงานอัจฉริยะด้วย
        </h2>
        <div className={styles['underline']} />
        <h1>
          ศูนย์ LUMADA
        </h1>
      </div>

      <div>
        <p>
          ด้วยความเชื่อมั่นอย่างแรงกล้าถึงอนาคตอุตสาหกรรมการผลิตของในภูมิภาคอาเซียน Hitachi ได้ดำเนินการขั้นแรกในการสร้างศูนย์ Lumada ในประเทศไทย <br/>
          ในปี 2018 เป้าหมายของ ศูนย์ Lumada คือเป็นศูนย์รวมบริการดิจิทัลที่จะติดตั้งระบบศักยภาพ ในด้านอินเตอร์เน็ตของสรรพสิ่ง ระบบวิเคราะห์คลังข้อมูลขนาดใหญ่ <br/>
          ให้กับองค์กรในภูมิภาคเอเชียตะวันออกเฉียงใต้ในการก้าวอุตสาหกรรม 4.0 
        </p>
      </div>

      <div className="space-div" />
      <div className="space-div" />

      <div>
        <img src="svg/common/lumada.svg" width="200" height="100" />
      </div>

      <p>
        ศูนย์ Lumada เป็นแพลตฟอร์ม ในด้านอินเตอร์เน็ตของสรรพสิ่ง ที่ให้คุณและ Hitachiร่วมกันสร้างผลิตภัณฑ์ดิจิทัลที่กำหนดให้ตรงกับความต้องการทางธุรกิจของคุณ <br/>
        และให้คุณเข้าถึงเทคโนโลยีขั้นสูงของ Hitachi ผ่านบริการวิเคราะห์ข้อมูลของคุณ ซึ่งจะนำไปใช้ในการเพิ่มมูลค่าให้กับ <br/>
        การประกอบธุรกิจผ่านการใช้ระบบวิเคราะห์ข้อมูลจากปัญญาประดิษฐ์
      </p>

      <p>
        เมื่อได้ทำงานใกล้ชิดกับผู้ผลิต ทำให้ Hitachi เข้าใจดีว่าเป็นเรื่องที่น่ากลัวกังวลเมื่อได้ฟังเรื่องราวเกี่ยวกับโรงงานอัจฉริยะและระบบวิเคราะห์ข้อมูล <br/>
        เป็นครั้งแรก อย่างไรก็ตาม ผู้ผลิตหลายรายมีการตอบรับมากขึ้นหลังได้เรียนรู้ว่าเทคโนโลยีใหม่ <br/>
        นั้นจะช่วยลดต้นทุน เพิ่มผลผลิต และเพิ่มกำไรให้กับพวกเขาได้อย่างไร
      </p>

      <div className="space-div" />
      <div className="space-div" />

      <div className={styles['quote-open']}>&#8220;</div>

      <div className={styles['quote-description']}>
        &#8220;ภาคการผลิตของภูมิภาคอาเซียนต้องทำการปฏิรูปทางดิจิทัลหากคิดจะปรับปรุงการแข่งขันเชิงต้นทุน <br/>
        และการแข่งขันเชิงความเสี่ยง ระบบปัญญาประดิษฐ์และระบบวิเคราะห์เป็นองค์ประกอบหลัก <br/>
        ของผลิตภัณฑ์การผลิตอัจฉริยะของ Hitachi ที่จะเข้ามามีส่วนช่วยในเรื่องนี้
        &#8221;
      </div>

      <div className="space-div" />
      <div>
        <Row>
          <Col className="align-right" xs={{ size: 5 }}>
            <img className={styles['quote-pic']} src="img/Akihiro-Ohashi.jpg" />
          </Col>
          <Col className="align-left" xs={{ size: 7 }}>
            <div className={styles['quote-by']}>Mr. Akihiro Ohashi</div>
            <div className={styles['quote-by']}>Executive Director</div>
            <div className={styles['quote-by']}>ICT Solutions Business</div>
            <div className={styles['quote-by']}>Hitachi Asia (Thailand) Co., Ltd</div>
          </Col>
        </Row>
      </div>

      <div className="space-div" />
      <div className="space-div" />

      <p>
        นอกจากการสร้างโรงงานอัจฉริยะ Hitachi มีเป้าหมายที่จะยกระดับอุตสาหกรรมด้านการขนส่งด้วยการใช้เทคโนโลยีอัจฉริยะ <br/>
        กับระบบเครือข่ายการขนส่งทั้งหมด
      </p>

      <div className="space-div" />
      <div className="space-div" />
      <div className="space-div" />
      <div className="space-div" />

      <h3>
        ในปี 2019 Hitachi เปิดตัวบริการใช้ยานพาหนะเพื่อการพาณิชย์ <br/>
        ร่วมกันในประเทศไทย
      </h3>

      <div className="space-div" />
      <div className="space-div" />

      <p className={styles['float']}>
        ด้วยบริการนี้ เจ้าของธุรกิจสามารถ<a href="https://meeit.biz/en/service/service_tst_ai_logistics/" target="_blank"><u>ใช้ประโย</u></a>ชน์จากยานพาหนะที่ยกเลิกการให้บริการไปแล้วในระบบขนส่งของพวกเขา <br/>
        เพื่อร่วมกันให้บริการจัดส่งของไปยังสถานที่ ที่มีปลายทางในเส้นทางที่ใกล้กัน

      </p>

      <img src="img/s4-bg.jpg" className={`bg ${styles['bg']}`} />
      
      <div className="space-div" />
      <div className="space-div" />

      <div className="video-container">
        <iframe src="https://www.youtube-nocookie.com/embed/jXPTUd_l5YU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      <div className="space-div" />
      <div className="space-div" />

      <h3>
        Hitachi ยังคงไม่หยุดที่จะพัฒนาศักยภาพของ ศูนย์ Lumada ให้ก้าวไกลกว่าเดิมด้วยการร่วมมือกับคู่ค้าที่มีความเชี่ยวชาญในด้านการวิจัย
      </h3>

      <p>
        ด้วยความร่วมมือดังกล่าว  Hitachi สามารถเสนอผลิตภัณฑ์ ให้กับผู้ผลิตในสามส่วน ได้แก่
      </p>

      <LumadaSolutions />
    </div>
  )
}