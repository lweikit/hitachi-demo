import ManufacturingCarousel from '../components/ManufacturingCarousel'
import styles from './styles/SectionOnePartThree.module.scss'

export default function SectionOnePartThree() {
  return (
    <div className={`section ${styles['part-three']}`}>
      <h4>Size of ASEAN's manufacturing sector</h4>
      <div className={styles['underline']} />
      <h5>compared to total GDP of the country in 2018</h5>

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
        In spite of its size, ASEAN's manufacturing sector only ranks fourth in the world, behind China, United States and Germany. 
        In terms of average productivity, all ASEAN member states, with the exception of Singapore, scored significantly lower than United States and Germany.
      </p>
      <img src="svg/globe.svg" className={styles['bg']} />
    </div>
  )
}