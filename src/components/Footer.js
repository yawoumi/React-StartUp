import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import logo from '../Data/logoChristoumiv2-removebg-preview.png';
import { NavLink } from "react-router-dom";
 
export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#D3D1D1"
        color="#434343"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              {/*<Box borderBottom={1}>Account</Box>*/}
              
              <Box>
                <img alt = "logo" src={logo} width="200" height="100"/>
              </Box>
              <Box>
                <p>
                  Christoumi <br></br>
                  5 chemin de Bellevue, Annecy-le-Vieux <br></br>
                  74940 ANNECY
                </p>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>About Us</Box>
              <Box>
              <NavLink className="nav-link" to="/team">
                Who are we ?
              </NavLink>
              </Box>
              <Box>
              <NavLink className="nav-link" to="/contact">
                Contact us
              </NavLink>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Privacy policy
                </Link>
              </Box>
            </Grid>
           
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Social Media</Box>
              <Box>
                <Link href="/" color="inherit">
                  LinkedIn
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Facebook
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Instagram
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Christoumi | Christelle Randriamahefa & Yawoumihani Hassani &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}