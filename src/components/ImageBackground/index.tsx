import React from "react"
import { Wrapper } from "./imageBackground.styles"
import Car1 from "../../assets/cars/car-1.jpg"
import Car2 from "../../assets/cars/car-2.jpg"
import Car3 from "../../assets/cars/car-3.jpg"
import Car4 from "../../assets/cars/car-4.jpg"
import Car5 from "../../assets/cars/car-5.jpg"

const ImageBackground = () => {
  return (
    <Wrapper>
      <div className="overlay" />
      <img src={Car1} alt="car bg" />

      {/* <div className="fade slide">
        <img src={Car1} alt="car bg" />
      </div>
      <div className="fade slide">
        <img src={Car2} alt="car bg" />
      </div>
      <div className="fade slide">
        <img src={Car3} alt="car bg" />
      </div>
      <div className="fade slide">
        <img src={Car4} alt="car bg" />
      </div>
      <div className="fade slide">
        <img src={Car5} alt="car bg" />
      </div> */}
    </Wrapper>
  )
}

export default ImageBackground
