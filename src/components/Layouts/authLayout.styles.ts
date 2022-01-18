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
      position: fixed;
      z-index: 100;

      ::after {
        content: "";
        position: fixed;
        width: 100%;
        height: 100%;
        background: #0000008a;
      }
    }

    main {
      width: 100%;
      padding-left: 1em;
      padding-right: 1em;
    }
  }
`
