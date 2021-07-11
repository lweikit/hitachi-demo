import { Row, Col } from 'reactstrap'
import TrackVisility from 'react-on-screen'
import Slide from 'react-reveal/Slide'

import styles from './styles/SectionOnePartTwo.module.scss'

export default function SectionOnePartTwo() {
  return (
    <div className={`section ${styles['part-two']}`}>
      <Slide top>
        <h3>
          Pada tahun 2019, negara-negara di kawasan ASEAN berada di tahap awal dalam menerapkan konsep Industri 4.0.
        </h3>
        <div className="space-div" />
        
        <Row>
          <Col xs={{ size: 2 }} lg={{ size: 1 }}>
            <object type="image/svg+xml" data="svg/id/mouseover.svg" />
          </Col>
          <Col>
            <h4>
              5 faktor penting dalam konsep Industri 4.0
            </h4>
          </Col>
          <Col xs={{ size: 2 }} lg={{ size: 1 }}>
            <object type="image/svg+xml" data="svg/id/mouseover.svg" />
          </Col>
        </Row>

        <TrackVisility partialVisibility once>
          {
            ({ isVisible }) => isVisible && (
              <div>
                <Row>
                  <Col>
                    <object type="image/svg+xml" data="svg/vn/internet-of-things.svg" />
                  </Col>
                  <Col>
                    <object type="image/svg+xml" data="svg/vn/big-data.svg" />
                  </Col>
                  <Col>
                    <object type="image/svg+xml" data="svg/vn/cloud-based-technologies.svg" />
                  </Col>
                </Row>
                <Row>
                  <Col xs={{ size: 4, offset: 2 }}>
                    <object type="image/svg+xml" data="svg/vn/artificial-intelligence.svg" />
                  </Col>
                  <Col xs={{ size: 4 }}>
                    <object type="image/svg+xml" data="svg/vn/advanced-manufacturing.svg" />
                  </Col>
                </Row>
              </div>
            )
          }
        </TrackVisility>

        <div className="space-div" />
        <Row>
          <Col xs={{ size: 2 }} lg={{ size: 1 }}>
            <object type="image/svg+xml" data="svg/id/mouseover.svg" />
          </Col>
          <Col>
            <h4>
              Seberapa  pentingkah sektor manufaktur di kawasan ASEAN?
            </h4>
          </Col>
          <Col xs={{ size: 2 }} lg={{ size: 1 }}>
            <object type="image/svg+xml" data="svg/id/mouseover.svg" />
          </Col>
        </Row>
        
        <div className="desktop">
          <Row>
            <Col>
              <object type="image/svg+xml" data="svg/vn/manufacturing-contribution.svg" />
            </Col>
          </Row>
        </div>
        <div className="mobile">
          <Row>
            <Col>
              <TrackVisility partialVisibility once>
                {
                  ({ isVisible }) => isVisible && <object type="image/svg+xml" data="svg/vn/manufacturing-contribution.svg" />
                }
              </TrackVisility>
            </Col>
          </Row>
        </div>

        <p>
          Sebagai kawasan dengan tingkat perekonomian keenam terbesar di dunia di tahun 2019, yaitu sekitar USD 3 triliun, 
          ASEAN diperkirakan akan terus berkembang dengan tingkat pertumbuhan rata-rata sebesar 4,9% per tahun untuk satu dekade berikutnya. 
          Sebagai motor utama pertumbuhan, sektor manufaktur turut menyumbang lebih kurang USD670 milyar atau 21% dari GDP kawasan ini pada tahun 2018.
        </p>
      </Slide>
      <img src="img/s1-p2-bgl.svg" className={styles['bg-left']}/>
      <img src="img/s1-p2-bgr.svg" className={styles['bg-right']}/>
    </div>
  )
}