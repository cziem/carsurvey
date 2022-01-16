import { Box } from "@mui/material"
import styled from "styled-components"

export const Wrapper = styled(Box)`
  background-color: #07131c;

  .container {
    min-height: 100vh;
    /* height: inherit; */
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    /* overflow-y: auto; */
  }

  .input > div::before {
    border-bottom: 1px solid rgba(256, 256, 256, 0.5);
  }

  .input > div::after {
    border-bottom: 2px solid #f1f1f1;
  }

  .input > div > input::placeholder {
    color: #f9f9f9;
  }
  .input > div > input {
    color: #f1f1f1;
    font-size: 1.8em;
  }

  .question-wrapper {
    margin: 2em auto;
    display: none;
  }

  .active {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  button {
    margin-top: 3.5em;
  }
`
