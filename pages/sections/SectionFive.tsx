import { Row, Col } from 'reactstrap'

import CaseCard from '../components/CaseCard'

import styles from './styles/SectionFive.module.scss'

export default function SectionFive() {
  return (
    <div id="section-five" className={`section ${styles['section-five']}`}>
      <h3>
        หากคุณสนใจต้องการเรียนรู้เพิ่มเติมเกี่ยวกับบริการการผลิตอัจฉริยะของ Hitachi จะสามารถช่วยคุณได้อย่างไร
      </h3>
      <div className="space-div" />
      <h6>
        กรุณากดเข้าดู เพื่อศึกษาในงานวิจัยของเราเพิ่มเติม
      </h6>

      <Row>
        <Col xs={{ size: 6, offset: 3 }} lg={{ size: 8, offset: 2 }}>
          <Row>
            <Col lg={{ size: 6 }}>
              <CaseCard 
                number={'01'}
                description={`เครื่องมือช่วยในการวิเคราะห์ข้อมูล - วิธีที่ GM และ
                Hitachi เปลี่ยนจากการผลิตยานยนต์
                เป็นการผลิตหน้ากากอนามัยใน 6 วัน
                `}
                href={'http://social-innovation.hitachi/en-sg/case_studies/pivot-power-gm-hitachi'}
                img={'img/case-1.jpg'}
              />
            </Col>
            <Col lg={{ size: 6 }}>
              <CaseCard 
                number={'02'}
                description={`การควบคุมภาพรวมโรงงานผลิต JUKI
                กับความรู้และทักษะ
                ในการปฏิบัติการของ Hitachi 
                เพื่อทำให้สำนักงาน MONOZUKURI 
                ก้าวหน้าทางด้านการผลิต
                `}
                href={'http://social-innovation.hitachi/en-sg/case_studies/juki'}
                img={'img/case-2.jpg'}
              />
            </Col>
            <Col lg={{ size: 6 }}>
              <CaseCard 
                number={'03'}
                description={`โรงงานเริ่มหันไปใช้
                ระบบการทำงานระยะไกล
                ในช่วงที่มีการแพร่ระบาดของไวรัสโคโรนาสายพันธุ์ใหม่: 
                ความคาดหวังของโรงงานอัจฉริยะแห่งอนาคต
                `}
                href={'http://social-innovation.hitachi/en-sg/case_studies/smart-factory'}
                img={'img/case-3.jpg'}
              />
            </Col>
            <Col lg={{ size: 6 }}>
              <CaseCard 
                number={'04'}
                description={`มอบรอยยิ้มในชีวิตประจำวันของเรา – 
                อุตสาหกรรมอาหารแช่แข็ง
                กำลังวิวัฒนาการด้วย
                เทคโนโลยีดิจิทัล
                `}
                href={'http://social-innovation.hitachi/en-sg/case_studies/nichireifoods'}
                img={'img/case-4.jpg'}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="space-div" />
      
      <h6>
        กรุณากด<a href="./references/references_id.pdf"><u>ที่นี่</u></a>เพื่อดาวน์โหลดเอกสารอ้างอิงสำหรับรูปแบบอินโฟกราฟิกนี้
      </h6>
    </div>
  )
}