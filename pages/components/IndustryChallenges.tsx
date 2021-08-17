import { useState } from 'react'
import { Row, Col } from 'reactstrap'
import Slider from 'rc-slider'

import styles from './styles/IndustryChallenges.module.scss'

export default function IndustryChallenges() {
  const [activeIndex, setActiveIndex] = useState(0)
  const marks = {
    0: 'Dữ liệu trong kho chứa',
    1: 'Thiếu nhà quản lý có kinh nghiệm',
    2: 'Các mối đe dọa về an ninh mạng',
  }
  return (
    <div>
      {
        activeIndex == 0 && <object className={styles['svg']} type="image/svg+xml" data="svg/common/data-living-in-silos.svg"/>
      } 
      {  
        activeIndex == 1 && <object className={styles['svg']} type="image/svg+xml" data="svg/common/lack-of-skilled-managers.svg"/>
      } 
      { 
        activeIndex == 2 && <object className={styles['svg']} type="image/svg+xml" data="svg/common/cybersecurity-threats.svg"/>
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
              Theo một nghiên cứu của IDC, dữ liệu về hoạt động sản xuất hiếm khi được đặt trong một hệ thống hoặc kho dữ liệu chung, mà thường là trong các hệ thống bao kín.
            </p>
            <p>
              Các nhà điều hành và kỹ sư phải chắp nối thông tin lại với nhau theo cách thủ công từ các hệ thống được bao kín này trong một quy trình tẻ nhạt và tốn thời gian - điều này đương nhiên sẽ cản trở sự đổi mới và làm thui chột dần khả năng hợp tác trong một công ty.
            </p>
          </div>
        ) 
      }
      {
        activeIndex == 1 && (
          <div className={styles['description']}>
            <p>
              Một nghiên cứu của McKinsey đã tiết lộ rằng các công ty trong khu vực ASEAN đang thiếu các nhà quản lý hiểu rõ các công nghệ mới và tiến trình đổi mới để thực hiện đúng chiến lược chuyển đổi, cũng như không đủ hiểu biết về khả năng tối ưu hóa quy trình làm việc của tất cả các giải pháp mới này.
            </p>
          </div>
        )
      }
      { 
        activeIndex == 2 && (
          <div className={styles['description']}>
            <p>
              Rủi ro đối với các nhà sản xuất đã và vẫn tồn tại miễn là hoạt động sản xuất vẫn được cơ giới hóa. Tuy nhiên, cho đến hiện tại, Công nghiệp 4.0 báo trước những bước nhảy lớn nhất về rủi ro trong môi trường mạng, như đã được nhấn mạnh trong một nghiên cứu của Deloitte.
            </p>
            <p>
              Phần mềm độc hại tiên tiến, được trang bị các phương thức khai thác lỗ hổng zero-day, tự động nhắm mục tiêu vào các thiết bị dễ bị tấn công và lây lan vì con người ít can thiệp, hoàn toàn có khả năng áp đảo một nhân viên bảo mật CNTT/Công nghệ vận hành (OT) vốn đã yếu kém. Xu hướng đáng lo ngại này làm nổi bật nhu cầu sản xuất các thiết bị tăng cường cơ chế bảo mật của các nhà sản xuất thiết bị IoT.
            </p>
          </div>
        )
      }
    </div>
  )
}