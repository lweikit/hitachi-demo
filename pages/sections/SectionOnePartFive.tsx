import TrackVisility from 'react-on-screen'

import LineDown from '../components/LineDown'
import ProductivityBar from '../components/ProductivityBar'
import styles from './styles/SectionOnePartFive.module.scss'

export default function SectionOnePartFive() {
  return (
    <div className={`section ${styles['part-five']}`}>
      <div className="align-left">
        <h4>CHANGE IN MANUFACTURING</h4>
        <h2>PRODUCTIVITY</h2>
        <h1>2008 - 2017</h1>
      </div>

      <div className="space-div" />
      <TrackVisility once>
        {
          ({ isVisible }) => <ProductivityBar isVisible={isVisible} />
        }
      </TrackVisility>
      <div className="space-div" />

      <TrackVisility once>
        {
          ({ isVisible }) => {
            const oneClass   = `${styles['hidden']} ${isVisible && styles['seq1-bg']} ${styles['bg']} bg`
            const twoClass   = `${styles['hidden']} ${isVisible && styles['seq2-p']}`
            const threeClass = `${styles['hidden']} ${isVisible && styles['seq3-h']}`
            const fourClass  = `${styles['hidden']} ${isVisible && styles['seq4-line']}`
            const fiveClass  = `${styles['hidden']} ${isVisible && styles['seq5-p']}`
            return (
              <div>
                <img src="img/s1-p5-bg.jpg" className={oneClass} />
                <p className={twoClass}>
                  According to McKinsey, ASEAN could capture productivity gains worth US$216 billion to US$627 billion by moving up the Industry 4.0 technology ladder. Still, the pace remains slow and sluggish. A 2018 survey of ASEAN manufacturers showed that only 15 to 25 percent have fully adopted Industry 4.0 and related technologies.
                </p>
          
                <div className={threeClass}>
                  <h4>UP TO</h4>
                  <h2>US$ 627 BILLION</h2>
                  <h4>WORTH OF PRODUCTIVITY GAINS FOR ASEAN</h4>
                </div>
          
                <div className="space-div" />
                <div className={fourClass}>
                  {
                    isVisible && <LineDown delay={true}/>
                  }
                </div>
                <div className="space-div" />
          
                <h2 className={fiveClass}>THEN, COVID-19 CAME AND CHANGED EVERYTHING</h2>
              </div>
            )
          }
        }
      </TrackVisility>
    </div>
  )
}