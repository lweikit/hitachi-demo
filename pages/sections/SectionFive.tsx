import { Row, Col } from 'reactstrap'

import CaseCard from '../components/CaseCard'

import styles from './styles/SectionFive.module.scss'

export default function SectionFive() {
  return (
    <div id="section-five" className={`section ${styles['section-five']}`}>
      <h3>
        Ingin mengetahui bagaimana Hitachi Smart Manufacturing dapat membantu Anda?
      </h3>
      <div className="space-div" />
      <h6>
        Klik pada salah satu kisah-kisah berikut untuk mengetahui lebih lanjut.
      </h6>

      <Row>
        <Col xs={{ size: 6, offset: 3 }} lg={{ size: 8, offset: 2 }}>
          <Row>
            <Col lg={{ size: 6 }}>
              <CaseCard 
                number={'01'}
                description={'Pivot Power - Bagaimana GM dan Hitachi bertransformasi dari industri otomotif ke masker medis dalam waktu 6 hari'}
                href={'http://social-innovation.hitachi/en-sg/case_studies/pivot-power-gm-hitachi'}
                img={'img/case-1.jpg'}
              />
            </Col>
            <Col lg={{ size: 6 }}>
              <CaseCard 
                number={'02'}
                description={'Menerapkan pengetahuan operasional Hitachi pada fasilitas produksi JUKI untuk memperkenalkan teknologi terkini pada tempat kerja MONOZUKURI'}
                href={'http://social-innovation.hitachi/en-sg/case_studies/juki'}
                img={'img/case-2.jpg'}
              />
            </Col>
            <Col lg={{ size: 6 }}>
              <CaseCard 
                number={'03'}
                description={'Semakin banyak pabrik yang beralih ke Remote Work di tengah pandemi COVID-19: Harapan Pabrik Pintar di masa depan'}
                href={'http://social-innovation.hitachi/en-sg/case_studies/smart-factory'}
                img={'img/case-3.jpg'}
              />
            </Col>
            <Col lg={{ size: 6 }}>
              <CaseCard 
                number={'04'}
                description={'Menorehkan Senyum dalam kehidupan sehari-hari – Industri makanan beku bertransformasi dengan teknologi digital'}
                href={'http://social-innovation.hitachi/en-sg/case_studies/nichireifoods'}
                img={'img/case-4.jpg'}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="space-div" />
      
      <h6>
        Klik
        <a href="https://www.hitachi.com.sg/SIB-smartmanufacturing/references.pdf"> <u>di sini</u> </a> 
        untuk mengunduh rujukan infografik ini.
      </h6>
    </div>
  )
}