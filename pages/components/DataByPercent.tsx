import TrackVisility from 'react-on-screen'

import styles from './styles/DataByPercent.module.scss'

export default function DataByPercent() {
  return (
    <TrackVisility partialVisibility once>
      {
        ({ isVisible }) => isVisible && (
          <div>
            <div>
              <object className={styles['svg']} type="image/svg+xml" data="svg/id/42p.svg"/>
            </div>
            <div>
              <object className={styles['svg']} type="image/svg+xml" data="svg/id/92p.svg"/>
            </div>
          </div>
        )
      }
    </TrackVisility>
  )
}