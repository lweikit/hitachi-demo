import styles from './styles/SectionOnePartOne.module.scss'

export default function SectionOnePartOne() {
  return (
    <div className={`section ${styles['part-one']}`}>
      <div>
        <object type="image/svg+xml" data="svg/common/title.svg" width="100px" />
      </div>
      <h2>การเปลี่ยนแปลงอย่างรวดเร็วในภาคส่วนอุตสาหกรรม</h2>
      <div className={styles['underline']}/>
      <h1  className="no-margin">การผลิตของระดับ</h1>
      <div className={styles['light-title']}>ภูมิภาคอาเซียน</div>
    </div>
  )
}