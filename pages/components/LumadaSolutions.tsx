import { Row, Col } from 'reactstrap'

import styles from './styles/LumadaSolutions.module.scss'

export default function LumadaSolutions() {
  return (
    <Row>
      <Col xs={{ size: 12 }} lg={{ size: 4 }}>
        <object className={styles['svg']} type="image/svg+xml" data="svg/increase-productivity.svg"/>
        <h4 className={styles['bold']}>
          Meningkatkan Produktivitas Produsen
        </h4>
        <p>
          Menganalisis data yang diperoleh dari lokasi pabrik untuk mengoptimalkan pengoperasian pabrik
        </p>
      </Col>
      <Col xs={{ size: 12 }} lg={{ size: 4 }}>
        <object className={styles['svg']} type="image/svg+xml" data="svg/optimise-logistics.svg"/>
        <h4 className={styles['bold']}>
          Mengoptimalkan Logistik dengan Analisis Data
        </h4>
        <p>
          Menganalisis kemacetan lalu lintas, penyimpanan dan lokasi pengiriman untuk perencanaan rute yang pintar (smart routing), mempersingkat jarak tempuh dan mempercepat waktu pengiriman
        </p>
      </Col>
      <Col xs={{ size: 12 }} lg={{ size: 4 }}>
        <object className={styles['svg']} type="image/svg+xml" data="svg/predictive-maintenance.svg"/>
        <h4 className={styles['bold']}>
          Perawatan Berjadwal dan Bantuan Jarak Jauh
        </h4>
        <p>
          Melakukan perawatan berjadwal, bantuan jarak jauh secara real-time dan juga pelatihan jarak jauh bagi pekerja pada lini depan
        </p>
      </Col>
    </Row>
  )
}