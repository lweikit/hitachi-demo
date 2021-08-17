import { Row, Col } from 'reactstrap'
import TrackVisility from 'react-on-screen'

import LineDown from '../components/LineDown'
import styles from './styles/SectionOnePartFive.module.scss'

export default function SectionOnePartFive() {
  return (
    <div className={`section ${styles['part-five']}`}>
      <h4>
        Tăng năng suất sản xuất
      </h4>
      <div className={styles['underline']} />

      <Row>
        <Col xs={{ size: 2 }} lg={{ size: 1 }}>
          <object type="image/svg+xml" data="svg/vn/mouseover.svg" />
        </Col>
        <Col>
          <h5>
            Từ năm 2008 đến năm 2017
          </h5>
        </Col>
        <Col xs={{ size: 2 }} lg={{ size: 1 }}>
          <object type="image/svg+xml" data="svg/vn/mouseover.svg" />
        </Col>
      </Row>

      <TrackVisility partialVisibility once>
        {
          ({ isVisible }) => isVisible && (
            <Row>
              <Col>
                <object type="image/svg+xml" data="svg/vn/productivity-2.svg" />
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
                  Công nghiệp 4.0 hứa hẹn sẽ làm thay đổi điều đó bằng cách nâng cao giá trị sản xuất của khu vực. 
                  Tuy nhiên, tốc độ áp dụng hiện nay tụt hậu hơn so với Trung Quốc, quốc gia đã đầu tư rất nhiều vào ngành tự động hóa và robot trong 10 năm qua. 
                  Bước đi này đã giúp Trung Quốc tăng năng suất đến 84%, so với mức tăng trung bình 38% của khu vực ASEAN.
                </p>
          
                <div className={lineClass}>
                  {
                    isVisible && <LineDown type="delay"/>
                  }
                </div>
          
                <h3 className={hClass}>
                  SAU ĐÓ, COVID-19 XUẤT HIỆN VÀ ĐÃ LÀM THAY ĐỔI MỌI THỨ
                </h3>
              </div>
            )
          }
        }
      </TrackVisility>
    </div>
  )
}