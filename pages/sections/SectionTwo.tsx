import TrackVisility from 'react-on-screen'

import LineDown from '../components/LineDown'
import DataByPercent from '../components/DataByPercent'
import styles from './styles/SectionTwo.module.scss'

export default function SectionTwo() {
  return (
    <div id="section-two" className={`section ${styles['section-two']}`}>
      <h2>
        Nhu cầu chuyển
      </h2>
      <div className={styles['underline']} />
      <h1>
        đổi cấp thiết
      </h1>

      <div className="space-div" />
      <TrackVisility once>
        {
          ({ isVisible }) => isVisible && <LineDown type="teal" />
        }
      </TrackVisility>
      <div className="space-div" />

      <h3>
        Đại dịch COVID-19 đã thúc đẩy nhu cầu cấp thiết trong việc hiện đại hóa mọi hoạt động.
      </h3>

      <p>
        Những câu chuyện nổi lên về sự phụ thuộc của nhà sản xuất vào các quy trình và hoạt động thủ công cùng với tình trạng thiếu tầm nhìn trong việc thiết kế chuỗi cung ứng của họ. 
        Cả hai yếu tố đều cản trở khả năng đáp ứng linh hoạt của các nhà sản xuất trong những thời điểm khi nhu cầu thiếu ổn định. 
        Điều cần thiết phải làm là hiện đại hóa những khả năng này, giúp các nhà sản xuất nhanh chóng phục hồi sau đại dịch.
      </p>
      
      <div className="space-div" />
      <div className="space-div" />

      <div className="video-container">
        <iframe src="https://www.youtube-nocookie.com/embed/FSU6oThPaNA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      <div className="space-div" />
      <h3>
        Nói một cách dễ hiểu, COVID-19 đang dẫn dắt lĩnh vực này theo hướng chuyển đổi cấp thiết.
      </h3>
      <div className="space-div" />

      <DataByPercent />
      <img src="img/s2-bg.jpg" className={`bg ${styles['bg']}`} />
    </div>
  )
}