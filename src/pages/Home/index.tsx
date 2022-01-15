import { Button, Container, Typography, TextField, Slide } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"
import ImageBackground from "../../components/ImageBackground"
import { Wrapper } from "./home.styles"

const Home = () => {
  const navigate = useNavigate()
  const [checked, setChecked] = React.useState(false)
  const containerRef = React.useRef(null)

  return (
    <Wrapper sx={{ height: "100vh" }}>
      <ImageBackground />
      <Container maxWidth="lg" className="container" ref={containerRef}>
        <Typography
          variant="h1"
          textAlign={"center"}
          color="#f1f1f1"
          sx={{ letterSpacing: "-5px", fontWeight: "600" }}
        >
          Welcome To Car Survey
        </Typography>
        <Typography variant="h6" textAlign={"center"} color="#d1d1d1">
          We have a few questions for you, please provide your name to get
          started.
        </Typography>

        <div className="name-wrap">
          <TextField
            fullWidth
            label="John Doe"
            variant="standard"
            className="name-field"
            onFocus={() => setChecked(true)}
            onBlur={() => setChecked(false)}
          />
        </div>

        <Slide direction="up" in={checked} container={containerRef.current}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/survey")}
          >
            Start
          </Button>
        </Slide>
      </Container>
    </Wrapper>
  )
}

export default Home
