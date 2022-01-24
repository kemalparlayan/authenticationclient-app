import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, purple,orange } from '@mui/material/colors';
import { Avatar, Box, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material';
import { bgcolor } from '@mui/system';
import LockIcon from '@mui/icons-material/Lock';
import HowToRegIcon from '@mui/icons-material/HowToReg';

function divDon(i:number):any{
  return <div className="kutu">Div {i}</div>
}

function App() {
/*   const theme=createTheme({
    palette:{
      success:orange
    }
  }
  ); */
  const theme=createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box sx={{
        mt:8,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
      }}>
        <Avatar sx={{ m: 1, bgcolor: '#00A092' }}>
        <HowToRegIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={()=>{}} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I accept the terms in the license agreement."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2}}
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
          </Box>
      </Box>
      </Container>

    </ThemeProvider>
  );
}

export default App;
