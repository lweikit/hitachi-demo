import { useState } from 'react'
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ManufacturingCarousel() {
  const manufacturingSizeByCountry = [
    {
      country: 'BRUNEI DARUSSALAM',
      percentage: '62.9%',
    },
    {
      country: 'INDONESIA',
      percentage: '39.8%',
    },
    {
      country: 'MALAYSIA',
      percentage: '37.5%',
    },
    {
      country: 'LAO PDR',
      percentage: '35.7%',
    },
    {
      country: 'VIETNAM',
      percentage: '35.6%',
    },
    {
      country: 'THAILAND',
      percentage: '35.4%',
    },
    {
      country: 'PHILIPPINES',
      percentage: '34.1%',
    },
    {
      country: 'MYANMAR',
      percentage: '32.1%',
    },
    {
      country: 'CAMBODIA',
      percentage: '32.1%',
    },
    {
      country: 'SINGAPORE',
      percentage: '25.1%',
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === manufacturingSizeByCountry.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? manufacturingSizeByCountry.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }  

  const slides = manufacturingSizeByCountry.map((dataPoint, index) => {
    const leftIndex = index === 0 ? manufacturingSizeByCountry.length - 1 : index - 1
    const rightIndex = index == manufacturingSizeByCountry.length - 1 ? 0 : index + 1
    return (
      <div>
        <h4>{dataPoint.country}</h4>
        <h1>{dataPoint.percentage}</h1>
      </div>
    )
  })

  const settings = {
    dots: false,
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  }
  return (
    <Slider {...settings}>
      {slides}
    </Slider>
  )
}