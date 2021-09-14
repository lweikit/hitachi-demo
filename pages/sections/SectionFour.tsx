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
          ด้วยความเชื่อมั่นอย่างแรงกล้าถึงอนาคตอุตสาหกรรมการผลิตภูมิภาคอาเซียน<br/>
          Hitachi ได้ดำเนินการขั้นแรกในการสร้างศูนย์ Lumada ในประเทศไทยเมื่อปีพ.ศ. 2561<br/>
          ด้วยเป้าหมายคือเป็นศูนย์รวมบริการดิจิทัลที่จะติดตั้งระบบศักยภาพ<br/>
          ในด้าน Internet of Things และระบบวิเคราะห์คลังข้อมูลขนาดใหญ่<br/>
          ให้กับองค์กรในภูมิภาคเอเชียตะวันออกเฉียงใต้เพื่อการก้าวสู่อุตสาหกรรม 4.0<br/>
        </p>
      </div>

      <div className="space-div" />
      <div className="space-div" />

      <div>
        <img src="svg/common/lumada.svg" width="200" height="100" />
      </div>

      <p>
        ศูนย์ Lumada เป็นแพลตฟอร์มในด้าน Internet of Things ที่ให้คุณและ Hitachi ร่วมกันสร้างดิจิทัลโซลูชั่น<br/>
        ได้ตรงกับความต้องการทางธุรกิจของคุณและให้คุณเข้าถึงเทคโนโลยีขั้นสูงของ Hitachi<br/>
        ผ่านบริการการวิเคราะห์ข้อมูลจากปัญญาประดิษฐ์<br/>
        ซึ่งจะนำไปใช้ในการเพิ่มมูลค่าให้กับกระบวนการผลิตของคุณ<br/>
      </p>

      <p>
        เมื่อได้ทำงานใกล้ชิดกับผู้ผลิต ทำให้ Hitachi เข้าใจดีว่าเป็นเรื่องที่น่ากังวล<br/>
        เมื่อได้ฟังเรื่องราวเกี่ยวกับโรงงานอัจฉริยะและระบบวิเคราะห์ข้อมูลเป็นครั้งแรก<br/>
        อย่างไรก็ตามผู้ผลิตหลายรายมีการตอบรับมากขึ้นหลังได้เรียนรู้เทคโนโลยีที่เกิดขึ้นใหม่<br/>
        ซึ่งสามารถช่วยลดต้นทุน เพิ่มผลผลิตและผลกำไรให้กับพวกเขาได้อย่างไร<br/>
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
        ในปีพ.ศ. 2562 Hitachi ได้เปิดตัวบริการการแบ่งปัน<br/>
        การใช้ยานพาหนะเพื่อการพาณิชย์ร่วมกันในประเทศไทย<br/>
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
        ด้วยความร่วมมือผ่านการวิจัยกับหลากหลายบริษัทที่เชี่ยวชาญด้านเทคโนโลยี<br/> 
        Hitachi สามารถนำเสนอผลิตภัณฑ์ให้กับผู้ผลิตโดยแบ่งออกเป็นสามส่วน<br/>
      </p>

      <LumadaSolutions />
    </div>
  )
}