import TrackVisility from 'react-on-screen'

import ProductivityBubble from '../components/ProductivityBubble'
import SideBySide from '../components/SideBySide'
import styles from './styles/SectionOnePartFour.module.scss'

export default function SectionOnePartFour() {
  return (
    <div className={`section ${styles['part-four']}`}>
      <h4>MANUFACTURING</h4>
      <h2>PRODUCTIVITY</h2>
      <h1>IN 2017</h1>
      <div className="my-4" />

      <TrackVisility once>
        {
          ({ isVisible }) => <ProductivityBubble isVisible={isVisible}/>
        }
      </TrackVisility>

      <p>
        Industry 4.0 promises to change that by escalating the region's manufacturing value. However, the current pace of adoption lags behind China, which has invested heavily in automation and robots in the past 10 years.
      </p>

      <SideBySide 
        leftText="PRODUCTIVITY GROWTH IN CHINA"
        rightText="PRODUCTIVITY GROWTH IN ASEAN"
        leftNumber={84}
        rightNumber={38}
      />

      <p className="emphasis purple">
        This move has enabled Chinese productivity to grow by 84%, compared with 38% on average for ASEAN.
      </p>
    </div>
  )
}