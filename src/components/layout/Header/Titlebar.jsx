import React from "react";
import { ReactDOM } from "react";
import { AppBar, Badge } from "@mui/material";
import { Box } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { SocialIcon } from "react-social-icons";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Twitter } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { styled } from "@mui/material";
import { Container } from "@mui/material";
import { Stack } from "@mui/material";
import { TextField } from "@mui/material";
import Cdate from "./CurrentDate";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function Navigationmenu() {
  return (

    <AppBar sx={{ bgcolor: "rgb(63, 181, 63) " }} position="static">
          <Toolbar>
          <Container>
            <Grid container spacing={5}>
              <Grid item xs={3}>
                  <Cdate />         
              </Grid>

              <Grid item xs={3} sx={{paddingTop:10}}>
                <Grid container>

                  <Grid item xs={2}>
                  <LocalPhoneIcon />  
                  </Grid>

                  <Grid item xs={10}>
                  <Typography>
                  904 332 8470
                    </Typography>
                  </Grid>

                </Grid>
              </Grid>

              <Grid item xs={6}>
                <Stack
                  direction="row"
                  sx={{ justifyContent: "right" }}
                  alignItems="end"
                  spacing={1}
                >
                  <Badge>
                      <FacebookIcon />
                  </Badge>
                  <Badge>
                      <TwitterIcon />
                  </Badge>
                </Stack>
              </Grid>
            </Grid>
            </Container>
          </Toolbar>
      </AppBar>
  );
}
