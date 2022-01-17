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

Chart.register(ArcElement)

interface IProps {
  [x: string]: any
}
const Drivetrain = (props: IProps) => {
  const theme = useTheme()

  const data = {
    datasets: [
      {
        data: [8, 15, 22],
        backgroundColor: ["#2ed7ff", "#1b8cb9", "#b9481b"],
        borderWidth: 5,
        borderColor: "#FFFFFF",
        hoverBorderColor: "#FFFFFF",
      },
    ],
    labels: ["FWD", "RWD", "I don't know"],
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
      title: "FWD",
      value: 8,
      icon: ChildCareIcon,
      color: "#2ed7ff",
    },
    {
      title: "RWD",
      value: 15,
      icon: GppBadIcon,
      color: "#b9481b",
    },
    {
      title: "I don't Know",
      value: 22,
      icon: FollowTheSignsIcon,
      color: "#1b8cb9",
    },
  ]

  return (
    <Card {...props}>
      <CardHeader title="Drivetrain" sx={{ color: "#0a6d94" }} />
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

export default Drivetrain
