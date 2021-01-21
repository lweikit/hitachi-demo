import { useState } from 'react'
import { Row, Col } from 'reactstrap'
import Slider from 'rc-slider'

import styles from './styles/IndustryChallenges.module.scss'

export default function IndustryChallenges() {
  const [activeIndex, setActiveIndex] = useState(0)
  const marks = {
    0: 'Data living in silos',
    1: 'Lack of skilled managers',
    2: 'Cybersecurity threats',
  }
  return (
    <div>
      {
        activeIndex == 0 && <object className={styles['svg']} type="image/svg+xml" data="svg/data-living-in-silos.svg"/>
      } 
      {  
        activeIndex == 1 && <object className={styles['svg']} type="image/svg+xml" data="svg/lack-of-skilled-managers.svg"/>
      } 
      { 
        activeIndex == 2 && <object className={styles['svg']} type="image/svg+xml" data="svg/cybersecurity-threats.svg"/>
      }
      <div className="space-div" />
      <Row>
        <Col xs={{ size: 10, offset: 1 }} lg={{size: 8, offset: 2 }}>
          <Slider 
            className={styles['slider']}
            min={0} 
            max={2} 
            marks={marks} 
            included={false} 
            value={activeIndex} 
            onChange={setActiveIndex}
            railStyle={{backgroundColor: '#1CA7EC'}}
            dotStyle={{borderColor: '#1CA7EC', backgroundColor: '#1CA7EC', height: 30, width: 30, marginLeft: -15, marginBottom: -10}}
            handleStyle={{borderColor: '#1E3998', backgroundColor: '#1E3998', height: 30, width: 30, marginLeft: 0, marginTop: -14}}
          />
        </Col>
      </Row>
      {
        activeIndex == 0 && (
          <div className={styles['description']}>
            <p>
              According to a IDC study, manufacturing data is rarely housed in a common data lake or system, but typically in siloed systems.
            </p>
            <p>
              Operators and engineers must manually piece together information from these siloed systems in a tedious and time-consuming process - which naturally hampers innovation and discourages collaboration in a company.
            </p>
          </div>
        ) 
      }
      {
        activeIndex == 1 && (
          <div className={styles['description']}>
            <p>
              A McKinsey study has revealed that ASEAN companies suffer from a lack of managers who understand new technologies and innovation to properly implement a transformational strategy, and an insufficient grasp of how all these new solutions can best optimise work processes.
            </p>
          </div>
        )
      }
      { 
        activeIndex == 2 && (
          <div className={styles['description']}>
            <p>
              Risks to manufacturers have existed as long as production has been mechanised. Industry 4.0 however, heralds the greatest leaps in cyber risk to date, as highlighted in a Deloitte paper.
            </p>
            <p>
              Advanced malware, armed with zero-day exploits, that automously targets vulnerable devices and spreads with little human intervention is likely to overpower an already challenged IT/OT security staff. This disturbing trend highlights the need for IoT devices manufacturers to product security-hardened devices.
            </p>
          </div>
        )
      }
    </div>
  )
}