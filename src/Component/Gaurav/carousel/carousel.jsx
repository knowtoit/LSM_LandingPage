
import React, { useState } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card
} from 'reactstrap'
import sliderImage1 from '/src/assets/images/gkmTeach.jpeg'
import sliderImage2 from '/src/assets/images/gkmTeach.jpeg'
import sliderImage3 from '/src/assets/images/gkmTeach.jpeg'

const images = [
  {
    src: sliderImage1,
    "id": 1,
    "header": <span className="text-white">What Clients Say
    </span>,
    "caption": 'Cupcake ipsum dolor sit amet toffee lemon drops bonbon.Cupcake ipsum dolor sit amet toffee lemon drops bonbon.Cupcake ipsum dolor sit amet toffee lemon drops bonbon.'
  },
  {
    src: sliderImage2,
    "id": 2,
    "header": <span className="text-white">What Clients Say    </span>,
    "caption": 'Cheesecake caramels wafer pie lollipop.Cheesecake caramels wafer pie lollipop.Cheesecake caramels wafer pie lollipop.'
  },
  {
    src: sliderImage3,
    "id": 3,
    "header": <span className="text-white">What Clients Say</span>,
    "caption": 'Candy canes toffee gummies soufflé fruitcake dragée icing Candy canes toffee gummies soufflé fruitcake dragée icingCandy canes toffee gummies soufflé fruitcake dragée icingCandy canes toffee gummies soufflé fruitcake dragée icing.'
  }
]

const CarouselCaptions = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(0)

  const onExiting = () => {
    setAnimating(true)
  }

  const onExited = () => {
    setAnimating(false)
  }

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = newIndex => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = images.map(item => {
    return (
      <CarouselItem onExiting={onExiting} onExited={onExited} key={item.id}>
        <img  src={item.src} className='img-fluid' alt={item.id} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={<span className="text-center" style={{color:"black",fontWeight:"bold",fontFamily:"sans-serif"}}>What Clients Say</span>}
        />
      </CarouselItem>
    )
  })
  return (
    <Card >

    
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={images}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction='prev'
        directionText='Previous'
        onClickHandler={previous}
      />
      <CarouselControl
        direction='next'
        directionText='Next'
        onClickHandler={next}
      />
    </Carousel>
    </Card>
  )
}

export default CarouselCaptions