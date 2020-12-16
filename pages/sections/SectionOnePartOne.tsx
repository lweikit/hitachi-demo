import styles from './styles/SectionOnePartOne.module.scss'

export default function SectionOnePartOne() {
  return (
    <div className={`section ${styles['part-one']}`}>
      <div>
        <object type="image/svg+xml" data="svg/title.svg" width="100px" />
      </div>
      <h2>Accelerated Change in ASEAN'S</h2>
      <div className={styles['underline']}/>
      <h1  className="no-margin">MANUFACTURING</h1>
      <div className={styles['light-title']}>Sector</div>
    </div>
  )
}