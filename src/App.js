import {
  CssBaseline,
  Box,
  Container,
  Avatar,
  Typography,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  TextField,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
function App() {
  return (
    <div className="App">
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          mt={8}
        >
          <Avatar
            sx={{ color: "#fff", backgroundColor: "#9c27b0", margin: "8px" }}
          >
            <LockOutlinedIcon />
          </Avatar>

          <Typography variant="h5" gutterBottom component="h1">
            Sign up
          </Typography>
          <Box component="form" sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="firstName"
                  label="First Name"
                  variant="outlined"
                  autoComplete="given-name"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="lastname"
                  label="Last Name"
                  variant="outlined"
                  autoComplete="given-name"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  type="email"
                  label="Email Address"
                  variant="outlined"
                  autoComplete="email"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="password"
                  type="password"
                  label="Password"
                  name="password"
                  variant="outlined"
                  autoComplete="new-password"
                  required
                  fullWidth
                />
              </Grid>
            </Grid>

            <FormGroup sx={{ mt: 3 }}>
              <FormControlLabel
                control={<Checkbox />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </FormGroup>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
            <Typography
              variant="body2"
              color="text.secondary"
              align="center"
              sx={{ mt: 4 }}
            >
              {"Copyright © "}
              <Link color="inherit" href="#">
                Signup Page
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default App;
