import React from "react";
import { TextField } from "@material-ui/core";

export default function Input(props) {
  const { name, label, value, error = null, onChange, ...other } = props;
  return (
    <TextField
      variant="standard"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      fullWidth ={{width:500,maxWidth:'100%'}}
      required
    //   error
    //   helperText = "some validation error"
    //   {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
}
