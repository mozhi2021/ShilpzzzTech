import React from "react";
import { ReactDOM } from "react";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import { useState } from "react";
import { TextField } from "@mui/material";

export default function Contactus() {
  // const [inputs, setInputs] = useState({});

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setInputs((values) => ({ ...values, [name]: value }));
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
    // alert(inputs);   
  const [txt, setTxt] = useState("");

  const onInputChange = (e) => {
    const { value } = e.target;
    console.log("Input value: ", value);

    const re = /^[A-Za-z]+$/;
    if (value === "" || re.test(value)) {
      setTxt(value);
    } // validation for name
  };









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

        {/* <form onSubmit={handleSubmit}> */}
        <h1> Fill the details</h1>
        <TextField
              fullWidth
              id="standard-basic"
              label="Fullname"
              variant="standard"
              className="form-control"
              value={txt}
              onChange={onInputChange}
            />
            <br />
            <TextField id="standard-basic" label="Email" variant="standard" />
            <br />
            <TextField
              id="standard-basic"
              label="Phone number"
              variant="standard"
            />

            <br />
            <TextField id="standard-basic" label="Message" variant="standard" />
            <br />
            <br />

            <button className="button">Submit</button>


        {/* </form> */}
        </Box>
      </Paper>
    </Box>
  );
}

