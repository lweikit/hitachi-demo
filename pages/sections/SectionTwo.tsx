import TrackVisility from 'react-on-screen'

import LineDown from '../components/LineDown'
import SideBySide from '../components/SideBySide'
import styles from './styles/SectionTwo.module.scss'

export default function SectionTwo() {
  return (
    <div id="section-two" className={`section ${styles['section-two']}`}>
      <div>
        <h4>URGENT NEED FOR</h4>
        <h1>TRANSFORMATION</h1>
      </div>

      <p className="point">
        Covid-19 has interrupted production, exposed supply chains weakness & drove an urgent need to modernise operations.
      </p>

      <TrackVisility once>
        {
          ({ isVisible }) => isVisible && <LineDown />
        }
      </TrackVisility>

      <p>
        Telling tales of manufacturers' reliance on manual processes and operations, coupled with the lack of visibility designed into their supply chains have surfaced. Both hinder manufacturers' ability to respond dynamically during times of uncertain demand. Modernising these capabilities will be essential for manufacturers to recover from the pandemic quickly.
      </p>
      
      <TrackVisility once>
        {
          ({ isVisible }) => {
            const bgClass    = `${styles['hidden']} ${isVisible && styles['seq1-bg']} ${styles['bg']} bg`
            const videoClass = `${styles['hidden']} ${isVisible && styles['seq2-video']} video-container`
            const pClass     = `${styles['hidden']} ${isVisible && styles['seq3-p']} emphasis`
            const sbsClass   = `${styles['hidden']} ${isVisible && styles['seq4-sbs']}`
            return (
              <div>
                <img src="img/s2-bg.jpg" className={bgClass} />

                <div className={videoClass}>
                  {/* <iframe src="https://www.youtube-nocookie.com/embed/nqmpddNspSE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                </div>

                <p className={pClass}>
                  TO PUT IT SIMPLY, COVID-19 IS SPEARHEADING THIS SECTOR TOWARDS URGENT TRANSFORMATION.
                </p>

                <div className={sbsClass}>
                  {
                    isVisible && <SideBySide
                      leftText="OF ASEAN MANUFACTURERS SAY THE PANDEMIC HAS ACCELERATED THEIR DIGITAL TRANSFORMATION PLANS"
                      rightText="SEEK MORE EFFICIENT DATA MANAGEMENT SOLUTIONS SUCH AS ROBOTIC PROCESS AUTOMATION (RPA)"
                      leftNumber={92}
                      rightNumber={42}
                      delay={6}
                    />
                  }
                </div>
              </div>
            )
          }
        }
      </TrackVisility>
    </div>
  )
}