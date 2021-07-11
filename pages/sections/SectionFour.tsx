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
          Xây dựng nhà máy thông minh với 
        </h2>
        <div className={styles['underline']} />
        <h1>
          LUMADA
        </h1>
      </div>

      <div>
        <p>
          Với niềm tin chắc chắn vào tương lai ngành sản xuất của khu vực ASEAN, Hitachi đã thực hiện bước đầu tiên là thành lập Trung tâm Lumada tại Thái Lan vào năm 2018. 
          Hoạt động với vai trò như một trung tâm dịch vụ kỹ thuật số, mục đích của Lumada là trang bị năng lực về IoT, phân tích dữ liệu lớn cho các công ty khu vực Đông Nam Á khi họ bước lên nấc thang của nền Công nghiệp 4.0.
        </p>
      </div>

      <div className="space-div" />
      <div className="space-div" />

      <div>
        <img src="svg/lumada.svg" width="200" height="100" />
      </div>

      <p>
        Lumada là một nền tảng IoT cho phép bạn và Hitachi cùng tạo ra các giải pháp kỹ thuật số tùy chỉnh để phù hợp với nhu cầu kinh doanh của bạn. 
        Nền tảng này sẽ cấp quyền truy cập vào các công nghệ tiên tiến của Hitachi thông qua phân tích dữ liệu của bạn, sau đó sử dụng dữ liệu này để giúp bạn tăng giá trị cho hoạt động kinh doanh thông qua việc triển khai hoạt động phân tích dữ liệu lớn và trí tuệ nhân tạo.
      </p>

      <p>
        Sau khi đã hợp tác chặt chẽ với các nhà sản xuất, Hitachi hiểu rằng khi nói về nhà máy thông minh và phân tích dữ liệu thoạt nghe dường như dễ gây cảm giác sợ hãi. 
        Tuy nhiên, nhiều nhà sản xuất trở nên dễ tiếp nhận hơn sau khi biết rõ cách thức mà công nghệ mới giúp giảm chi phí, nâng cao năng suất và cuối cùng là tăng lợi nhuận cho họ.
      </p>

      <div className="space-div" />
      <div className="space-div" />

      <div className={styles['quote-open']}>&#8220;</div>

      <div className={styles['quote-description']}>
        &#8220;Ngành sản xuất khu vực ASEAN cần chuyển đổi số để cải thiện không chỉ Năng lực cạnh tranh về chi phí mà còn cả Khả năng cạnh tranh về rủi ro. 
        Các thành phần cốt lõi của giải pháp Sản xuất thông minh của Hitachi là Trí tuệ nhân tạo (AI) và Phân tích có thể hỗ trợ các khía cạnh này.&#8221;
      </div>

      <div className="space-div" />
      <div>
        <Row>
          <Col className="align-right" xs={{ size: 5 }}>
            <img className={styles['quote-pic']} src="img/Akihiro-Ohashi.jpg" />
          </Col>
          <Col className="align-left" xs={{ size: 7 }}>
            <div className={styles['quote-by']}>Ông Akihiro Ohashi</div>
            <div className={styles['quote-by']}>Giám đốc điều hành</div>
            <div className={styles['quote-by']}>Bộ phận kinh doanh giải pháp CNTT-Truyền thông</div>
            <div className={styles['quote-by']}>Hitachi Asia (Thailand) Co., Ltd</div>
          </Col>
        </Row>
      </div>

      <div className="space-div" />
      <div className="space-div" />

      <p>
        Bên cạnh việc khởi động các nhà máy thông minh, Hitachi cũng đặt mục tiêu tăng cường lĩnh vực hậu cần bằng cách kết hợp các công nghệ thông minh trên toàn bộ mạng lưới giao nhận và hậu cần.
      </p>

      <div className="space-div" />
      <div className="space-div" />
      <div className="space-div" />
      <div className="space-div" />

      <h3>
        Vào năm 2019, Hitachi đã triển khai dịch vụ chia sẻ xe thương mại tại Thái Lan.
      </h3>

      <div className="space-div" />
      <div className="space-div" />

      <p className={styles['float']}>
        Với dịch vụ này, các chủ doanh nghiệp có thể được <a href="https://meeit.biz/en/service/service_tst_ai_logistics/" target="_blank"><u>hưởng lợi</u></a> từ việc tận dụng hiệu quả các xe không sử dụng trong đội xe của họ và thực hiện hoạt động giao nhận hàng chung cho các hàng hóa có điểm đến cuối gần nhau.
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
        Không dừng lại ở đó, Hitachi đang phát triển hơn nữa năng lực của Lumada thông qua các quan hệ đối tác nghiên cứu.
      </h3>

      <p>
        Thông qua quan hệ đối tác nghiên cứu với các công ty công nghệ, Hitachi có thể cung cấp giải pháp cho các nhà sản xuất trong ba lĩnh vực.
      </p>

      <LumadaSolutions />
    </div>
  )
}