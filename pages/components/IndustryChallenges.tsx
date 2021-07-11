import { useState } from 'react'
import { Row, Col } from 'reactstrap'
import Slider from 'rc-slider'

import styles from './styles/IndustryChallenges.module.scss'

export default function IndustryChallenges() {
  const [activeIndex, setActiveIndex] = useState(0)
  const marks = {
    0: 'Data silos',
    1: 'Kurangnya manajer yang mumpuni',
    2: 'Ancaman keamanan siber',
  }
  return (
    <div>
      {
        activeIndex == 0 && <object className={styles['svg']} type="image/svg+xml" data="svg/data-living-in-silos.svg"/>
      } 
      {  
        activeIndex == 1 && <object className={styles['svg']} type="image/svg+xml" data="svg/lack-of-skilled-managers.svg"/>
      } 
      { 
        activeIndex == 2 && <object className={styles['svg']} type="image/svg+xml" data="svg/cybersecurity-threats.svg"/>
      }
      <div className="space-div" />
      <Row>
        <Col xs={{ size: 10, offset: 1 }} lg={{size: 8, offset: 2 }}>
          <Slider 
            className={styles['slider']}
            min={0} 
            max={2} 
            marks={marks} 
            included={false} 
            value={activeIndex} 
            onChange={setActiveIndex}
            railStyle={{backgroundColor: '#1CA7EC', marginTop: 20}}
            dotStyle={{borderColor: '#1CA7EC', backgroundColor: '#1CA7EC', height: 30, width: 30, marginLeft: -15, marginBottom: -35}}
            handleStyle={{borderColor: '#1E3998', backgroundColor: '#1E3998', height: 30, width: 30, marginLeft: 0, marginTop: 10}}
          />
        </Col>
      </Row>
      {
        activeIndex == 0 && (
          <div className={styles['description']}>
            <p>
              Menurut penelitian IDC, data manufaktur sangat jarang tersimpan dalam satu penyimpanan data atau sistem, tetapi tersebar di beberapa tempat.
            </p>
            <p>
              Para operator dan teknisi harus secara manual mencari informasi tersebut dari sistem yang berbeda melalui proses yang rumit dan menghabiskan banyak waktu– yang sering sekali menghambat inovasi serta kolaborasi dalam perusahaan.
            </p>
          </div>
        ) 
      }
      {
        activeIndex == 1 && (
          <div className={styles['description']}>
            <p>
              Sebuah penelitian yang dilakukan oleh McKinsey menunjukkan bahwa banyak perusahaan yang berada di kawasan ASEAN tidak memiliki manajer yang  memahami teknologi serta inovasi terbaru dalam menerapkan strategi informasi, dan juga kurangnya pengetahuan akan solusi-solusi yang dapat mengoptimalkan proses kerja.
            </p>
          </div>
        )
      }
      { 
        activeIndex == 2 && (
          <div className={styles['description']}>
            <p>
              Masalah ini telah ada sejak penggunaan mesin dalam proses produksi. Konsep Industri 4.0 juga sangat menekankan pada bahaya yang berasal dari dunia siber, seperti yang tertera dalam sebuah artikel dari Deloitte.
            </p>
            <p>
              Malware canggih dengan zero-day exploit dan menyerang gawai-gawai rentan dan dapat menyebar nyaris tanpa intervensi manusia  memiliki risiko besar dan saat ini telah menjadi hal yang menakutkan bagi banyak pegiat IT/TO. Trend ini semakin menekankan kebutuhan akan produsen gawai IoT dengan fitur keamanan yang kokoh.
            </p>
          </div>
        )
      }
    </div>
  )
}