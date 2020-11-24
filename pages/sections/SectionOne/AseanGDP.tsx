
export default function AseanGDP() {
  return (
    <svg viewBox="0 0 100 25">
      <defs>
      <linearGradient id="gdp-circle-gradient" x1="25%" y1="-25%" x2="5%" y2="-75%" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#1ba7ec"/>
        <stop offset="0.18" stopColor="#24a3ed"/>
        <stop offset="0.47" stopColor="#3e98f0"/>
        <stop offset="0.85" stopColor="#6786f4"/>
        <stop offset="0.99" stopColor="#797ef6"/>
      </linearGradient>
      <linearGradient id="gdp-line-gradient" x1="12.5%" x2="100%" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#1ba7ec"/>
        <stop offset="0.18" stopColor="#24a3ed"/>
        <stop offset="0.47" stopColor="#3e98f0"/>
        <stop offset="0.85" stopColor="#6786f4"/>
        <stop offset="0.99" stopColor="#797ef6"/>
      </linearGradient>
      </defs>
      <g className="gdp-1">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <circle transform="rotate(90 0 0)" className="gdp-circle" cx="12.5%" cy="-50%" r="15%" />
            <line className="gdp-line" x1="12.5%" y1="93.5%" x2="100%" y2="93.5%"/>
            <text x="7.5%" y="45%" className="gdp-h2">21%</text>
            <text x="5%"   y="60%" className="gdp-h4">TO THE REGION'S</text>
            <text x="7.5%" y="70%" className="gdp-h4">GDP IN 2018</text>
            <text x="30%"  y="35%" className="gdp-p">Home to the sixth largest global economy in 2019 at around US$3 trillion,</text>
            <text x="30%"  y="45%" className="gdp-p">ASEAN is projected to grow at an average of 4.9 percent per annum for the next</text>
            <text x="30%"  y="55%" className="gdp-p">decade. As a core growth driver, manufacturing contributes about US$670</text>
            <text x="30%"  y="65%" className="gdp-p">billion or 21 percent to the regions GDP in 2018.</text>
          </g>
        </g>
      </g>
    </svg>
  )
}