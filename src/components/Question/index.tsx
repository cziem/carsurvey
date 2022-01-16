import {
  Box,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import React from "react"
import { TQuestion } from "../../types/type"

interface IQuestion {
  value: string
  carSize?: number
  question: TQuestion
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSelectChange: (event: SelectChangeEvent) => void
}

const Question: React.FC<IQuestion> = ({
  value,
  carSize,
  question,
  handleChange,
  handleSelectChange,
}) => {
  const getResponseType = () => {
    if (question.type === "short-answer") {
      return (
        <TextField
          fullWidth
          value={value}
          variant="standard"
          className="input"
          name={question.name}
          onChange={handleChange}
        />
      )
    }

    if (question.type === "multi-choice") {
      return (
        <FormControl variant="standard" className="input">
          <RadioGroup
            aria-label={question.name}
            name={question.name}
            value={value}
            onChange={handleChange}
          >
            {question.options?.map((option, idx) => (
              <FormControlLabel
                key={idx}
                value={option}
                control={<Radio sx={{ color: "#f1f1f1" }} />}
                label={option}
                sx={{ color: "#f1f1f1" }}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )
    }

    if (question.type === "dropdown") {
      return (
        <FormControl variant="standard" className="input" fullWidth>
          <Select
            value={value}
            name={question.name}
            sx={{ color: "#f1f1f1" }}
            onChange={handleSelectChange}
          >
            {question.options?.map((option, idx) => (
              <MenuItem value={option} key={idx}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )
    }

    if (question.type === "dual" && !!carSize) {
      return (
        <Box sx={{ width: "100%" }} className="model-make">
          {new Array(carSize).fill(null).map((_, idx) => (
            <Box sx={{ marginBottom: "2em" }} key={idx}>
              <FormControl variant="standard" className="input" fullWidth>
                <InputLabel sx={{ color: "#f1f1f1" }}>Brand</InputLabel>
                <Select
                  value={value}
                  name={`${question.name1}-${idx}`}
                  sx={{ color: "#f1f1f1" }}
                  onChange={handleSelectChange}
                >
                  {question.make?.map((option, idx) => (
                    <MenuItem value={option} key={idx}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                fullWidth
                value={value}
                className="input"
                variant="standard"
                placeholder="Model"
                sx={{ marginTop: "1em" }}
                name={`${question.name2}-${idx}`}
                onChange={handleChange}
              />
            </Box>
          ))}
        </Box>
      )
    }
  }

  return (
    <React.Fragment>
      <Typography variant="h2" color="#f1f1f1" mb={4}>
        {question.question}
      </Typography>

      {question.question.includes("make and model") && (
        <Typography variant="caption" color="#dbdbdb" mb={4}>
          <strong>Note:</strong> Please provide Brand and Model information for
          the number of cars inputted in the previous question.
        </Typography>
      )}

      {getResponseType()}
    </React.Fragment>
  )
}

export default Question
