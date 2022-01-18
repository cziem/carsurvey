import React from "react"
import { Wrapper } from "./imageBackground.styles"
import Car1 from "../../assets/cars/car-1.jpg"
import Car2 from "../../assets/cars/car-2.jpg"
import Car3 from "../../assets/cars/car-3.jpg"
import Car4 from "../../assets/cars/car-4.jpg"
import Car5 from "../../assets/cars/car-5.jpg"

const ImageBackground = () => {
  const slideImage = React.useRef<HTMLImageElement | null>(null)

  React.useEffect(() => {
    const images = [Car1, Car2, Car3, Car4, Car5]
    let count = 0
    const updateImage = () => {
      if (count === images.length) {
        count = 0
      }

      if (slideImage.current) {
        slideImage.current.src = images[count]
      }

      ++count
    }

    const intervalId = setInterval(updateImage, 8000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <Wrapper>
      <div className="overlay" />
      <img ref={slideImage} src={Car1} alt="car bg" />
    </Wrapper>
  )
}

export default ImageBackground
