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
import { TBrandModel, TDBPayload } from "../../types/type"
import { getSurveys } from "../../utils/database"
import _ from "lodash"
import { Chart, Legend } from "chart.js"

Chart.register(Legend)

interface IProps {
  [x: string]: any
}
const AverageCarPerFamily = (props: IProps) => {
  const theme = useTheme()
  const [survey, setSurvey] = React.useState<TDBPayload[]>([])

  React.useEffect(() => {
    const data = getSurveys()
    setSurvey(data)
  }, [])

  const totalTargeted = () =>
    survey.filter((item) => item.beginner?.toLowerCase().includes("no")).length

  const averageCarPerFamily = () => {
    let data = survey.filter((item) =>
      item.beginner?.toLowerCase().includes("no")
    )
    return data.reduce((runningTotal, item) => {
      let total = runningTotal + Number(item?.carSize)

      return Math.round(total / data.length)
    }, 0)
  }

  const chartData = React.useMemo(() => {
    let res = survey
      .filter((item) => Array.isArray(item.carList))
      .map((item) => item.carList)

    let result = res.flat()
    let brands = Array.from(new Set(result.map((item) => item?.brand)))
    let dataList = Object.values(_.countBy(result, "brand"))

    return {
      brands,
      dataList,
    }
  }, [survey])

  const data = {
    datasets: [
      {
        data: chartData.dataList,
        backgroundColor: [
          "#1bb9ab",
          "#8c1bb9",
          "#b6b91b",
          "#f786c8",
          "#42ebddb5",
          "#af40dbac",
          "#cfaa64",
          "#403df39b",
        ],
        borderWidth: 5,
        borderColor: "#FFFFFF",
        hoverBorderColor: "#e6e6e6",
      },
    ],
    labels: chartData.brands,
  }

  const options = {
    plugins: {
      animation: true,
      cutoutPercentage: 80,
      layout: { padding: 0 },
      legend: {
        display: true,
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
            Total Survey: <strong>{survey.length}</strong>
          </Typography>
          <Typography variant="body1">
            Total Targeted: <strong>{totalTargeted()}</strong>
          </Typography>
          <Typography variant="body1">
            Average car per family: <strong>{averageCarPerFamily()}</strong>
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
