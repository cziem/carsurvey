import { Box } from "@mui/system"
import styled from "styled-components"

export const Wrapper = styled(Box)`
  background-color: #919191;
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -100;

  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.78);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
