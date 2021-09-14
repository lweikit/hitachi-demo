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
        กรุณากดเข้าดูเพื่อทำความเข้าใจกรณีศึกษาของเราเพิ่มเติม
      </h6>

      <Row>
        <Col xs={{ size: 6, offset: 3 }} lg={{ size: 8, offset: 2 }}>
          <Row>
            <Col lg={{ size: 6 }}>
              <CaseCard 
                number={'01'}
                description={
`เครื่องมือช่วยในการวิเคราะห์ข้อมูล - วิธีที่ GM และ
Hitachi เปลี่ยนจากการผลิตยานยนต์
เป็นการผลิตหน้ากากอนามัยใน 6 วัน`
                }
                href={'http://social-innovation.hitachi/en-sg/case_studies/pivot-power-gm-hitachi'}
                img={'img/case-1.jpg'}
              />
            </Col>
            <Col lg={{ size: 6 }}>
              <CaseCard 
                number={'02'}
                description={
`การร่วมมือกันระหว่าง
โรงงานผลิต JUKI 
กับความเชี่ยวชาญ
การปฏิบัติการของ Hitachi 
นำไปสู่ความล้ำหน้า
ด้านการผลิตที่เหนือกว่า`
                }
                href={'http://social-innovation.hitachi/en-sg/case_studies/juki'}
                img={'img/case-2.jpg'}
              />
            </Col>
            <Col lg={{ size: 6 }}>
              <CaseCard 
                number={'03'}
                description={
`เมื่อระบบการทำงานระยะไกล
เริ่มเป็นที่ต้องการสำหรับ
โรงงานส่วนใหญ่ในช่วงที่มี
การแพร่ระบาดของโรคติดเชื้อไวรัสโคโรนา 2019 
ความคาดหวังของการมี
โรงงานอัจฉริยะในอนาคตจึงเกิดขึ้น`
                }
                href={'http://social-innovation.hitachi/en-sg/case_studies/smart-factory'}
                img={'img/case-3.jpg'}
              />
            </Col>
            <Col lg={{ size: 6 }}>
              <CaseCard 
                number={'04'}
                description={
`มอบรอยยิ้มให้กับการใช้ชีวิตในทุกวันของเรา
เทคโนโลยีดิจิทัลสามารถช่วยเพิ่มผลผลิต
ให้กับอุตสาหกรรมอาหารแช่แข็ง
ที่เติบโตขึ้นอย่างรวดเร็ว`
                }
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