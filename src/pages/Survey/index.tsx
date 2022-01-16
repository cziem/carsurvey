import { Box, Button, Container, Fade, Slide, Typography } from "@mui/material"
import { SelectChangeEvent } from "@mui/material/Select"
import clsx from "clsx"
import React from "react"
import { useNavigate } from "react-router-dom"
import Question from "../../components/Question"
import { questionsList } from "../../shared/data"
import {
  IResponse,
  IValidate,
  TBrandModel,
  TDir,
  TQuestion,
} from "../../types/type"
import { saveToDB } from "../../utils/database"
import { validateResponse } from "../../utils/response"
import { Wrapper } from "./survey.styles"

const Survey = () => {
  const [response, setResponse] = React.useState<IResponse>({
    age: "",
    gender: "",
    licensed: "",
    beginner: "",
    drivetrain: "",
    emission: "",
    carSize: "",
  })
  const [hasBonus, setHasBonus] = React.useState(false)
  const [error, setError] = React.useState("")
  const [dir, setDir] = React.useState<TDir>("up")
  const [active, setActive] = React.useState(0)
  const containerRef = React.useRef(null)
  const navigate = useNavigate()

  const getValue = <T, K extends keyof T>(o: T, propertyName: K): T[K] =>
    o[propertyName]

  const handleNext = (name: string) => {
    const validate = validateResponse(response, name)

    if (validate?.canProceed) {
      // Set the bonus question check
      if (validate?.hasBonus) {
        setHasBonus(validate.hasBonus)
      }

      // Set direction of slide
      setDir("up")

      // If they aren't aged 18 - 25 skip "Is this your first car" survey
      if (active === 2 && !hasBonus) {
        setActive((prev) => prev + 2)
      } else {
        setActive((prev) => prev + 1)
      }
    } else if (validate?.error) {
      setError(validate.error)
    } else {
      // End survey
      if (active === 3) {
        saveToDB(response)
        navigate("/thank-you", { state: { reason: "beginner" } })
      } else {
        saveToDB(response)
        navigate("/thank-you")
      }
    }
  }

  const handlePrev = () => {
    setDir("down")
    setActive((prev) => prev - 1)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError("")

    setResponse((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSelectChange = (event: SelectChangeEvent) => {
    setError("")
    setResponse((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = () => {
    // validate brand and model for carSize
    const validate = validateResponse(response, "brand-model")
    console.log(validate)

    if (validate?.canProceed) {
      // Save response
      saveToDB(validate.payload)
    }

    // clear response and Redirect to Feedback
    setResponse({
      age: "",
      gender: "",
      licensed: "",
      beginner: "",
      drivetrain: "",
      emission: "",
      carSize: "",
    })

    navigate("/thank-you")
  }

  return (
    <Wrapper sx={{ minHeight: "100vh" }}>
      <Container maxWidth="lg" className="container">
        <Box sx={{ width: "80%" }} ref={containerRef}>
          {questionsList.map((question: TQuestion, idx) => (
            <React.Fragment key={question.number}>
              <Slide
                timeout={1000}
                direction={dir}
                in={active === idx}
                container={containerRef.current}
              >
                <Box
                  className={clsx(
                    "question-wrapper",
                    active === idx && "active"
                  )}
                >
                  <Fade in={!!error}>
                    <Typography color="#f73378" variant="caption">
                      {error}
                    </Typography>
                  </Fade>

                  <Question
                    question={question}
                    carSize={Number(response.carSize)}
                    handleChange={handleChange}
                    handleSelectChange={handleSelectChange}
                    value={getValue(response, question.name as keyof IResponse)}
                  />

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
                    {active + 1 === questionsList.length ? null : (
                      <Button
                        variant="contained"
                        onClick={() => handleNext(question.name)}
                        size="large"
                      >
                        Next
                      </Button>
                    )}
                  </Box>

                  {active + 1 === questionsList.length && (
                    <Box
                      sx={{
                        marginTop: "4em",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        size="large"
                        color="success"
                        variant="contained"
                        sx={{ padding: "1em 3em" }}
                        onClick={handleSubmit}
                      >
                        Submit
                      </Button>
                    </Box>
                  )}
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
