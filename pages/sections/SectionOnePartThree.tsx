import ManufacturingCarousel from '../components/ManufacturingCarousel'
import styles from './styles/SectionOnePartThree.module.scss'

export default function SectionOnePartThree() {
  return (
    <div className={`section ${styles['part-three']}`}>
      <h4>
        ขนาดของอุตสาหกรรมภาคการผลิตของระดับภูมิภาคอาเซียน
      </h4>
      <div className={styles['underline']} />
      <h5>
        เมื่อเทียบกับจีดีพีรวมของประเทศในปี 2018
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
        แม้ระดับภูมิภาคอาเซียนจะมีขนาดใหญ่ แต่อุตสาหกรรมภาคการผลิตติดอยู่ในอันดับสี่ของโลกเท่านั้น ตามหลังประเทศจีน ประเทศสหรัฐอเมริกา และประเทศเยอรมนี <br/>
        ในค่าเฉลี่ยของอุตสาหกรรมการผลิตโดยรวมนั้นประเทศสมาชิกระดับภูมิภาคอาเซียนมีคะแนนต่ำกว่า <br/>
        ประเทศสหรัฐอเมริกาและประเทศเยอรมนีอย่างมาก ยกเว้นประเทศสิงคโปร์
      </p>
      <img src="svg/common/globe.svg" className={styles['bg']} />
    </div>
  )
}