import { Row, Col } from 'reactstrap'

import LumadaSolutions from '../components/LumadaSolutions'
import styles from './styles/SectionFour.module.scss'

export default function SectionFour() {
  return (
    <div id="section-four" className={`section ${styles['section-four']}`}>
      <img src="img/s4-bgl.svg" className={styles['bg-left']} />
      <img src="img/s4-bgr.svg" className={styles['bg-right']} />
      <div>
        <h2>
          Mengembangkan pabrik pintar dengan
        </h2>
        <div className={styles['underline']} />
        <h1>
          LUMADA
        </h1>
      </div>

      <div>
        <p>
          Melihat masa depan sektor manufaktur ASEAN yang berpotensi besar, Hitachi mengambil langkah awal dengan mendirikan Lumada Centre di Thailand pada tahun 2018. 
          Sebagai pusat layanan digital, Lumada bertujuan untuk melengkapi perusahaan-perusahaan di Asia Tenggara dengan keahlian IoT dan Analisis big data saat mereka memasuki era Industri 4.0.
        </p>
      </div>

      <div className="space-div" />
      <div className="space-div" />

      <div>
        <img src="svg/common/lumada.svg" width="200" height="100" />
      </div>

      <p>
        Lumada merupakan wadah IoT yang memungkinkan Anda dan Hitachi secara bersama menciptakan solusi digital sesuai dengan kebutuhan bisnis Anda. 
        Cara ini memberikan akses pada teknologi canggih dari Hitachi melalui analisis data yang kemudian digunakan sebagai nilai tambah pada proses operasional bisnis Anda dengan menerapkan analisis big data dan kecerdasan artifisial.
      </p>

      <p>
        Dengan pengalaman luas dari kerja sama dengan banyak produsen. Hitachi paham bahwa konsep pabrik pintar dan analisis data dapat mengintimidasi banyak orang. 
        Akan tetapi, banyak produsen yang semakin mampu menerima setelah mereka mengetahui lebih lanjut bahwa teknologi-teknologi baru  dapat mengurangi biaya operasional, 
        meningkatkan produktivitas dan pada akhirnya meningkatkan keuntungan.
      </p>

      <div className="space-div" />
      <div className="space-div" />

      <div className={styles['quote-open']}>&#8220;</div>

      <div className={styles['quote-description']}>
        &#8220;Sektor Manufaktur ASEAN sangat membutuhkan transformasi digital tidak hanya untuk meningkatkan Cost Competitiveness tetapi juga Risk Competitiveness. 
        Kecerdasan Artifisial dan Analitis yang merupakan inti dari solusi Smart Manufacturing dari Hitachi dapat membantu.&#8221;
      </div>

      <div className="space-div" />
      <div>
        <Row>
          <Col className="align-right" xs={{ size: 5 }}>
            <img className={styles['quote-pic']} src="img/Akihiro-Ohashi.jpg" />
          </Col>
          <Col className="align-left" xs={{ size: 7 }}>
            <div className={styles['quote-by']}>Bpk. Akihiro Ohashi</div>
            <div className={styles['quote-by']}>Executive Director</div>
            <div className={styles['quote-by']}>ICT Solutions Business</div>
            <div className={styles['quote-by']}>Hitachi Asia (Thailand) Co., Ltd</div>
          </Col>
        </Row>
      </div>

      <div className="space-div" />
      <div className="space-div" />

      <p>
        Selain membantu penerapan pabrik pintar, Hitachi juga bertujuan membantu sektor logistik dengan penggunaan teknologi pintar pada seluruh sektor logistik dan jaringan pengirimannya.
      </p>

      <div className="space-div" />
      <div className="space-div" />
      <div className="space-div" />
      <div className="space-div" />

      <h3>
        Pada tahun 2019, Hitachi meluncurkan layanan bersama untuk kendaraan komersial di Thailand.
      </h3>

      <div className="space-div" />
      <div className="space-div" />

      <p className={styles['float']}>
        Melalui layanan ini, para pengusaha akan <a href="https://meeit.biz/en/service/service_tst_ai_logistics/" target="_blank"><u>diuntungkan</u></a> dengan penggunaan kendaraan di luar layanan yang efisien dan pengiriman kargo bersama untuk tujuan yang berdekatan.
      </p>

      <img src="img/s4-bg.jpg" className={`bg ${styles['bg']}`} />
      
      <div className="space-div" />
      <div className="space-div" />

      <div className="video-container">
        <iframe src="https://www.youtube-nocookie.com/embed/jXPTUd_l5YU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      <div className="space-div" />
      <div className="space-div" />

      <h3>
        Tidak puas dengan pencapaiannya saat ini, Hitachi terus mengembangkan kemampuan Lumada melalui kerja sama dengan beberapa mitra penelitian.
      </h3>

      <p>
        Melalui kerja sama dengan beberapa mitra penelitian, Hitachi mampu menawarkan solusi bagi produsen dalam tiga area.
      </p>

      <LumadaSolutions />
    </div>
  )
}