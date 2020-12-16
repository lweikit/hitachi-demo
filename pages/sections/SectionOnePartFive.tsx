import { Row, Col } from 'reactstrap'
import TrackVisility from 'react-on-screen'

import LineDown from '../components/LineDown'
import styles from './styles/SectionOnePartFive.module.scss'

export default function SectionOnePartFive() {
  return (
    <div className={`section ${styles['part-five']}`}>
      <h4>Gains in manufacturing productivity</h4>
      <div className={styles['underline']} />

      <Row>
        <Col xs={{ size: 2 }} lg={{ size: 1 }}>
          <object type="image/svg+xml" data="svg/mouseover.svg" />
        </Col>
        <Col>
          <h5>From 2008 to 2017</h5>
        </Col>
        <Col xs={{ size: 2 }} lg={{ size: 1 }}>
          <object type="image/svg+xml" data="svg/mouseover.svg" />
        </Col>
      </Row>

      <Row>
        <Col>
          <object type="image/svg+xml" data="svg/productivity-2.svg" />
        </Col>
      </Row>

      <div className="space-div" />
      <div className="space-div" />
      <div className="space-div" />
      <TrackVisility once>
        {
          ({ isVisible }) => {
            const bgClass   = `${styles['hidden']} ${isVisible && styles['seq1-bg']} ${styles['bg']} bg`
            const pClass    = `${styles['hidden']} ${isVisible && styles['seq2-p']}`
            const lineClass = `${styles['hidden']} ${isVisible && styles['seq3-line']}`
            const hClass    = `${styles['hidden']} ${isVisible && styles['seq4-p']}`
            return (
              <div>
                <img src="img/s1-p5-bg.jpg" className={bgClass} />
                <p className={pClass}>
                  Industry 4.0 promises to change that by escalating the region's manufacturing value.
                  However, the current pace of adoption lag behind China, which has invested heavily in automation and robots in the past 10 years.
                  This move has enabled Chinese productivity to grow by 84%, compared with 38% on average for ASEAN.
                </p>
          
                <div className={lineClass}>
                  {
                    isVisible && <LineDown type="delay"/>
                  }
                </div>
          
                <h3 className={hClass}>THEN, COVID-19 CAME AND CHANGED EVERYTHING</h3>
              </div>
            )
          }
        }
      </TrackVisility>
    </div>
  )
}