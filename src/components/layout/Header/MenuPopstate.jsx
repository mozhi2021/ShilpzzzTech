import React from "react";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { NavLink } from "react-router-dom";

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <MenuIcon variant="contained" {...bindTrigger(popupState)} />
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>
            <NavLink
                  to="/"
                >
                  Home
                </NavLink>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
            <NavLink
                  to="/aboutus"
                >
                  About US
                </NavLink>
            </MenuItem>

            <MenuItem onClick={popupState.close}>
            <NavLink
                  to="/Ourservices"
                >
                  Our Services
                </NavLink>
            </MenuItem>

            <MenuItem onClick={popupState.close}>
            <NavLink
                  to="/contactus"
                >
                Contact US
                </NavLink>
            </MenuItem>

          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
