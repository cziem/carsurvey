import { Box } from "@mui/material"
import styled from "styled-components"

export const Wrapper = styled(Box)`
  background-color: transparent;

  .container {
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    overflow-y: hidden;
  }

  .name-wrap {
    width: 70%;
    margin: 4em auto;

    input {
      color: #f1f1f1;
    }

    label {
      color: #f1f1f1;
      padding-left: 0.5em;
    }

    .name-field > div::before {
      border-bottom: 1px solid rgba(256, 256, 256, 0.5);
    }

    .name-field > div::after {
      border-bottom: 2px solid #f1f1f1;
    }
  }

  button {
    width: 25%;
    margin-top: 1em;
  }
`
