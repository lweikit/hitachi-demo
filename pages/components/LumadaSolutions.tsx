import { Row, Col } from 'reactstrap'

import styles from './styles/LumadaSolutions.module.scss'

export default function LumadaSolutions() {
  return (
    <Row>
      <Col xs={{ size: 12 }} lg={{ size: 4 }}>
        <object className={styles['svg']} type="image/svg+xml" data="svg/increase-productivity.svg"/>
        <h4 className={styles['bold']}>Increase Manufacturing Productivity</h4>
        <p>Analyse data collected from manufacturing sites to optimise factory operations.</p>
      </Col>
      <Col xs={{ size: 12 }} lg={{ size: 4 }}>
        <object className={styles['svg']} type="image/svg+xml" data="svg/optimise-logistics.svg"/>
        <h4 className={styles['bold']}>Optimise Logistics with Data Analytics</h4>
        <p>Analyse traffic congestion, storage and delivery locations to enable smart routing to save miles and deliver faster.</p>
      </Col>
      <Col xs={{ size: 12 }} lg={{ size: 4 }}>
        <object className={styles['svg']} type="image/svg+xml" data="svg/predictive-maintenance.svg"/>
        <h4 className={styles['bold']}>Predictive Maintenance and Remote Assist</h4>
        <p>Deploy predictive maintenance, real-time remote assistance and remote training for first-line workers, using HoloLens 2.</p>
      </Col>
    </Row>
  )
}