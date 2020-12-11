import { Row, Col } from 'reactstrap'
import styles from './styles/SectionOnePartFour.module.scss'

export default function SectionOnePartFour() {
  return (
    <div className={`section ${styles['part-four']}`}>
      <h4>Comparing ASEAN's Manufacturing Productivity</h4>
      <h5>manufacturing productivity is defined as value added per employee,</h5>
      <h5>measured in thousands of US$, as of 2017</h5>

      <Row>
        <Col xs={{ size: 2 }} lg={{ size: 1 }}>
          <object type="image/svg+xml" data="svg/mouseover.svg" />
        </Col>
        <Col>
          <Row>
            <Col>
              <object type="image/svg+xml" data="svg/productivity-1.svg" />
            </Col>
          </Row>
        </Col>
        <Col xs={{ size: 2 }} lg={{ size: 1 }}>
          <object type="image/svg+xml" data="svg/mouseover.svg" />
        </Col>
      </Row>
    </div>
  )
}