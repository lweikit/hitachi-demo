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
      <img src="svg/id/countries/brunei.svg" />
      <img src="svg/id/countries/indonesia.svg" />
      <img src="svg/id/countries/malaysia.svg" />
      <img src="svg/id/countries/lao.svg" />
      <img src="svg/id/countries/vietnam.svg" />
      <img src="svg/id/countries/thailand.svg" />
      <img src="svg/id/countries/philippines.svg" />
      <img src="svg/id/countries/myanmar.svg" />
      <img src="svg/id/countries/cambodia.svg" />
      <img src="svg/id/countries/singapore.svg" />
      <div />
      <div />
    </Slider>
  )
}