import { Row, Col } from 'reactstrap'

import CaseCard from '../components/CaseCard'

import styles from './styles/SectionFive.module.scss'

export default function SectionFive() {
  return (
    <div id="section-five" className={`section ${styles['section-five']}`}>
      <h3>
        Bạn muốn tìm hiểu thêm về cách thức nền tảng Sản xuất thông minh Hitachi hỗ trợ bạn?
      </h3>
      <div className="space-div" />
      <h6>
        Nhấp vào một trong các nghiên cứu tình huống của chúng tôi để tìm hiểu thêm.
      </h6>

      <Row>
        <Col xs={{ size: 6, offset: 3 }} lg={{ size: 8, offset: 2 }}>
          <Row>
            <Col lg={{ size: 6 }}>
              <CaseCard 
                number={'01'}
                description={'Pivot Power - Cách GM và Hitachi chuyển từ ô tô sang khẩu trang y tế trong 6 ngày'}
                href={'http://social-innovation.hitachi/en-sg/case_studies/pivot-power-gm-hitachi'}
                img={'img/case-1.jpg'}
              />
            </Col>
            <Col lg={{ size: 6 }}>
              <CaseCard 
                number={'02'}
                description={'Sáp nhập các cơ sở sản xuất của JUKI cùng bí quyết vận hành của Hitachi để tạo ra những tiến bộ cho nơi làm việc của MONOZUKURI'}
                href={'http://social-innovation.hitachi/en-sg/case_studies/juki'}
                img={'img/case-2.jpg'}
              />
            </Col>
            <Col lg={{ size: 6 }}>
              <CaseCard 
                number={'03'}
                description={'Các nhà máy đang có xu hướng Làm việc từ xa trong bối cảnh đại dịch COVID-19: Kỳ vọng về các nhà máy thông minh của tương lai'}
                href={'http://social-innovation.hitachi/en-sg/case_studies/smart-factory'}
                img={'img/case-3.jpg'}
              />
            </Col>
            <Col lg={{ size: 6 }}>
              <CaseCard 
                number={'04'}
                description={'Mang lại nụ cười cho cuộc sống hàng ngày của mỗi chúng ta - Ngành công nghiệp thực phẩm đông lạnh đang phát triển nhờ công nghệ kỹ thuật số'}
                href={'http://social-innovation.hitachi/en-sg/case_studies/nichireifoods'}
                img={'img/case-4.jpg'}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="space-div" />
      
      <h6>
        Nhấp vào 
        <a href="https://www.hitachi.com.sg/SIB-smartmanufacturing/references.pdf"> <u>đây</u> </a> 
        để tải xuống tài liệu tham khảo cho phần đồ họa thông tin này.
      </h6>
    </div>
  )
}