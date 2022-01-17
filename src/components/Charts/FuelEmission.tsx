import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings"
import FlareIcon from "@mui/icons-material/Flare"
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  useTheme,
} from "@mui/material"
import { ArcElement, Chart, Tooltip } from "chart.js"
import React from "react"
import { Pie } from "react-chartjs-2"
import { TDBPayload } from "../../types/type"
import { getSurveys } from "../../utils/database"

Chart.register(ArcElement, Tooltip)

interface IProps {
  [x: string]: any
}
interface IChart {
  totalCare: string | number
  totalDontCare: string | number
}

const FuelEmission = (props: IProps) => {
  const [survey, setSurvey] = React.useState<TDBPayload[]>([])
  const theme = useTheme()

  React.useEffect(() => {
    const data = getSurveys()
    setSurvey(data)
  }, [])

  const chartData = React.useMemo(() => {
    let totalCare = 0
    let totalDontCare = 0
    let totalTargeted = survey.filter((item) =>
      item.beginner?.toLowerCase().includes("no")
    ).length
    let percentages: IChart = {
      totalCare: 0,
      totalDontCare: 0,
    }

    survey.forEach((item) => {
      if (
        item.beginner?.toLowerCase().includes("no") &&
        item.emission?.toLowerCase().includes("yes")
      ) {
        totalCare += 1
      } else if (
        item.beginner?.toLowerCase().includes("no") &&
        item.emission?.toLowerCase().includes("no")
      ) {
        totalDontCare += 1
      }
    })

    percentages.totalCare = ((totalCare / totalTargeted) * 100).toFixed(0)
    percentages.totalDontCare = ((totalDontCare / totalTargeted) * 100).toFixed(
      0
    )

    return {
      dataList: [totalCare, totalDontCare],
      percentages,
    }
  }, [survey])

  const data = {
    datasets: [
      {
        data: chartData.dataList,
        backgroundColor: ["#1bb9ab", "#8c1bb9"],
        borderWidth: 5,
        borderColor: "#FFFFFF",
        hoverBorderColor: "#e6e6e6",
      },
    ],
    labels: ["Targeted", "Care about emission"],
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

  const respondentGroups = [
    {
      title: "Cares",
      value: chartData.percentages.totalCare,
      icon: AdminPanelSettingsIcon,
      color: "#2ed7ff",
    },
    {
      title: "Don't care",
      value: chartData.percentages.totalDontCare,
      icon: FlareIcon,
      color: "#8c1bb9",
    },
  ]

  return (
    <Card {...props}>
      <CardHeader title="Care About Fuel Emission" sx={{ color: "#0a6d94" }} />
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 2,
            mt: 2,
          }}
          className="legend"
        >
          {respondentGroups.map(({ color, icon: Icon, title, value }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: "center",
              }}
            >
              <Icon color="action" />
              <Typography color="textPrimary" variant="body1">
                {title}
              </Typography>
              <Typography style={{ color }} variant="h4">
                {value}%
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}

export default FuelEmission
