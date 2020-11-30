import ManufacturingCarousel from '../components/ManufacturingCarousel'

export default function SectionOnePartThree() {
  return (
    <div className="section part-three">
      <img src="img/s1-p3-bg.svg" className="s1-p3-bg" />
      <h4>THE SIZE OF</h4>
      <h2>MANUFACTURING</h2>
      <h1>SECTOR</h1>
      <h4>COMPARED TO TOTAL GDP OF THE COUNTRY IN 2018</h4>

      <div className="space-div" />
      <ManufacturingCarousel />
      <div className="space-div" />

      <img src="img/location.svg" height="80px" />
      <h4>SOUTHEAST ASIA</h4>

      <p className="black">
        In spite of its size, ASEAN's manufacturing sector only ranks fourth in the world, behind China, United States and Germany. In terms of average productivity, all ASEAN member states, with the exception of Singapore, score significantly lower than United States and Germany.
      </p>
    </div>
  )
}