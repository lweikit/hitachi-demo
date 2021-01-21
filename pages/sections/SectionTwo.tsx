import TrackVisility from 'react-on-screen'

import LineDown from '../components/LineDown'
import DataByPercent from '../components/DataByPercent'
import styles from './styles/SectionTwo.module.scss'

export default function SectionTwo() {
  return (
    <div id="section-two" className={`section ${styles['section-two']}`}>
      <h2>Urgent need for</h2>
      <div className={styles['underline']} />
      <h1>TRANSFORMATION</h1>

      <div className="space-div" />
      <TrackVisility once>
        {
          ({ isVisible }) => isVisible && <LineDown type="teal" />
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
      
      <div className="space-div" />
      <div className="space-div" />

      <div className="video-container">
        <iframe src="https://www.youtube-nocookie.com/embed/FSU6oThPaNA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      <div className="space-div" />
      <h3>To put it simply, COVID-19 is spearheading this sector towards urgent transformation.</h3>
      <div className="space-div" />

      <DataByPercent />
      <img src="img/s2-bg.jpg" className={`bg ${styles['bg']}`} />
    </div>
  )
}