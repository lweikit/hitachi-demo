import { Row, Col } from 'reactstrap'

import CaseCard from '../components/CaseCard'

import styles from './styles/SectionFive.module.scss'

export default function SectionFive() {
  return (
    <div id="section-five" className={`section ${styles['section-five']}`}>
      <h3>Interested to learn more about how Hitachi Smart Manufacturing can help you?</h3>
      <div className="space-div" />
      <h6>Click on one of our case studies to find out more now.</h6>

      <Row>
        <Col xs={{ size: 6, offset: 3 }} lg={{ size: 8, offset: 2 }}>
          <Row>
            <Col lg={{ size: 6 }}>
              <CaseCard 
                number={'01'}
                description={'Pivot Power - How GM and Hitachi moved from autos to medical masks in 6 days'}
                href={'http://social-innovation.hitachi/en-sg/case_studies/pivot-power-gm-hitachi'}
                img={'img/case-1.jpg'}
              />
            </Col>
            <Col lg={{ size: 6 }}>
              <CaseCard 
                number={'02'}
                description={'Merging JUKI production facilities with Hitachi\'s operation know-how to bring advances to MONOZUKURI workplaces'}
                href={'http://social-innovation.hitachi/en-sg/case_studies/juki'}
                img={'img/case-2.jpg'}
              />
            </Col>
            <Col lg={{ size: 6 }}>
              <CaseCard 
                number={'03'}
                description={'Factories are trending towards Remote Work amid COVID-19: Expectations of Smart Factories of the future'}
                href={'http://social-innovation.hitachi/en-sg/case_studies/smart-factory'}
                img={'img/case-3.jpg'}
              />
            </Col>
            <Col lg={{ size: 6 }}>
              <CaseCard 
                number={'04'}
                description={'Delivering Smiles to our daily lives - The frozen foods industry is evolving with digital technology'}
                href={'http://social-innovation.hitachi/en-sg/case_studies/nichireifoods'}
                img={'img/case-4.jpg'}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="space-div" />
      
      <h6>
        Click 
        <a href="https://www.hitachi.com.sg/SIB-smartmanufacturing/references.pdf"> <u>here</u> </a> 
        to download reference for this infographic.
      </h6>
    </div>
  )
}