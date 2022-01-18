import { Box, Container, Grid, Icon, Typography } from "@mui/material"
import React from "react"
import AuthLayout from "../../components/Layouts/AuthLayout"
import { Wrapper } from "./adminDashboard.styles"
import ChildCareIcon from "@mui/icons-material/ChildCare"
import GppBadIcon from "@mui/icons-material/GppBad"
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns"
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings"
import RespondentsGrouping from "../../components/Charts/RespondentsGrouping"
import FuelEmission from "../../components/Charts/FuelEmission"
import Drivetrain from "../../components/Charts/Drivetrain"
import AverageCarPerFamily from "../../components/Charts/AverageCarPerFamily"
import { getSurveys } from "../../utils/database"
import { TDBPayload } from "../../types/type"

const AdminDashboard = () => {
  const [survey, setSurvey] = React.useState<TDBPayload[]>([])

  React.useEffect(() => {
    const init = () => {
      const data = getSurveys()
      setSurvey(data)
    }

    init()
    window.addEventListener("storage", init)

    return () => {
      window.removeEventListener("storage", init)
    }
  }, [])

  // Get OverviewSummary
  const getOverviewSummary = (type: string) => {
    if (type === "adolescent") {
      return survey.filter((item) => +item.age < 18).length
    }
    if (type === "unlicensed") {
      return survey.filter((item) =>
        item.licensed?.toLowerCase().includes("no")
      ).length
    }
    if (type === "beginner") {
      return survey.filter((item) =>
        item.beginner?.toLowerCase().includes("yes")
      ).length
    }
    if (type === "targeted") {
      return survey.filter((item) =>
        item.beginner?.toLowerCase().includes("no")
      ).length
    }
  }

  return (
    <AuthLayout>
      <Wrapper>
        <Container maxWidth={false}>
          <Grid
            container
            className="overview summary"
            spacing={3}
            sx={{ justifyContent: "space-around" }}
          >
            <Grid item className="adolescent">
              <div className="info">
                <Typography variant="h5">Adolescent</Typography>
                <Icon className="icon">
                  <ChildCareIcon />
                </Icon>
              </div>
              <div className="total">
                <Typography variant="h2">
                  {getOverviewSummary("adolescent")}
                </Typography>
              </div>
            </Grid>
            <Grid item className="unlicensed">
              <div className="info">
                <Typography variant="h5">Unlicensed</Typography>
                <Icon className="icon">
                  <GppBadIcon />
                </Icon>
              </div>
              <div className="total">
                <Typography variant="h2">
                  {getOverviewSummary("unlicensed")}
                </Typography>
              </div>
            </Grid>
            <Grid item className="first-timer">
              <div className="info">
                <Typography variant="h5">First Timers</Typography>
                <Icon className="icon">
                  <FollowTheSignsIcon />
                </Icon>
              </div>
              <div className="total">
                <Typography variant="h2">
                  {getOverviewSummary("beginner")}
                </Typography>
              </div>
            </Grid>
            <Grid item className="target">
              <div className="info">
                <Typography variant="h5">Targeted</Typography>
                <Icon className="icon">
                  <AdminPanelSettingsIcon />
                </Icon>
              </div>
              <div className="total">
                <Typography variant="h2">
                  {getOverviewSummary("targeted")}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
            px: 2,
          }}
        >
          <Container maxWidth={false}>
            <Grid
              container
              spacing={6}
              sx={{ justifyContent: "space-between" }}
            >
              <Grid item xl={6} lg={6} sm={12} xs={12} mb={4}>
                <RespondentsGrouping />
              </Grid>
              <Grid item xl={6} lg={6} sm={12} xs={12} mb={4}>
                <FuelEmission />
              </Grid>
              <Grid item xl={6} lg={6} sm={12} xs={12}>
                <AverageCarPerFamily />
              </Grid>
              <Grid item xl={6} lg={6} sm={12} xs={12}>
                <Drivetrain />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Wrapper>
    </AuthLayout>
  )
}

export default AdminDashboard
