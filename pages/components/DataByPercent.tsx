import styles from './styles/DataByPercent.module.scss'

export default function DataByPercent() {
  return (
    <div>
      <div>
        <object className={styles['svg']} type="image/svg+xml" data="svg/42p.svg"/>
      </div>
      <div>
        <object className={styles['svg']} type="image/svg+xml" data="svg/92p.svg"/>
      </div>
    </div>
  )
}