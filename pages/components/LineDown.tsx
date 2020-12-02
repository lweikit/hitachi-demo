import styles from './styles/LineDown.module.scss'

export default function LineDown({ delay=false }) {
  return (
    <svg className={styles['line-svg']} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1.8 81.9">
      <defs>
        <linearGradient id="line-down-gradient" x1="0" y1="81.9" x2="0" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#fff"/>
          <stop offset="0.09" stop-color="#f6f6ff" stop-opacity="0.97"/>
          <stop offset="0.23" stop-color="#dcdcff" stop-opacity="0.89"/>
          <stop offset="0.41" stop-color="#b2b2ff" stop-opacity="0.76"/>
          <stop offset="0.62" stop-color="#7979ff" stop-opacity="0.58"/>
          <stop offset="0.85" stop-color="#3030ff" stop-opacity="0.35"/>
          <stop offset="1" stop-color="blue" stop-opacity="0.2"/>
        </linearGradient>
      </defs>
      <g>
        <line className={styles[delay ? 'line-delay' : 'line']} y1="0" y2="81.9"/>
      </g>
    </svg>
  )
}
