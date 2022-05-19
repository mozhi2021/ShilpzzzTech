// import React from "react";
// import "./header.css";
// import { AppBar, Badge } from "@mui/material";
// import { Toolbar } from "@mui/material";
// import { Typography } from "@mui/material";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import { Grid } from "@mui/material";
// import { Container } from "@mui/material";
// import { Stack } from "@mui/material";
// import Cdate from "./CurrentDate";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// import Positionedmenu from "./Positionedmenu";
// import { Menu } from "@mui/material";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import { Divider } from "@mui/material";

// export default function Titlebar() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <AppBar
//       sx={{ bgcolor: "rgb(63, 181, 63) ", height: 30, alignItems: "normal" }}
//       position="sticky"
//     >
//       <Toolbar sx={{ alignItems: "baseline" }}>
//         <Container>
//           <Grid container className="titlebar">
//             <Grid item xs={8} sx={{ paddingBottom: 1 }}>
//               <Stack
//                 direction="row"
//                 sx={{ justifyContent: "left" }}
//                 alignItems="start"
//                 spacing={1}
//               >
//                 <AccessTimeIcon />
//                 Mon-Fri 09:00-17:00,
//                 {/* <Divider orientation="vertical" flexItem /> */}

//                 <Cdate />
//               </Stack>
//             </Grid>
//             <Grid item xs={2}>
//               <Grid container>
//                 {/* <Grid item xs={1}>
//                   <LocalPhoneIcon />
//                 </Grid>

//                 <Grid item xs={11}>
//                   +91 904 332 0000
//                 </Grid> */}
//                 <Divider orientation="vertical" flexItem />

//                 <Badge>
//                   <LocalPhoneIcon
//                     id="demo-positioned-button"
//                     aria-controls={open ? "demo-positioned-menu" : undefined}
//                     aria-haspopup="true"
//                     aria-expanded={open ? "true" : undefined}
//                     onClick={handleClick}
//                   />
//                   <Menu
//                     id="demo-positioned-menu"
//                     aria-labelledby="demo-positioned-button"
//                     anchorEl={anchorEl}
//                     open={open}
//                     onClose={handleClose}
//                     anchorOrigin={{
//                       vertical: "top",
//                       horizontal: "left",
//                     }}
//                     transformOrigin={{
//                       vertical: "top",
//                       horizontal: "left",
//                     }}
//                     sx={{ paddingLeft: "2px" }}
//                   >
//                     +91 90433 20000
//                   </Menu>
//                 </Badge>

//                 <Badge>
//                   <div className="phonenumber">+91 904 332 0000</div>
//                 </Badge>
//                 <Divider orientation="vertical" flexItem />
//               </Grid>
//             </Grid>

//             <Grid item xs={2}>
//               <Stack
//                 direction="row"
//                 sx={{ justifyContent: "right" }}
//                 alignItems="end"
//                 spacing={1}
//               >
//                 <Divider orientation="vertical" flexItem />
//                 <Badge>
//                   <FacebookIcon />
//                 </Badge>
//                 <Divider orientation="vertical" flexItem />
//                 <Badge>
//                   <TwitterIcon />
//                 </Badge>
//                 <Divider orientation="vertical" flexItem />

//                 <Badge>
//                   <div className="menuButton">
//                     <Positionedmenu />
//                   </div>
//                 </Badge>
//               </Stack>
//             </Grid>
//           </Grid>
//         </Container>
//       </Toolbar>
//     </AppBar>
//   );
// }
