import React from "react";
import { AppBar, Button } from "@mui/material";
import { Badge } from "@mui/material";
import { Toolbar } from "@mui/material";

export default function BelowItems() {
  return (
    <AppBar
      sx={{ bgcolor: "rgb(87, 180, 87) ", height: 200, alignItems: "text-top" }}
      position="static"
    >
      <Toolbar>
        <Button variant="outlined">Contact US</Button>
      </Toolbar>
    </AppBar>
  );
}
