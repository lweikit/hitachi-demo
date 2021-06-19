import TrackVisility from 'react-on-screen'

import styles from './styles/DataByPercent.module.scss'

export default function DataByPercent() {
  return (
    <TrackVisility partialVisibility once>
      {
        ({ isVisible }) => isVisible && (
          <div>
            <div>
              <object className={styles['svg']} type="image/svg+xml" data="svg/42p-mobile.svg"/>
            </div>
            <div>
              <object className={styles['svg']} type="image/svg+xml" data="svg/92p-mobile.svg"/>
            </div>
          </div>
        )
      }
    </TrackVisility>
  )
}