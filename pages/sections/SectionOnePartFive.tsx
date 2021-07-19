import { Row, Col } from 'reactstrap'
import TrackVisility from 'react-on-screen'

import LineDown from '../components/LineDown'
import styles from './styles/SectionOnePartFive.module.scss'

export default function SectionOnePartFive() {
  return (
    <div className={`section ${styles['part-five']}`}>
      <h4>
        Keuntungan dari tingkat produktivitas sektor manufaktur
      </h4>
      <div className={styles['underline']} />

      <Row>
        <Col xs={{ size: 2 }} lg={{ size: 1 }}>
          <object type="image/svg+xml" data="svg/id/mouseover.svg" />
        </Col>
        <Col>
          <h5>
            dari tahun 2008 sampai dengan 2017
          </h5>
        </Col>
        <Col xs={{ size: 2 }} lg={{ size: 1 }}>
          <object type="image/svg+xml" data="svg/id/mouseover.svg" />
        </Col>
      </Row>

      <TrackVisility partialVisibility once>
        {
          ({ isVisible }) => isVisible && (
            <Row>
              <Col>
                <object type="image/svg+xml" data="svg/id/productivity-2.svg" />
              </Col>
            </Row>
          )
        }
      </TrackVisility>

      <div className="space-div" />
      <div className="space-div" />
      <div className="space-div" />
      <TrackVisility partialVisibility once>
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
                  Industri 4.0 menjanjikan perubahan melalui peningkatan nilai manufaktur suatu kawasan. 
                  Saat ini penerapannya masih jauh tertinggal dari China yang telah banyak melalukan investasi dalam automasi dan robot pada 10 tahun terakhir. 
                  Investasi tersebut terbukti meningkatkan produktivitas RRC sebesar 84%, berbanding hanya 38% secara rata-rata untuk kawasan ASEAN.
                </p>
          
                <div className={lineClass}>
                  {
                    isVisible && <LineDown type="delay"/>
                  }
                </div>
          
                <h3 className={hClass}>
                  COVID-19 MUNCUL DAN SEMUANYA BERUBAH
                </h3>
              </div>
            )
          }
        }
      </TrackVisility>
    </div>
  )
}