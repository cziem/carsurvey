import React from "react"
import { Wrapper } from "./imageBackground.styles"
import ImageBG from "../../assets/cars/car-1.jpg"

const ImageBackground = () => {
  return (
    <Wrapper>
      <div className="overlay" />
      <img src={ImageBG} alt="car bg" />
    </Wrapper>
  )
}

export default ImageBackground
