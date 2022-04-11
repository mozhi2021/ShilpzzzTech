import React from "react";
import { ReactDOM } from "react";
import { AppBar } from "@mui/material";
import { Box } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { styled } from "@mui/material";
import { Container } from "@mui/material";
import { Stack } from "@mui/material";
import { TextField } from "@mui/material";

export default function NavBar() {
  return (
      <Container>
        <Toolbar>
          <Grid container spacing={5}>
            <Grid item xs={4}>
              <p>Logo</p>
            </Grid>

            <Grid item xs={2}>
              <a href="/">Home</a>
            </Grid>

            <Grid item xs={2}>
              <a href="/Aboutus">About US</a>
            </Grid>

            <Grid item xs={2}>            
              <a href="/Ourservices">Our Services</a>
            </Grid>

            <Grid item xs={2}>
            <a href="/Contactus">Contact US</a>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
  );
}
