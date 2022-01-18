import { Box } from "@mui/material"
import styled from "styled-components"

export const Wrapper = styled(Box)`
  display: flex;
  width: 100vw;

  @media (max-width: 600px) {
    .drawer {
      display: none;
    }

    .open-drawer {
      display: block;
    }

    main {
      width: 100%;
      padding-left: 1em;
      padding-right: 1em;
    }
  }
`
