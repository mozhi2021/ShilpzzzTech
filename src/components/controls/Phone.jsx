import React from "react";
import { PropTypes } from "prop-types";
import { IMaskInput } from "react-imask";
import { FormHelperText } from "@mui/material";
import { InputLabel } from "@mui/material";
import { FormControl } from "@mui/material";
import Input from "@mui/material/Input";
import { TextField } from "@mui/material";

const TextMaskPhone = React.forwardRef(function TextMaskPhone(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-0000"
      definitions={{ "#": /[1-9]/ }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});
TextMaskPhone.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function phone(props) {
  const { name, label, value, onChange, error = null, required } = props;

  
  return (
    
      <>
      
      <TextField
        value={value}
        onChange={onChange}
        name={name}
        inputComponent={TextMaskPhone}
        label={label}
        variant="standard"
        inputProps={{
          inputmode: "numeric"
        }}
  
        {...(error && { error: true, helperText: error })}

      />
      </>

      // {error && <FormHelperText>{error}</FormHelperText>}
    // </FormControl>
  )
}
