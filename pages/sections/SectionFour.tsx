import { Row, Col } from 'reactstrap'
import TrackVisility from 'react-on-screen'

import LineDown from '../components/LineDown'
import SolutionsStack from '../components/SolutionsStack'
import styles from './styles/SectionFour.module.scss'

export default function SectionFour() {
  return (
    <div id="section-four" className={`section ${styles['section-four']}`}>
      <TrackVisility once>
        {
          ({ isVisible }) => {
            const bglClass   = `${styles['hidden']} ${isVisible && styles['seq1-bg']} ${styles['bg-left']}`
            const bgrClass   = `${styles['hidden']} ${isVisible && styles['seq1-bg']} ${styles['bg-right']}`
            const hClass     = `${styles['hidden']} ${isVisible && styles['seq2-h']}`
            const pClass     = `${styles['hidden']} ${isVisible && styles['seq3-p']} ${styles['left-border']}`
            const videoClass = `${styles['hidden']} ${isVisible && styles['seq4-video']} video-container`
            return (
              <div>
                <img src="img/s4-bgl.svg" className={bglClass} />
                <img src="img/s4-bgr.svg" className={bgrClass} />
                <div className="align-left">
                  <div className={hClass}>
                    <h4>BUILDING SMART FACTORIES WITH</h4>
                    <h2>HITACHI</h2>
                    <h1>LUMADA</h1>
                  </div>

                  <Row>
                    <Col lg={{ size: 8, offset: 4 }} className={pClass}>
                      <p>
                        With a firm belief in the ASEAN's manufacturing future, Hitachi has taken the first step to set up Lumada Centre, in Thailand in 2018. Serving as a digital services hub, Lumada aims to equip Southeast Asian companies with IoT capabilities, big data analytics as they move up the Industry 4.0 ladder.
                      </p>
                    </Col>
                  </Row>
                </div>

                <div className={videoClass}>
                  {/* <iframe src="https://www.youtube-nocookie.com/embed/nqmpddNspSE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                </div>
              </div>
            )
          }
        }
      </TrackVisility>
      <div className="space-div" />

      <img src="img/lumada.svg" height="60px" />

      <p>
        Lumada is an IoT platform that allows you and Hitachi to co-create customized digital solutions to suit your business needs. It offers access to Hitachi's advanced technologies through the analysis of your data, which is then used to add value to your business operations through the implementation of big data analytics and artificial intelligence.
      </p>

      <TrackVisility once>
        {
          ({ isVisible }) => isVisible && <LineDown />
        }
      </TrackVisility>

      <p>
        Having worked closely with manufacturers, Hitachi understands that talking about smart factories and data analytics can sound intimidating at first. However, many manufacturers become more receptive after learning how new technologies help to lower costs, raise productivity and ultimately, increase their profits.
      </p>

      <div className="space-div" />

      <h1 className={`${styles['quote']}`}>&#8220;</h1>

      <p  className={`${styles['quote']} emphasis`}>
        &#8220;Modern AI and machine learning allow manufacturers to work with real-time data from individual components for targeted maintenance. Manufacturers can avoid unnecessary maintenance and pre-empt problems associated with unplanned downtime.&#8221;
      </p>

      <h4 className={`${styles['quote']}`}>HITACHI EXECUTIVE</h4>

      <div className="space-div" />

      <p>
        Besides enabling smart factories, Hitachi also aims to elevate the logistics sector by incorporating smart technologies across the entire logistics and delivery network.
      </p>

      <p className="point">
        In 2019, Hitachi rolled out a vehicle sharing service in Thailand, so business owners can benefit from the efficient use of out-of-service vehicles across their fleet and perform joint deliveries for cargos with close-proximity end destinations.
      </p>

      <img src="img/s4-bg.jpg" className={`bg ${styles['bg']}`} />
      
      <div className="video-container">
        {/* <iframe src="https://www.youtube-nocookie.com/embed/nqmpddNspSE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
      </div>

      <p>
        Not one to stand still, Hitachi is evolving Lumada's capabilities through research partnerships with tech giants such as Toyota and Microsoft. These exciting collaborations allow Hitachi to offer solutions to manufacturers in three areas.
      </p>

      <div className="space-div" />
      <SolutionsStack />
    </div>
  )
}