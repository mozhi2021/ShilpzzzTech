import React, { useEffect } from "react";
import Phone from "./Phone";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import { useState } from "react";
import { TextField } from "@mui/material";
import { formValues } from "react";
import { useForm, Form } from "../components/useForm";
import { ControlPointSharp } from "@mui/icons-material";
import Controls from "../components/Controls";

const initialFValues = {
  id: 0,
  fullName: "",
  email: " ",
  phoneNumber: " ",
  message: "",
};

export default function Contactus(props) {
  // const [txt, setTxt] = useState("");

  // const onInputChange = (e) => {
  //   const { value } = e.target;
  //   console.log("Input value: ", value);

  //   const re = /^[A-Za-z]+$/;
  //   if (value === "" || re.test(value)) {
  //     setTxt(value);
  //   } // validation for name
  // };

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

    if (fieldsValues === values)
      return Object.values(temp).every((x) => x === "");
  };
  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

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
  }, [recordForEdit, setValues]);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 450,
          height: 450,
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
            {/* <TextField */}
            <Controls.Input
              name="Full Name"
            // value={values.fullName}

              // id="standard-basic"
              label="Fullname"
              variant="standard"
              className="form-control"
              // value={txt}
              onChange={handleInputChange}
              required
              // helperText="Incorrect entry."
              error = {errors.fullName}

            />
            <br />
            {/* <TextField */}
            <Controls.Input
              // id="standard-basic"
              label="Email"
              variant="standard"
              // value={values.email}
              onChange={handleInputChange}
              error={errors.email}

            />
            <br />
            {/* <TextField */}
            <Controls.Input
              // id="standard-basic"
              label="Phone number"
              variant="standard"
              // required={false}
              // value={values.phoneNumber}
              onChange={handleInputChange}
            error={errors.phoneNumber}

            />

            <br />
            {/* <TextField */}
            <Controls.Input
              id="standard-basic"
              label="Message"
              variant="standard"
              onChange={handleInputChange}
            />
            <br />
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" color="default" onClick={resetForm} />

            <br />

            {/* <button className="button">Submit</button> */}
          </Form>
        </Box>
      </Paper>
    </Box>
  );
}
