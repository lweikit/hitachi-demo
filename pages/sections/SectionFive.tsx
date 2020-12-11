import { Row, Col } from 'reactstrap'

import CaseCard from '../components/CaseCard'

import styles from './styles/SectionFive.module.scss'

export default function SectionFive() {
  return (
    <div id="section-five" className={`section ${styles['section-five']}`}>
      <h3>Interested to learn more about Hitachi Smart Manufacturing capabilities?</h3>
      <div className="space-div" />
      <h6>Click on one of our case studies to find out more now.</h6>

      <Row>
        <Col xs={{ size: 6, offset: 3 }} lg={{ size: 8, offset: 2 }}>
          <Row>
            <Col lg={{ size: 6 }}>
              <CaseCard 
                number={'01'}
                description={'Pivot Power - How GM and Hitachi moved from autos to medical masks in 6 days'}
              />
            </Col>
            <Col lg={{ size: 6 }}>
              <CaseCard 
                number={'02'}
                description={'Merging JUKI production facilities with Hitachi\'s operation know-how to bring advances to MONOZUKURI workplaces'}
              />
            </Col>
            <Col lg={{ size: 6 }}>
              <CaseCard 
                number={'03'}
                description={'Factories are trending towards Remote Work amid COVID-19: Expectations of Smart Factories of the future'}
              />
            </Col>
            <Col lg={{ size: 6 }}>
              <CaseCard 
                number={'04'}
                description={'Delivering Smiles to our daily lives - The frozen foods industry is evolving with digital technology'}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="space-div" />
      
      <h6>
        Click 
        <a href="#"> here </a> 
        to download reference for this infographic.
      </h6>
    </div>
  )
}