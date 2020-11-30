import TrackVisility from 'react-on-screen'

import ProductivityBar from '../components/ProductivityBar'

export default function SectionOnePartFive() {
  return (
    <div className="section part-five">
      <div className="align-left">
        <h4>CHANGE IN MANUFACTURING</h4>
        <h2>PRODUCTIVITY</h2>
        <h1>2008 - 2017</h1>
      </div>
      <div className="my-4" />

      <TrackVisility once>
        {
          ({ isVisible }) => <ProductivityBar isVisible={isVisible}/>
        }
      </TrackVisility>

      <img src="img/s1-p5-bg.jpg" className="bg s1-p5-bg" />
      <p>
        According to McKinsey, ASEAN could capture productivity gains worth US$216 billion to US$627 billion by moving up the Industry 4.0 technology ladder. Still, the pace remains slow and sluggish. A 2018 survey of ASEAN manufacturers showed that only 15 to 25 percent have fully adopted Industry 4.0 and related technologies.
      </p>

      <div>
        <h4>UP TO</h4>
        <h2>US$ 627 BILLION</h2>
        <h4 className="mb-5">WORTH OF PRODUCTIVITY GAINS FOR ASEAN</h4>
      </div>

      <img src="img/line-down.svg" className="line-down" />

      <h2 className="mt-5">THEN, COVID-19 CAME AND CHANGED EVERYTHING</h2>
    </div>
  )
}