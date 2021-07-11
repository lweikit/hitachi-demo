import ManufacturingCarousel from '../components/ManufacturingCarousel'
import styles from './styles/SectionOnePartThree.module.scss'

export default function SectionOnePartThree() {
  return (
    <div className={`section ${styles['part-three']}`}>
      <h4>
        Quy mô ngành sản xuất của khu vực ASEAN
      </h4>
      <div className={styles['underline']} />
      <h5>
        so với tổng GDP của mỗi nước trong năm 2018
      </h5>

      <div className="space-div" />
      <div className="space-div" />
      <ManufacturingCarousel />
      <div className="space-div" />
      <div className="space-div" />
      <div className="space-div" />
      <div className="space-div" />
      <div className="space-div" />
      <div className="space-div" />

      <p>
        Mặc dù có quy mô như vậy, nhưng lĩnh vực sản xuất của khu vực ASEAN chỉ đứng thứ tư trên thế giới, sau Trung Quốc, Hoa Kỳ và Đức. 
        Về năng suất trung bình, tất cả các nước thành viên ASEAN, ngoại trừ Singapore, đều đạt điểm thấp hơn đáng kể so với Hoa Kỳ và Đức.
      </p>
      <img src="svg/globe.svg" className={styles['bg']} />
    </div>
  )
}