import React, { useEffect } from "react";
import Phone from "../components/controls/Phone";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import { Grid } from "@mui/material";
import { useState } from "react";
import { TextField } from "@mui/material";
import { formValues } from "react";
import { useForm, Form } from "../components/useForm";
import Controls from "../components/Controls";
import Name from "../components/controls/Name";
import { TextFields } from "@mui/icons-material";

const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  phoneNumber: "",
  message: "",
};

export default function Contactus(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required.";

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

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };
  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    // Window.alert(values);

    e.preventDefault();
    if (validate()) {
      Window.alert(JSON.stringify(values));
      // addOrEdit(values, resetForm);
      resetForm();
    }
  };

  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  }; //This is for Multiline textatrea

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
        {/* <Box
          component={"form"}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        > */}
        <Form onSubmit={handleSubmit}>
          <Grid container sx={{ justifyContent: "center" }}>
            <h1> Fill the details</h1>

            <Grid item xs={12}>
              <Grid container sx={{ justifyContent: "center" }}>
                <Name
                  label="Full Name"
                  name="fullName"
                  value={values.fullName}
                  onChange={handleInputChange}
                  required={true}
                  error={errors.fullName}
                />

                <br />

                <Controls.Input
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleInputChange}
                  error={errors.email}
                />
                <br />
                <Phone
                  label= "Phone Number"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  onChange={handleInputChange}
                  required={true}
                  error={errors.phoneNumber}
                />

                <br />
                <TextField
                  id="standard-textarea"
                  label="Message"
                  onChange={handleInputChange}
                  error={errors.message}
                  multiline
                  variant="standard"
                />

                <br />
                <br />

                {/* <div> */}
                <Grid container sx={{ justifyContent: "center" }}>
                  <Controls.Button
                    type="submit"
                    text="Submit"
                    // onClick={alert("Form Submitted")}
                  />
                  <Controls.Button
                    text="Reset"
                    color="default"
                    onClick={resetForm}
                  />
                </Grid>
                {/* </div> */}
              </Grid>
            </Grid>
          </Grid>
        </Form>
        {/* </Box> */}
      </Paper>
    </Box>
  );
}
