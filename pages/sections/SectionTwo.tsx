import TrackVisility from 'react-on-screen'

import LineDown from '../components/LineDown'
import DataByPercent from '../components/DataByPercent'
import styles from './styles/SectionTwo.module.scss'

export default function SectionTwo() {
  return (
    <div id="section-two" className={`section ${styles['section-two']}`}>
      <h2>Urgent Need For</h2>
      <h1>TRANSFORMATION</h1>

      <div className="space-div" />
      <TrackVisility once>
        {
          ({ isVisible }) => isVisible && <LineDown />
        }
      </TrackVisility>
      <div className="space-div" />

      <h3>COVID-19 drove an urgent need to modernise operations.</h3>

      <p>
        Telling tales of manufacturers' reliance on manual processes and operations, 
        coupled with the lack of visibility designed into their supply chains have surfaced. 
        Both hinder manufacturers' ability to respond dynamically during times of uncertain demand. 
        Modernising these capabilities will be essential for manufacturers to recover from the pandemic quickly.
      </p>
      
      <TrackVisility once>
        {
          ({ isVisible }) => {
            const bgClass    = `${styles['hidden']} ${isVisible && styles['seq1-bg']} ${styles['bg']} bg`
            const videoClass = `${styles['hidden']} ${isVisible && styles['seq2-video']} video-container`
            const hClass     = `${styles['hidden']} ${isVisible && styles['seq3-h']}`
            const sbsClass   = `${styles['hidden']} ${isVisible && styles['seq4-sbs']}`
            return (
              <div>
                <img src="img/s2-bg.jpg" className={bgClass} />

                <div className={videoClass}>
                  {/* <iframe src="https://www.youtube-nocookie.com/embed/nqmpddNspSE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                </div>

                <div className="space-div" />
                <h3 className={hClass}>
                  To put it simply, COVID-19 is spearheading this sector towards urgent transformation.
                </h3>
                <div className="space-div" />

                <div className={sbsClass}>
                  {
                    isVisible && <DataByPercent
                      topText="say that the pandemic has accelerated their digital transformation plans"
                      bottomText="seek more efficient data management solutions such as robotic process automation (RPA)"
                      topNumber={92}
                      bottomNumber={42}
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