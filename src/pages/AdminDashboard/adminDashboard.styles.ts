import { Box } from "@mui/material"
import styled from "styled-components"

export const Wrapper = styled(Box)`
  .overview {
    /* background: red; */
  }

  .summary {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 1em;

    .MuiGrid-item {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 22%;
      padding: 1em;
      height: 12em;
      border-radius: 0.4em;

      h2 {
        font-size: 7em;
        font-weight: bold;
      }
    }

    .info {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;

      .icon {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          color: white;
          font-size: 1.2em;
        }
      }

      h5 {
        font-size: 0.856em;
        margin-top: 0.5em;
        color: #959595;
      }
    }

    /* Specific Summary styles */
    .adolescent {
      border: 1px solid #2ed7ff;
      background: #2ed7ff24;

      .icon {
        background: #2ed7ff;
      }

      .total h2 {
        color: #2ed7ff;
      }
    }

    .unlicensed {
      border: 1px solid #b9481b;
      background: #f39e7d24;

      .icon {
        background: #b9481b;
      }

      .total h2 {
        color: #b9481b;
      }
    }

    .first-timer {
      border: 1px solid #1b8cb9;
      background: #1b8cb924;

      .icon {
        background: #1b8cb9;
      }

      .total h2 {
        color: #1b8cb9;
      }
    }

    .target {
      border: 1px solid #1bb9ab;
      background: #1bb9ab24;

      .icon {
        background: #1bb9ab;
      }

      .total h2 {
        color: #1bb9ab;
      }
    }

    @media (max-width: 600px) {
      flex-direction: column;

      .MuiGrid-item {
        display: flex;
        width: 100%;
        margin-bottom: 1.5em;

        h2 {
          font-size: 6em;
          font-weight: bold;
        }
      }
    }
  }

  /* Styles for charts */
  .chart {
    height: 350px;
    width: 350px;
    margin: 0 auto;
  }
  .legend {
    flex-wrap: wrap;

    h4 {
      font-size: 1.5em;
    }
  }
  @media (max-width: 600px) {
    .legend {
    }
  }
`
