import { Row, Col } from 'reactstrap'

import styles from './styles/LumadaSolutions.module.scss'

export default function LumadaSolutions() {
  return (
    <Row>
      <Col xs={{ size: 12 }} lg={{ size: 4 }}>
        <object className={styles['svg']} type="image/svg+xml" data="svg/increase-productivity.svg"/>
        <h4 className={styles['bold']}>
          Tăng năng suất sản xuất
        </h4>
        <p>
          Phân tích dữ liệu thu thập từ các cơ sở sản xuất để tối ưu hóa hoạt động của nhà máy
        </p>
      </Col>
      <Col xs={{ size: 12 }} lg={{ size: 4 }}>
        <object className={styles['svg']} type="image/svg+xml" data="svg/optimise-logistics.svg"/>
        <h4 className={styles['bold']}>
          Tối ưu hóa ngành hậu cần nhờ phân tích dữ liệu
        </h4>
        <p>
          Phân tích các điểm tắc nghẽn giao thông, lưu trữ và giao nhận cho phép xác định tuyến đường thông minh, giúp tiết kiệm quãng đường đi và giao nhận nhanh hơn
        </p>
      </Col>
      <Col xs={{ size: 12 }} lg={{ size: 4 }}>
        <object className={styles['svg']} type="image/svg+xml" data="svg/predictive-maintenance.svg"/>
        <h4 className={styles['bold']}>
          Bảo trì dự đoán và hỗ trợ từ xa
        </h4>
        <p>
          Triển khai dịch vụ bảo trì dự đoán, hỗ trợ từ xa theo thời gian thực và đào tạo từ xa cho nhân viên làm việc trực tiếp với khách hàng
        </p>
      </Col>
    </Row>
  )
}