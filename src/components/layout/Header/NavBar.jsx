import React from "react";
import { ReactDOM } from "react";
import "./header.css";
import { Toolbar } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import cmplogo from "../../../images/logo_new.png";
import { height } from "@mui/system";
import { Stack } from "@mui/material";

export default function NavBar() {
  return (
    <Container>
      <Toolbar>
        <Grid container spacing={7}>
          <Grid item xs={6}>
            <img src={cmplogo} alt="logo_new" height=" 100" />
          </Grid>

          <Grid item xs={6} >
              <Stack
                direction="row"
                spacing={3}
                sx={{ paddingTop:3}}
                alignItems= "end"

              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link"
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/aboutus"
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link"
                  }
                >
                  About US
                </NavLink>

                <NavLink
                  to="/Ourservices"
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link"
                  }
                >
                  Our Services
                </NavLink>

                <NavLink
                  to="/contactus"
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link"
                  }
                >
                  Contact US
                </NavLink>
              </Stack>
          </Grid>
        </Grid>
      </Toolbar>
    </Container>
  );
}
