import { Container, Row, Col } from 'reactstrap'

export default function SectionTwo() {
  return (
    <div id="section-two" className="section-two">
      <h4>MANUFACTURING</h4>
      <h2>PRODUCTIVITY</h2>
      <h1>IN 2017</h1>

      <ul>
        <li>UNITED STATES - 137</li>
        <li>ASEAN - 15</li>
        <li>GERMANY - 92</li>
        <li>CHINA - 16</li>
      </ul>

      <Row>
        <Col sm={{ size: 8, offset: 2 }}>
          <p>
            Industry 4.0 promises to change that by escalating the region's manufacturing value. However, the current pace of adoption lags behind China, which has invested heavily in automation and robots in the past 10 years.
          </p>
        </Col>
      </Row>

      <Row>
        <Col sm={{ size: 1 }}></Col>
        <Col sm={{ size: 3 }}><h4>PRODUCTIVITY GROWTH IN CHINA</h4></Col>
        <Col sm={{ size: 2 }}><h2>84 %</h2></Col>
        <Col sm={{ size: 2 }}><h2>38 %</h2></Col>
        <Col sm={{ size: 3 }}><h4>PRODUCTIVITY GROWTH IN ASEAN</h4></Col>
        <Col sm={{ size: 1 }}></Col>
      </Row>

      <p className="EMPHASIS">
        This move has enabled Chinese productivity to grow by 84%, compared with 38% on average for ASEAN.
      </p>
    </div>
  )
}