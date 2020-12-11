
import styles from './styles/CaseCard.module.scss'

export default function CaseCard({ number, description }) {
  return (
    <div className={styles['container']}>
      <div className={styles['image']}/>
      <div className={styles['cover']}>
        { number }
      </div>
      <div className={styles['overlay']}>
        <div className={styles['description']}>
          { description }
        </div>
        <div>
          Learn More
        </div>
      </div>
    </div>
  )
}