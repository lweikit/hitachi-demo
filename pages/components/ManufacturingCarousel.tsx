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
      <img src="svg/th/carousel/brunei.svg" />
      <img src="svg/th/carousel/indonesia.svg" />
      <img src="svg/th/carousel/malaysia.svg" />
      <img src="svg/th/carousel/lao.svg" />
      <img src="svg/th/carousel/vietnam.svg" />
      <img src="svg/th/carousel/thailand.svg" />
      <img src="svg/th/carousel/philippines.svg" />
      <img src="svg/th/carousel/myanmar.svg" />
      <img src="svg/th/carousel/cambodia.svg" />
      <img src="svg/th/carousel/singapore.svg" />
      <div />
      <div />
    </Slider>
  )
}