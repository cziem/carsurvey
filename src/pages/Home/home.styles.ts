import { Box } from "@mui/material"
import styled from "styled-components"

export const Wrapper = styled(Box)`
  background-color: #ddd;

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

    label {
      padding-left: 0.5em;
    }
  }

  button {
    width: 25%;
    margin-top: 1em;
  }
`
