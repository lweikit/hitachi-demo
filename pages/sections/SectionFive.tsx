import { Container, Row, Col } from 'reactstrap'

export default function SectionFive() {
  return (
    <div id="section-five" className="section section-five">
      <h2>Interested to learn more about Hitachi Smart Manufacturing capabilities?</h2>

      <br />
      <br />

      <Row>
        <Col lg={{ size: 6 }}>
          <Row>
            <Col>
              <img src="img/s5-1.png" />
            </Col>
            <Col>
              <h4>
                Pivot Power - How GM and Hitachi moved from autos to medical masks in six days
              </h4>
            </Col>
          </Row>
        </Col>
        <Col lg={{ size: 6 }}>
          <Row>
            <Col>
              <img src="img/s5-2.png" />
            </Col>
            <Col>
              <h4>
                Merging JUKI production facilities with Hitachi's operation know-how to bring advances to MONOZUKURI workplaces
              </h4>
            </Col>
          </Row>
        </Col>
        <Col lg={{ size: 6 }}>
          <Row>
            <Col>
              <img src="img/s5-3.png" />
            </Col>
            <Col>
              <h4>
                Factories Are Trending Toward Remote Work Amid COVID-19: Expectations for Smart Factories of the Future
              </h4>
            </Col>
          </Row>
        </Col>
        <Col lg={{ size: 6 }}>
          <Row>
            <Col>
              <img src="img/s5-4.png" />
            </Col>
            <Col>
              <h4>
                Delivering Smiles to Our Daily Lives - The Frozen Foods Industry is Evolving with Digital Technology
              </h4>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}