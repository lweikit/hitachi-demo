import TrackVisility from 'react-on-screen'

import IndustryChallenges from '../components/IndustryChallenges'
import LineDown from '../components/LineDown'
import styles from './styles/SectionThree.module.scss'

export default function SectionThree() {
  return (
    <div id="section-three" className={`section ${styles['section-three']}`}>
      <h2>
        Tantangan yang dihadapi dalam penerapan
      </h2>
      <div className={styles['underline']} />
      <h1>
        konsep Industri 4.0
      </h1>

      <div className="space-div" />
      <TrackVisility once>
        {
          ({ isVisible }) => isVisible && <LineDown type="blue" />
        }
      </TrackVisility>
      <div className="space-div" />

      <p>
        Seiring mendesaknya penerapan konsep Industri 4.0, para produsen di kawasan ASEAN saat ini berlomba melakukan upgrade teknologi. 
        Sebanyak 39% dari para produsen tersebut telah membangun sebuah nerve-centre, atau control-tower untuk meningkatkan transparansi rantai supply yang menyeluruh.
      </p>

      <div className="space-div" />
      <h3>
        Sebanyak 25% dari seluruh program yang diterapkan adalah terkait dengan program automasi cepat untuk mengatasi kekurangan jumlah karyawan akibat COVID-19.
      </h3>
      <div className="space-div" />

      <p>
        Walaupun laju perubahan yang terjadi hingga saat ini cukup menggembirakan, perubahan meraih konsep pabrik pintar atau smart factory sangat dipengaruhi oleh tiga masalah utama: 
        data silos, kurangnya manajer dengan pengetahuan mumpuni dan ancaman keamanan siber.
      </p>

      <IndustryChallenges />
    </div>
  )
}