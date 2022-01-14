import { Button, Container, Typography, TextField } from "@mui/material"
import React from "react"
import { Wrapper } from "./home.styles"

const Home = () => {
  return (
    <Wrapper sx={{ height: "100vh" }}>
      <Container maxWidth="lg" className="container">
        <Typography variant="h1" textAlign={"center"}>
          Welcome To Car Survey
        </Typography>
        <Typography variant="h6" textAlign={"center"} color="#616161">
          We have a few questions for you, please provide your name to get
          started.
        </Typography>

        <div className="name-wrap">
          <TextField fullWidth variant="standard" label="John Doe" />
        </div>

        <Button variant="contained" size="large">
          Start
        </Button>
      </Container>
    </Wrapper>
  )
}

export default Home
