import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  useTheme,
} from "@mui/material"
import React from "react"
import { Pie } from "react-chartjs-2"

interface IProps {
  [x: string]: any
}
const AverageCarPerFamily = (props: IProps) => {
  const theme = useTheme()

  const data = {
    datasets: [
      {
        data: [32, 12, 8, 16],
        backgroundColor: ["#1bb9ab", "#8c1bb9", "#b6b91b", "#f786c8"],
        borderWidth: 5,
        borderColor: "#FFFFFF",
        hoverBorderColor: "#e6e6e6",
      },
    ],
    labels: ["BMW", "Toyota", "Audi", "Mercedes"],
  }

  const options = {
    plugins: {
      animation: true,
      cutoutPercentage: 80,
      layout: { padding: 0 },
      legend: {
        display: false,
      },
      maintainAspectRatio: true,
      responsive: true,
      tooltips: {
        backgroundColor: theme.palette.background.paper,
        bodyFontColor: theme.palette.text.secondary,
        borderColor: theme.palette.divider,
        borderWidth: 1,
        enabled: true,
        footerFontColor: theme.palette.text.secondary,
        intersect: false,
        mode: "index",
        titleFontColor: theme.palette.text.primary,
      },
    },
  }

  return (
    <Card {...props}>
      <CardHeader title="Ave. Cars per family" sx={{ color: "#0a6d94" }} />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: "auto",
            position: "relative",
          }}
        >
          <Typography variant="body1">
            Total Targeted: <strong>32</strong>
          </Typography>
          <Typography variant="body1">
            Average car per family: <strong>4</strong>
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: "auto",
            position: "relative",
          }}
        >
          <Pie data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  )
}

export default AverageCarPerFamily
