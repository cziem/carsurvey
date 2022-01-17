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
import { Pie } from "react-chartjs-2"

Chart.register(ArcElement, Tooltip)

interface IProps {
  [x: string]: any
}
const FuelEmission = (props: IProps) => {
  const theme = useTheme()

  const data = {
    datasets: [
      {
        data: [32, 12],
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
      title: "Total Targetables",
      value: 32,
      icon: AdminPanelSettingsIcon,
      color: "#2ed7ff",
    },
    {
      title: "Care about emission",
      value: 12,
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
