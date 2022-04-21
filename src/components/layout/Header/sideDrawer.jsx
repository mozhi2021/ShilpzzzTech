// import React from "react";
// import { styled } from "@mui/material";
// import { useTheme } from "@mui/material";
// import { Box } from "@mui/material";
// import { Drawer } from "@mui/material";
// import NavBar from "./NavBar";
// import { Toolbar } from "@mui/material";
// import List from "@mui/material";
// import { Typography } from "@mui/material";
// import { IconButton } from "@mui/material";
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import { MuiAppBar } from "@mui/material";
// import { CssBaseline } from "@mui/material";
// import MenuIcon from '@mui/icons-material/Menu';
// import { Divider } from "@mui/material";


// const drawerWidth = 200;

// const Main = styled('main',{shouldForwardProp:(prop)=>prop!=='open'})(
//     ({theme,open})=>({
//         flexGrow: 1,
//         padding: theme.spacing(3),
//         transition: theme.transitions.create('margin',{
//             easing:theme.transitions.easing.sharp,
//             duration:theme.transitions.duration.leavingScreen,
//         }),
//         marginRight:-drawerWidth,
//         ...(open && {
//             transition: theme.transitions.create('margin',{
//                 easing:theme.transitions.easing.easeOut,
//                 duration:theme.transitions.duration.enteringScreen,
//         }),
//         marginRight: 0,
//     }),
// }),
// );

// const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== 'open',
//   })(({ theme, open }) => ({
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(open && {
//       width: `calc(100% - ${drawerWidth}px)`,
//       transition: theme.transitions.create(['margin', 'width'], {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginRight: drawerWidth,
//     }),
//   }));

//   const DrawerHeader = styled('div')(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-start',
//   }));

//   export default function sideDrawer(){
//       const theme = useTheme();
//       const [open, setOpen] = React.useState(false);

//       const handleDrawerOpen = () => {
//           setOpen(true);
//       };
//       const handleDrawerClose =() => {
//           setOpen(false);
//       };
//       return(
//           <Box sx={{display:'flex'}}>
//               <CssBaseline />
//               <NavBar position= "fixed" open={open}>
//                 <Toolbar>
//                     <Typography variant="h6" noWrap sx={{flexGrow: 1}}component="div">
//                         sideDrawer
//                     </Typography>
//                     <IconButton
//                     color="inherit"
//                     aria-label="open drawer"
//                     edge= "end"
//                     onClick={handleDrawerOpen}
//                     sx={{...(open && {display: 'none'})}}
//                     >
//                         <MenuIcon/>
//                     </IconButton>
//                 </Toolbar>
//               </NavBar>
//               <Main open={open}>
//                   <DrawerHeader/>
//               </Main>
//               <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//           },
//         }}
//         variant="persistent"
//         anchor="right"
//         open={open}
//       >
//           <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           </IconButton>
//         </DrawerHeader>        
//         <Divider />
//         <List>
//             {['Home','About Us','Our Services','Contact Us'].map((text,index)=>(
//                 <ListItem button key={text}>

//                 </ListItem>
//             ))}
//         </List>

//             </Drawer>
//           </Box>
//       )
//   }

  