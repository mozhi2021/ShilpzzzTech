import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

function PhoneIconchange() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  <div>
    <phoneIcon
      id="demo-positioned-Icon"
      aria-controls={open ? "demo-positioned-Icon" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
      onClick={handleClick}
    />
    <phoneIcon
      id="demo-positioned-menu"
      aria-labelledby="demo-positioned-button"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
        648239
    </phoneIcon>
    <LocalPhoneIcon onClick={handleClose} />
  </div>;
}

export default PhoneIconchange;
