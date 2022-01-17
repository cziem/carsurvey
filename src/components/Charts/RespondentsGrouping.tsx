import { Doughnut } from "react-chartjs-2"
import { Chart, ArcElement } from "chart.js"
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  useTheme,
} from "@mui/material"
import ChildCareIcon from "@mui/icons-material/ChildCare"
import GppBadIcon from "@mui/icons-material/GppBad"
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns"
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings"

Chart.register(ArcElement)

interface IProps {
  [x: string]: any
}
const RespondentsGrouping = (props: IProps) => {
  const theme = useTheme()

  const data = {
    datasets: [
      {
        data: [8, 15, 22, 32],
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
      value: 8,
      icon: ChildCareIcon,
      color: "#2ed7ff",
    },
    {
      title: "Unlicensed",
      value: 15,
      icon: GppBadIcon,
      color: "#b9481b",
    },
    {
      title: "Beginner",
      value: 22,
      icon: FollowTheSignsIcon,
      color: "#1b8cb9",
    },
    {
      title: "Targeted",
      value: 32,
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
