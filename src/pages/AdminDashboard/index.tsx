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

const AdminDashboard = () => {
  return (
    <AuthLayout>
      <Wrapper>
        <Grid container className="overview summary">
          <Grid item className="adolescent">
            <div className="info">
              <Typography variant="h5">Adolescent</Typography>
              <Icon className="icon">
                <ChildCareIcon />
              </Icon>
            </div>
            <div className="total">
              <Typography variant="h2">12</Typography>
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
              <Typography variant="h2">23</Typography>
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
              <Typography variant="h2">5</Typography>
            </div>
          </Grid>
          <Grid item className="target">
            <div className="info">
              <Typography variant="h5">Targetables</Typography>
              <Icon className="icon">
                <AdminPanelSettingsIcon />
              </Icon>
            </div>
            <div className="total">
              <Typography variant="h2">37</Typography>
            </div>
          </Grid>
        </Grid>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Container maxWidth={false}>
            <Grid container spacing={3}>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <RespondentsGrouping />
              </Grid>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <FuelEmission sx={{ height: "100%" }} />
              </Grid>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <Drivetrain />
              </Grid>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <AverageCarPerFamily />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Wrapper>
    </AuthLayout>
  )
}

export default AdminDashboard
