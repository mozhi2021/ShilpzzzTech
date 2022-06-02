import React, { useEffect } from "react";
import Phone from "./Phone";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import { useState } from "react";
import { TextField } from "@mui/material";
import { formValues } from "react";
import { useForm, Form } from "../components/useForm";
import Controls from "../components/Controls";

const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  phoneNumber: "",
  message: "",
};

export default function Contactus(props) {
  const [txt, setTxt] = useState("");

  const onInputChange = (e) => {
    const { value } = e.target;
    console.log("Input value: ", value);

    const re = /^[A-Za-z]+$/;
    if (value === "" || re.test(value)) {
      setTxt(value);
    } // validation for name
  };

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
    e.preventDefault();
    if (validate()) {
      Window.alert("testing...");
      addOrEdit(values, resetForm);
    }
  };
  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit]);

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
          width: 450,
          height: 550,
        },
      }}
    >
      <Paper elevation={3} sx={{ m: 1, width: "30ch" }}>
        <Box
          component={"form"}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Form onSubmit={handleSubmit}>
            <h1> Fill the details</h1>

            {/* <TextField */}
            <Controls.Input
              name="fullName"
              label="Full Name"
              // value={values.fullName}
              // onChange={handleInputChange}
              onChange={onInputChange}
              error={errors.fullName}
              // variant="standard"
              className="form-control"
              value={txt}
              required
              // helperText="Incorrect entry."
            />
            <br />
            {/* <TextField */}

            <Controls.Input
              label="Email"
              name="email"
              value={values.email}
              // variant="standard"
              onChange={handleInputChange}
              error={errors.email}
            />
            <br />
            {/* <TextField */}
            <Phone
              label="Phone Number"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleInputChange}
              required={true}
              error={errors.phoneNumber}

              // onchange={onChange}
              // inputComponent="TextMaskPhone"
              // helperText="Incorrect entry"
            />
            {/* <Controls.Input
            label="Phone Number"
            name="phoneNumber"
            value={values.phoneNumber}
            // variant="standard"
            // required={false}
            onChange={handleInputChange}
            error={errors.phoneNumber}
          /> */}

            <br />
            {/* <Controls.Input
              id="standard-basic"
              label="Message"
              variant="standard"
              onChange={handleInputChange}
            /> */}
            <TextField
              id="standard-textarea"
              label="Message"
              // placeholder="Placeholder"
              // value={values.message}
              multiline
              variant="standard"
            />

            <br />
            <div>
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
            </div>
          </Form>
        </Box>
      </Paper>
    </Box>
  );
}
