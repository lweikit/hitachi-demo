import TrackVisility from 'react-on-screen'

import LineDown from '../components/LineDown'
import DataByPercent from '../components/DataByPercent'
import styles from './styles/SectionTwo.module.scss'

export default function SectionTwo() {
  return (
    <div id="section-two" className={`section ${styles['section-two']}`}>
      <h2>
        Kebutuhan mendesak untuk melakukan 
      </h2>
      <div className={styles['underline']} />
      <h1>
        Transformasi
      </h1>

      <div className="space-div" />
      <TrackVisility once>
        {
          ({ isVisible }) => isVisible && <LineDown type="teal" />
        }
      </TrackVisility>
      <div className="space-div" />

      <h3>
        COVID-19 mendesak kebutuhan modernisasi operasional.
      </h3>

      <p>
        Ketergantungan sektor manufaktur pada proses dan operasional yang manual serta kurangnya pengetahuan yang mendalam akan rantai supply merupakan masalah yang nyata. 
        Kedua faktor tersebut menghambat kemampuan produsen untuk merespon dengan cepat jika terjadi permintaan di luar perkiraan. 
        Modernisasi sangat dibutuhkan agar produsen dapat segera pulih dari pandemi.
      </p>
      
      <div className="space-div" />
      <div className="space-div" />

      <div className="video-container">
        <iframe src="https://www.youtube-nocookie.com/embed/FSU6oThPaNA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      <div className="space-div" />
      <h3>
        Secara singkat, COVID-19 dapat dikatakan semakin mendesak terjadinya transformasi di sektor manufaktur.
      </h3>
      <div className="space-div" />

      <DataByPercent />
      <img src="img/s2-bg.jpg" className={`bg ${styles['bg']}`} />
    </div>
  )
}