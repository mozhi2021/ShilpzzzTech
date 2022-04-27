import React from "react";
import "./header.css";
import { AppBar, Badge } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { Stack } from "@mui/material";
import Cdate from "./CurrentDate";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MenuPopupState from "./MenuPopstate";
import { MenuPopState as TempMenu } from "./MenuPopstate";


export default function Titlebar() {
  return (
    <AppBar
      sx={{ bgcolor: "rgb(63, 181, 63) ", height: 30, alignItems: "text-top" }}
      position="static"
    >
      <Toolbar>
        <Container>
          <Grid container className="titlebar">
            <Grid item xs={3} sx={{ paddingBottom: 3.8 }}>
            <div className="menuButton">
                  <MenuPopupState />
                  </div>
              {/* <Cdate /> */}



            </Grid>
            <Grid item xs={4}>
              <Grid container>
                <Grid item xs={1}>
                  <LocalPhoneIcon />
                </Grid>

                <Grid item xs={11}>
                  +91 904 332 0000
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={5}>
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
                <Badge >
                  <div className="menuButton">
                  <MenuPopupState />
                  </div>
                </Badge>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
