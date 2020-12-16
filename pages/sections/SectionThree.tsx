import TrackVisility from 'react-on-screen'

import IndustryChallenges from '../components/IndustryChallenges'
import LineDown from '../components/LineDown'
import styles from './styles/SectionThree.module.scss'

export default function SectionThree() {
  return (
    <div id="section-three" className={`section ${styles['section-three']}`}>
      <h2>Challenges of racing up the</h2>
      <div className={styles['underline']} />
      <h1>INDUSTRY 4.0 LADDER</h1>

      <div className="space-div" />
      <TrackVisility once>
        {
          ({ isVisible }) => isVisible && <LineDown type="blue" />
        }
      </TrackVisility>
      <div className="space-div" />

      <p>
        With a renewed urgency to commit to Industry 4.0, ASEAN manufacturers are now rushing headlong into technological upgrades. 39% of manufacturers have implemented a nerve-centre, or control-tower, approach to increase end-to-end supply-chain transparency.
      </p>

      <div className="space-div" />
      <h3>
        Around a quarter are fast tracking automation programs to stem worker shortages arising from COVID-19.
      </h3>
      <div className="space-div" />

      <p>
        While the escalated pace of change is impressive, the race to becoming smart factories of tomorrow is marred with three challenges: data silos, lack of skilled managers and cybersecurity threats.
      </p>

      <IndustryChallenges />
    </div>
  )
}