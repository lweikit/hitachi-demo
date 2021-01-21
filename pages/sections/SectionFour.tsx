import { Row, Col } from 'reactstrap'

import LumadaSolutions from '../components/LumadaSolutions'
import styles from './styles/SectionFour.module.scss'

export default function SectionFour() {
  return (
    <div id="section-four" className={`section ${styles['section-four']}`}>
      <img src="img/s4-bgl.svg" className={styles['bg-left']} />
      <img src="img/s4-bgr.svg" className={styles['bg-right']} />
      <div>
        <h2>Building smart factories with</h2>
        <div className={styles['underline']} />
        <h1>LUMADA</h1>
      </div>

      <div>
        <p>
          With a firm belief in the ASEAN's manufacturing future, Hitachi has taken the first step to set up Lumada Centre, in Thailand in 2018. 
          Serving as a digital services hub, Lumada aims to equip Southeast Asian companies with IoT capabilities, big data analytics as they move up the Industry 4.0 ladder.
        </p>
      </div>

      <div className="space-div" />
      <div className="space-div" />

      <div>
        <img src="svg/lumada.svg" width="200" height="100" />
      </div>

      <p>
        Lumada is an IoT platform that allows you and Hitachi to co-create customized digital solutions to suit your business needs. 
        It offers access to Hitachi's advanced technologies through the analysis of your data, 
        which is then used to add value to your business operations through the implementation of big data analytics and artificial intelligence.
      </p>

      <p>
        Having worked closely with manufacturers, Hitachi understands that talking about smart factories and data analytics can sound intimidating at first. 
        However, many manufacturers become more receptive after learning how new technologies help to lower costs, raise productivity and ultimately, increase their profits.
      </p>

      <div className="space-div" />
      <div className="space-div" />

      <div className={styles['quote-open']}>&#8220;</div>

      <div className={styles['quote-description']}>
        &#8220;ASEAN Manufacturing need digital transformation to improve not only their Cost Competitiveness but also Risk Competitiveness. AI and Analytics, core components of Hitachi’s Smart Manufacturing solution, can help.&#8221;
      </div>

      <div className="space-div" />
      <div>
        <Row>
          <Col className="align-right" xs={{ size: 5 }}>
            <img className={styles['quote-pic']} src="img/Akihiro-Ohashi.jpg" />
          </Col>
          <Col className="align-left" xs={{ size: 7 }}>
            <div className={styles['quote-by']}>Mr. Akihiro Ohashi</div>
            <div className={styles['quote-by']}>Executive Director</div>
            <div className={styles['quote-by']}>ICT Solutions Business</div>
            <div className={styles['quote-by']}>Hitachi Asia (Thailand) Co., Ltd</div>
          </Col>
        </Row>
      </div>

      <div className="space-div" />
      <div className="space-div" />

      <p>
        Besides enabling smart factories, Hitachi also aims to elevate the logistics sector by incorporating smart technologies across the entire logistics and delivery network.
      </p>

      <div className="space-div" />
      <div className="space-div" />
      <div className="space-div" />
      <div className="space-div" />

      <h3>
        In 2019, Hitachi rolled out a sharing service for commercial vehicles in Thailand.
      </h3>

      <div className="space-div" />
      <div className="space-div" />

      <p className={styles['float']}>
        With this service, business owners can <a href="https://meeit.biz/en/service/service_tst_ai_logistics/" target="_blank"><u>benefit</u></a> from the efficient use of out-of-service vehicles across their fleet and perform joint deliveries for cargoes with close-proximity end destinations.
      </p>

      <img src="img/s4-bg.jpg" className={`bg ${styles['bg']}`} />
      
      <div className="space-div" />
      <div className="space-div" />

      <div className="video-container">
        <iframe src="https://www.youtube-nocookie.com/embed/Nn-FZ286YyE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      <div className="space-div" />
      <div className="space-div" />

      <h3>
        Not one to stand still, Hitachi is evolving Lumada's capabilities further through research partnerships.
      </h3>

      <p>
        Through research partnerships with tech companies, Hitachi is able to offer solutions to manufacturers in three areas.
      </p>

      <LumadaSolutions />
    </div>
  )
}