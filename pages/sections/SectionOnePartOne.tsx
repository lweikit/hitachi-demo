import styles from './styles/SectionOnePartOne.module.scss'

export default function SectionOnePartOne() {
  return (
    <div className={`section ${styles['part-one']}`}>
      <div>
        <object type="image/svg+xml" data="svg/title.svg" width="100px" />
      </div>
      <h2>Sự thay đổi nhanh chóng trong lĩnh của khu vực ASEAN</h2>
      <div className={styles['underline']}/>
      <h1  className="no-margin">vực</h1>
      <div className={styles['light-title']}>sản xuất</div>
    </div>
  )
}