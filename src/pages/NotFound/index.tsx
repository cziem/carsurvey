import { Box, Button, Container, Typography } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"
import { Wrapper } from "../Feedback/feedback.styles"

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <Container maxWidth="lg" className="container">
        <Typography variant="h3" textAlign={"center"} color="#f1f1f1">
          Hey, Chief! <em>Seems you have strayed 🤠</em>
        </Typography>

        <Typography
          variant="body1"
          textAlign={"center"}
          color="#f1f1f1"
          mt="2em"
        >
          Let's get you back home safely
        </Typography>

        <Box sx={{ marginTop: "4em" }}>
          <Button
            size="large"
            onClick={() => navigate("/")}
            variant="contained"
            sx={{ marginRight: "1.5em" }}
          >
            Take me home
          </Button>
        </Box>
      </Container>
    </Wrapper>
  )
}

export default NotFound
