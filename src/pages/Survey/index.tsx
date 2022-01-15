import {
  Box,
  Button,
  Container,
  Slide,
  TextField,
  Typography,
} from "@mui/material"
import React from "react"
import { questionsList } from "../../shared/data"
import { Wrapper } from "./survey.styles"
import clsx from "clsx"
import { TDir } from "../../types/type"
import Question from "../../components/Question"

const Survey = () => {
  const [dir, setDir] = React.useState<TDir>("up")
  const [active, setActive] = React.useState(0)
  const containerRef = React.useRef(null)

  const handleNext = () => {
    setDir("up")
    setActive((prev) => prev + 1)
  }

  const handlePrev = () => {
    setDir("down")
    setActive((prev) => prev - 1)
  }

  return (
    <Wrapper sx={{ height: "100vh" }}>
      <Container maxWidth="lg" className="container">
        <Box sx={{ width: "80%" }} ref={containerRef}>
          {questionsList.map((question, idx) => (
            <React.Fragment key={question.number}>
              <Slide
                direction={dir}
                in={active === idx}
                container={containerRef.current}
                timeout={1000}
              >
                <Box
                  className={clsx(
                    "question-wrapper",
                    active === idx && "active"
                  )}
                >
                  <Question {...question} />

                  <Box sx={{ display: "flex" }}>
                    {active > 0 && (
                      <Button
                        color="secondary"
                        variant="contained"
                        onClick={handlePrev}
                        size="large"
                        sx={{ marginRight: "1.5em" }}
                      >
                        Prev
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      size="large"
                    >
                      Next
                    </Button>
                  </Box>
                </Box>
              </Slide>
            </React.Fragment>
          ))}
        </Box>
      </Container>
    </Wrapper>
  )
}

export default Survey
