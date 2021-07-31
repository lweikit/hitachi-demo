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
      <img src="svg/id/carousel/brunei.svg" />
      <img src="svg/id/carousel/indonesia.svg" />
      <img src="svg/id/carousel/malaysia.svg" />
      <img src="svg/id/carousel/lao.svg" />
      <img src="svg/id/carousel/vietnam.svg" />
      <img src="svg/id/carousel/thailand.svg" />
      <img src="svg/id/carousel/philippines.svg" />
      <img src="svg/id/carousel/myanmar.svg" />
      <img src="svg/id/carousel/cambodia.svg" />
      <img src="svg/id/carousel/singapore.svg" />
      <div />
      <div />
    </Slider>
  )
}