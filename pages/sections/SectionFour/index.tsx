import { Container, Row, Col } from 'reactstrap'

import SolutionsSVG from './SolutionsSVG'

export default function SectionFour() {
  return (
    <div id="section-four" className="section section-four">
      <Container fluid>
        <Row>
          <Col sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2}}>
            {/* <div className="left-lattice">
              <img src="img/s4-1.svg" />
            </div>
            <div className="right-lattice">
              <img src="img/s4-2.svg" />
            </div> */}
            <div className="lg-left">
              <h4>BUILDING SMART FACTORIES WITH</h4>
              <h2>HITACHI</h2>
              <h1>LUMADA</h1>

              <Row>
                <Col lg={{ size: 8, offset: 4 }}>
                  <p>
                    With a firm belief in the ASEAN's manufacturing future, Hitachi has taken the first step to set up Lumada Centre, in Thailand in 2018. Serving as a digital services hub, Lumada aims to equip Southeast Asian companies with IoT capabilities, big data analytics as they move up the Industry 4.0 ladder.
                  </p>
                </Col>
              </Row>
            </div>

            <div className="video-container">
              <iframe src="https://www.youtube-nocookie.com/embed/nqmpddNspSE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            <br />
            <br />
            <br />
            <br />

            <img src="img/lumada.png" id="lumada" />

            <p>
              Lumada is an IoT platform that allows you and Hitachi to co-create customized digital solutions to suit your business needs. It offers access to Hitachi's advanced technologies through the analysis of your data, which is then used to add value to your business operations through the implementation of big data analytics and artificial intelligence.
            </p>

            <img src="img/s2-p1-1.svg" id="s2-p1-1" />

            <p>
              Having worked closely with manufacturers, Hitachi understands that talking about smart factories and data analytics can sound intimidating at first. However, many manufacturers become more receptive after learning how new technologies help to lower costs, raise productivity and ultimately, increase their profits.
            </p>

            <br />
            <br />

            <h2 className="purple">&#8220;</h2>

            <p className="emphasis purple">
              "Modern AI and machine learning allow manufacturers to work with real-time fata from individual components for targeted maintenance. Manufacturers can avoid unnecessary maintenance and pre-empt problems associated with unplanned downtime."
            </p>

            <h4 className="purple">HITACHI EXECUTIVE</h4>

            <p>
              Besides enabling smart factories, Hitachi also aims to elevate the logistics sector by incorporating smart technologies across the entire logistics and delivery network.
            </p>

            <p className="point">
              In 2019, Hitachi rolled out a vehicle sharing service in Thailand, so business owners can benefit from the efficient use of out-of-service vehicles across their fleet and perform joint deliveries for cargos with close-proximity end destinations.
            </p>

            <div className="video-container">
              <iframe src="https://www.youtube-nocookie.com/embed/nqmpddNspSE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            <p>
              Not one to stand still, Hitachi is evolving Lumada's capabilities through research partnerships with tech giants such as Toyota and Microsoft. These exciting collaborations allow Hitachi to offer solutions to manufacturers in three areas.
            </p>

            <br />
            <br />

            <SolutionsSVG />

            {/* <h3>Increase manufacturing productivity</h3>
            <p>Analyse data collected from manufacturing sites to optimize factory operations</p>

            <h3>Optimise logistics with data analytics</h3>
            <p>Analyse traffic congestion, storage locations and delivery locations, & enable smart routing to save miles and deliver faster</p>

            <h3>Predictive maintenance and remote assist</h3>
            <p>Enabling predictive maintenance, real-time remote assistance and remote training scenarios for first-line workers, using HoloLens 2 and other smart devices</p> */}
          </Col>
        </Row>
      </Container>
    </div>
  )
}