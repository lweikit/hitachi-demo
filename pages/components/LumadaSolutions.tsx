import { Row, Col } from 'reactstrap'

import styles from './styles/LumadaSolutions.module.scss'

export default function LumadaSolutions() {
  return (
    <Row>
      <Col xs={{ size: 12 }} lg={{ size: 4 }}>
        <object className={styles['svg']} type="image/svg+xml" data="svg/common/increase-productivity.svg"/>
        <h4 className={styles['bold']}>
          การเพิ่มผลผลิต <br/>
          ในอุตสาหกรรมการผลิต
        </h4>
        <p>
          วิเคราะห์ข้อมูลที่รวบรวมจาก <br/>
          ภาคส่วนการผลิตเพื่อปรับสมดุล <br/>
          การปฏิบัติการในโรงงาน
        </p>
      </Col>
      <Col xs={{ size: 12 }} lg={{ size: 4 }}>
        <object className={styles['svg']} type="image/svg+xml" data="svg/common/optimise-logistics.svg"/>
        <h4 className={styles['bold']}>
          เพิ่มประสิทธิภาพด้านการขนส่ง <br/>
          ด้วยระบบวิเคราะห์ข้อมูล
        </h4>
        <p>
          วิเคราะห์ความหนาแน่นของระบบจราจร พื้นที่จัดเก็บสินค้า <br/>
          และสถานที่จัดส่ง <br/>
          เพื่อสร้างเส้นทางพิเศษให้ระยะทางสั้นลงและ <br/>
          จัดส่งสินค้าได้เร็วขึ้น
        </p>
      </Col>
      <Col xs={{ size: 12 }} lg={{ size: 4 }}>
        <object className={styles['svg']} type="image/svg+xml" data="svg/common/predictive-maintenance.svg"/>
        <h4 className={styles['bold']}>
          การคาดการณ์ <br/>
          ระบบซ่อมบำรุง
        </h4>
        <p>
          การคาดการณ์ระบบซ่อมบำรุง <br/>
          ระบบช่วยเหลือระยะไกลแบบทันการณ์ <br/>
          และการฝึกอบรมระยะไกลสำหรับ <br/>
          เจ้าหน้าที่หน้างาน
        </p>
      </Col>
    </Row>
  )
}