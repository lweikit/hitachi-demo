import ManufacturingCarousel from '../components/ManufacturingCarousel'
import styles from './styles/SectionOnePartThree.module.scss'

export default function SectionOnePartThree() {
  return (
    <div className={`section ${styles['part-three']}`}>
      <h4>
        Volume sektor manufaktur negara-negara ASEAN
      </h4>
      <div className={styles['underline']} />
      <h5>
        terhadap GDP keseluruhan tiap negara di tahun 2018
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
        Walaupun memiliki volume yang cukup besar, sektor manufaktur ASEAN hanya menempati posisi keempat di dunia setelah China, Amerika Serikat dan Jerman. 
        Adapun mengenai tingkat produktivitas rata-rata,  negara-negara di kawasan ASEAN kecuali Singapura berada di bawah Amerika Serikat dan Jerman.
      </p>
      <img src="svg/globe.svg" className={styles['bg']} />
    </div>
  )
}