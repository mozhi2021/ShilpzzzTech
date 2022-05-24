import React, { useEffect } from "react";
import Phone from "./Phone";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import { useState } from "react";
import { TextField } from "@mui/material";
import { formValues } from "react";
import { useForm, Form } from "../components/useForm";
import { ControlPointSharp } from "@mui/icons-material";


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

  const initialValues = {
    id: 0,
    fullName: "",
    email: " ",
    phoneNumber: " ",
  };
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldsValues = values) => {
    let temp = { ...errors };

    if ("fullName" in fieldsValues)
      temp.fullName = fieldsValues.fullName ? "" : "This field is required.";

    if ("email" in fieldsValues)
      temp.email = /$^|.+@.+..+/.test(fieldsValues.email)
        ? ""
        : "Email is not valid.";

    if ("phoneNumber" in fieldsValues)
      temp.phoneNumber =
        fieldsValues.phoneNumber.length > 9
          ? ""
          : "Minimum 10 numbers required.";
    setErrors({ ...temp });

    if (fieldsValues == values)
      return Object.values(temp).every((x) => x == "");
  };
  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };
  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit]);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 450,
          height: 400,
        },
      }}
    >
      <Paper elevation={3} sx={{ m: 1, width: "30ch" }}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "20ch" },
          }}
        >
                      <h1> Fill the details</h1>

          <Form onSubmit={handleSubmit}>
            <TextField
              error
              id="standard-basic"
              label="Fullname"
              variant="standard"
              className="form-control"
              // value={txt}
              value={values.fullName}
              onChange={onInputChange}
              helperText="Incorrect entry."
            />
            <br />
            <TextField
              error={errors.email}
              id="standard-basic"
              label="Email"
              variant="standard"
              value={values.email}
            />
            <br />
            <TextField
              error={errors.phoneNumber}
              id="standard-basic"
              label="Phone number"
              variant="standard"
              required={false}
              value={values.phoneNumber}
              onChange={handleInputChange}
            />

            <br />
            <TextField
              id="standard-basic"
              label="Message"
              variant="standard"
              onChange={handleInputChange}
            />
            <br />
            {/* <Controls.Button
            type = "submit"
            text = "Submit"/> */}

            <br />

            {/* <button className="button">Submit</button> */}
          </Form>
        </Box>
      </Paper>
    </Box>
  );
}
