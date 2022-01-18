import { useFormik } from "formik"
import * as Yup from "yup"
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import FacebookIcon from "@mui/icons-material/Facebook"
import GoogleIcon from "@mui/icons-material/Google"
import { useLocation, useNavigate } from "react-router-dom"

interface ILocation {
  pathname: string
  state: any
}

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation() as ILocation

  let from = location.state?.from?.pathname || "/overview"

  const formik = useFormik({
    initialValues: {
      email: "admin@carsurvey.io",
      password: "Secured123",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: (values) => {
      localStorage.setItem("car-survey-auth", JSON.stringify(values))
      navigate(from, { replace: true })
    },
  })

  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100vh",
          bgcolor: "#c9edff",
        }}
      >
        <Container maxWidth="sm">
          <Button
            onClick={() => navigate("/survey")}
            startIcon={<ArrowBackIcon fontSize="small" />}
          >
            Try Survey
          </Button>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Sign in
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Sign in to the admin platform
              </Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Button
                  color="info"
                  fullWidth
                  startIcon={<FacebookIcon />}
                  size="large"
                  variant="contained"
                >
                  Login with Facebook
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  fullWidth
                  color="error"
                  startIcon={<GoogleIcon />}
                  size="large"
                  variant="contained"
                >
                  Login with Google
                </Button>
              </Grid>
            </Grid>
            <Box
              sx={{
                pb: 1,
                pt: 3,
              }}
            >
              <Typography align="center" color="textSecondary" variant="body1">
                or login with email address
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="standard"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="standard"
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign In Now
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  )
}

export default Login
