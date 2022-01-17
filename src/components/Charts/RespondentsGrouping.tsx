import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings"
import ChildCareIcon from "@mui/icons-material/ChildCare"
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns"
import GppBadIcon from "@mui/icons-material/GppBad"
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  useTheme,
} from "@mui/material"
import { ArcElement, Chart } from "chart.js"
import React from "react"
import { Doughnut } from "react-chartjs-2"
import { TDBPayload } from "../../types/type"
import { getSurveys } from "../../utils/database"

Chart.register(ArcElement)

interface IProps {
  [x: string]: any
}
interface IChart {
  totalAdolescent: string | number
  totalUnlicensed: string | number
  totalBeginner: string | number
  totalTargeted: string | number
}
const RespondentsGrouping = (props: IProps) => {
  const [survey, setSurvey] = React.useState<TDBPayload[]>([])
  const theme = useTheme()

  React.useEffect(() => {
    const data = getSurveys()
    setSurvey(data)
  }, [])

  const chartData = React.useMemo(() => {
    let totalAdolescent = 0
    let totalUnlicensed = 0
    let totalBeginner = 0
    let totalTargeted = 0
    let percentages: IChart = {
      totalAdolescent: 0,
      totalUnlicensed: 0,
      totalBeginner: 0,
      totalTargeted: 0,
    }

    survey.forEach((item) => {
      if (+item.age < 18) {
        totalAdolescent += 1
      } else if (item.licensed?.toLowerCase().includes("no")) {
        totalUnlicensed += 1
      } else if (item.beginner?.toLowerCase().includes("yes")) {
        totalBeginner += 1
      } else if (item.beginner?.toLowerCase().includes("no")) {
        totalTargeted += 1
      }
    })

    percentages.totalAdolescent = (
      (totalAdolescent / survey.length) *
      100
    ).toFixed(0)
    percentages.totalUnlicensed = (
      (totalUnlicensed / survey.length) *
      100
    ).toFixed(0)
    percentages.totalBeginner = ((totalBeginner / survey.length) * 100).toFixed(
      0
    )
    percentages.totalTargeted = ((totalTargeted / survey.length) * 100).toFixed(
      0
    )

    return {
      dataList: [
        totalAdolescent,
        totalUnlicensed,
        totalBeginner,
        totalTargeted,
      ],
      percentages,
    }
  }, [survey])

  const data = {
    datasets: [
      {
        data: chartData.dataList,
        backgroundColor: ["#2ed7ff", "#b9481b", "#1b8cb9", "#1bb9ab"],
        borderWidth: 8,
        borderColor: "#FFFFFF",
        hoverBorderColor: "#FFFFFF",
      },
    ],
    labels: ["Adolescent", "Unlicensed", "First Timer", "Targeted"],
  }

  const options = {
    plugins: {
      animation: true,
      cutoutPercentage: 80,
      layout: { padding: 0 },
      legend: {
        display: false,
      },
      maintainAspectRatio: false,
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
      title: "Adolescent",
      value: chartData.percentages.totalAdolescent,
      icon: ChildCareIcon,
      color: "#2ed7ff",
    },
    {
      title: "Unlicensed",
      value: chartData.percentages.totalUnlicensed,
      icon: GppBadIcon,
      color: "#b9481b",
    },
    {
      title: "Beginner",
      value: chartData.percentages.totalBeginner,
      icon: FollowTheSignsIcon,
      color: "#1b8cb9",
    },
    {
      title: "Targeted",
      value: chartData.percentages.totalTargeted,
      icon: AdminPanelSettingsIcon,
      color: "#1bb9ab",
    },
  ]

  return (
    <Card {...props}>
      <CardHeader title="Respondent Groups" sx={{ color: "#0a6d94" }} />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: "auto",
            position: "relative",
          }}
        >
          <Doughnut data={data} options={options} />
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

export default RespondentsGrouping
