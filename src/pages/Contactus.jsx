import React from "react";
import Phone from "../components/controls/Phone";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { useForm, Form } from "../components/useForm";
import Controls from "../components/Controls";
import Name from "../components/controls/Name";
import { useState } from "react";

const initialFValues = {
  fullName: "",
  email: "",
  phoneNumber: "",
  message: "",
};

export default function Contactus(props) {
  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("fullName" in fieldValues) {
      temp.fullName = fieldValues.fullName ? "" : "This field is required.";
        if(fieldValues.fullName != '')
        temp.fullName = (/^[A-Za-z]+$/.test(fieldValues.fullName)) ? "" : "Name should be alphabets";
      }
    }
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";

    if ("phoneNumber" in fieldValues)
      temp.phoneNumber =
        fieldValues.phoneNumber.length > 9
          ? ""
          : "Minimum 10 numbers required.";
    setErrors({ ...temp });

    if ("message" in fieldValues) {
      temp.message = fieldValues.message ? "" : "This field is required.";
    }

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };
  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      window.alert(JSON.stringify(values));

      resetForm();
    }
  };

  const [value, setValue] = React.useState("Controlled");
  const handleChange = (event) => {
    setValue(event.target.value);
  }; //This is for Multiline

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 800,
          height: 550,
        },
      }}
    >
      <Paper elevation={3} sx={{ m: 2, width: "100ch" }}>
        <Form onSubmit={handleSubmit}>
          <Grid container sx={{ justifyContent: "center" }}>
            <h1> Fill the details</h1>

            <Grid container sx={{ justifyContent: "center" }}>
              {/* <TextField */}
              {/* <Name */}
              <Controls.Input
                label="Full Name"
                name="fullName"
                value={values.fullName}
                onChange={handleInputChange}
                error={errors.fullName}
                variant="standard"
              />

              <br />

              <Controls.Input
                label="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                // required={true}
                error={errors.email}
                
              />
              <br />
              <Phone
                label="Phone Number"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleInputChange}
                required={true}
                error={errors.phoneNumber}
              />

              <br />
              <TextField
                // <Controls.Input
                name="message"
                label="Message"
                onChange={handleInputChange}
                value={values.message}
                error={errors.message}
                multiline
                variant="standard"
              />
              <br />
              <Grid container sx={{ justifyContent: "center" }}>
                <Controls.Button type="submit" text="Submit" />
                <Controls.Button
                  text="Reset"
                  color="default"
                  onClick={resetForm}
                />
              </Grid>
            </Grid>
          </Grid>
        </Form>
      </Paper>
    </Box>
  );
}
