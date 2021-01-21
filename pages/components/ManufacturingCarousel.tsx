import Slider from 'react-slick'

import styles from './styles/ManufacturingCarousel.module.scss'

export default function ManufacturingCarousel() {
  const settings = {
    dots: false,
    infinite: false,
    centerMode: true,
    focusOnSelect: true,
    speed: 500,
    initialSlide: 0, 
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          initialSlide: 0, 
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }
  return (
    <Slider className={styles['carousel']} {...settings}>
      <img src="svg/brunei.svg" />
      <img src="svg/indonesia.svg" />
      <img src="svg/malaysia.svg" />
      <img src="svg/lao.svg" />
      <img src="svg/vietnam.svg" />
      <img src="svg/thailand.svg" />
      <img src="svg/philippines.svg" />
      <img src="svg/myanmar.svg" />
      <img src="svg/cambodia.svg" />
      <img src="svg/singapore.svg" />
      <div />
      <div />
    </Slider>
  )
}