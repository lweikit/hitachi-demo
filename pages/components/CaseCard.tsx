
import styles from './styles/CaseCard.module.scss'

export default function CaseCard({ number, description, href }) {
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
          <a href={href}>
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}