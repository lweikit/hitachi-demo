import styles from './styles/SectionOnePartOne.module.scss'

export default function SectionOnePartOne() {
  return (
    <div className={`section ${styles['part-one']}`}>
      <div>
        <object type="image/svg+xml" data="svg/title.svg" width="100px" />
      </div>
      <h2>Akselerasi pada di Kawasan ASEAN</h2>
      <div className={styles['underline']}/>
      <h1  className="no-margin">Sektor</h1>
      <div className={styles['light-title']}>Manufaktur</div>
    </div>
  )
}