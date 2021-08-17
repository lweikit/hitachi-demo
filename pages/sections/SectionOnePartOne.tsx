import styles from './styles/SectionOnePartOne.module.scss'

export default function SectionOnePartOne() {
  return (
    <div className={`section ${styles['part-one']}`}>
      <div>
        <object type="image/svg+xml" data="svg/title.svg" width="100px" />
      </div>
      <h2>Sự thay đổi nhanh chóng của khu vực ASEAN</h2>
      <div className={styles['underline']}/>
      <div className={styles['light-title']}>trong lĩnh vực</div>
      <h1  className="no-margin">sản xuất</h1>
    </div>
  )
}