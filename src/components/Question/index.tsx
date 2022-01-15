import { TextField, Typography } from "@mui/material"
import React from "react"
import { TQuestion } from "../../types/type"

const Question = (question: TQuestion) => {
  console.log(question, "question")

  return (
    <React.Fragment>
      <Typography variant="h2" color="#f1f1f1" mb={4}>
        {question.question}
      </Typography>
      <TextField
        fullWidth
        placeholder="John Doe"
        variant="standard"
        className="input"
      />
    </React.Fragment>
  )
}

export default Question
