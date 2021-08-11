import TrackVisility from 'react-on-screen'

import IndustryChallenges from '../components/IndustryChallenges'
import LineDown from '../components/LineDown'
import styles from './styles/SectionThree.module.scss'

export default function SectionThree() {
  return (
    <div id="section-three" className={`section ${styles['section-three']}`}>
      <h2>
        Những thách thức khi chạy đua lên nấc thang
      </h2>
      <div className={styles['underline']} />
      <h1>
        Công nghiệp 4.0
      </h1>

      <div className="space-div" />
      <TrackVisility once>
        {
          ({ isVisible }) => isVisible && <LineDown type="blue" />
        }
      </TrackVisility>
      <div className="space-div" />

      <p>
        Với nhu cầu cấp bách đổi mới để chuyển đổi sang Công nghiệp 4.0, các nhà sản xuất khu vực ASEAN hiện đang gấp rút nâng cấp công nghệ. 
        39% nhà sản xuất đã triển khai phương pháp tiếp cận trung tâm đầu não hoặc tháp kiểm soát để tăng tính minh bạch trên toàn chuỗi cung ứng.
      </p>

      <div className="space-div" />
      <h3>
        Khoảng một phần tư là số lượng các chương trình tự động hóa theo dõi nhanh giúp ngăn chặn tình trạng thiếu nhân công do đại dịch COVID-19 gây ra.
      </h3>
      <div className="space-div" />

      <p>
        Trong khi tốc độ thay đổi tăng nhanh một cách ấn tượng, thì cuộc đua để trở thành các nhà máy thông minh của tương lai sẽ bị hủy hoại do ba thách thức: 
        kho chứa dữ liệu, thiếu các nhà quản lý có kinh nghiệm và các mối đe dọa về an ninh mạng.
      </p>

      <IndustryChallenges />
    </div>
  )
}