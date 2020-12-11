import styles from './styles/SectionOnePartOne.module.scss'

export default function SectionOnePartOne() {
  return (
    <div className={`section ${styles['part-one']}`} id="section-one">
      <div>
        <object type="image/svg+xml" data="svg/title.svg" width="100px" />
      </div>
      <h2>Accelerated Change in ASEAN'S</h2>
      <h1>MANUFACTURING</h1>
      <div className={styles['light-title']}>SECTOR</div>
    </div>
  )
}