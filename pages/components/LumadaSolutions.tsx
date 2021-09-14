import { Row, Col } from 'reactstrap'

import styles from './styles/LumadaSolutions.module.scss'

export default function LumadaSolutions() {
  return (
    <Row>
      <Col xs={{ size: 12 }} lg={{ size: 4 }}>
        <object className={styles['svg']} type="image/svg+xml" data="svg/common/increase-productivity.svg"/>
        <h4 className={styles['bold']}>
          การเพิ่มผลผลิต<br/>
          ในอุตสาหกรรมการผลิต<br/>
        </h4>
        <p>
          วิเคราะห์ข้อมูลที่รวบรวมจาก<br/>
          ภาคส่วนการผลิตเพื่อปรับสมดุล<br/>
          การปฏิบัติการในโรงงาน<br/>
        </p>
      </Col>
      <Col xs={{ size: 12 }} lg={{ size: 4 }}>
        <object className={styles['svg']} type="image/svg+xml" data="svg/common/optimise-logistics.svg"/>
        <h4 className={styles['bold']}>
          เพิ่มประสิทธิภาพด้านการขนส่ง<br/>
          ด้วยระบบวิเคราะห์ข้อมูล<br/>
        </h4>
        <p>
          วิเคราะห์ความหนาแน่นของระบบจราจร<br/>
          พื้นที่จัดเก็บสินค้าและสถานที่จัดส่ง<br/>
          เพื่อสร้างเส้นทางพิเศษ<br/>
          ให้ระยะทางสั้นลง<br/>
          และจัดส่งสินค้าได้เร็วขึ้น<br/>
        </p>
      </Col>
      <Col xs={{ size: 12 }} lg={{ size: 4 }}>
        <object className={styles['svg']} type="image/svg+xml" data="svg/common/predictive-maintenance.svg"/>
        <h4 className={styles['bold']}>
          การคาดการณ์<br/>
          ระบบซ่อมบำรุง<br/>
        </h4>
        <p>
          สามารถช่วยเหลือผู้ผลิตในการประเมินการซ่อมบำรุง<br/>
          เครื่องจักรล่วงหน้าทั้งแบบทันการณ์และระยะไกล<br/>
          รวมถึงการฝึกอบรมให้กับเจ้าหน้าที่หน้างานที่อยู่ต่างพื้นที่ด้วย<br/>
        </p>
      </Col>
    </Row>
  )
}