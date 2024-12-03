import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useSelector, useDispatch } from "react-redux";
import { createUser, actionEditUserDetails } from "../reducer/createReducer";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [inputData, setInputData] = useState({});
  const [errorShow, setErrorShow] = useState({
    name: false,
    number: false,
    email: false,
    age: false
  });

  const getFormData = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    const errors = {
      name: !inputData.name,
      number: !inputData.number,
      email: !inputData.email,
      age: !inputData.age,
    };

    // Set error states
    setErrorShow(errors);

    if (!errors.name  && !errors.number && !errors.email && !errors.age) {
     dispatch(createUser(inputData));
    setInputData("");
    navigate('/read');
    }
  }

  return (
    <form className="text-center bg-white my-9" >
      <div className="m-8">
        <TextField
          id="outlined-basic"
          label="Name"
          name="name"
          type="text"
          variant="outlined"
          value={inputData.name}
          onChange={getFormData}
          error={errorShow.name}
          helperText={errorShow.name ? "Please enter your name" : ""}
          
          sx={{
            width: "50%",
            "& label": {
              color: "#808080",
              fontFamily: "outfit !important",
              padding: "",
              fontSize: "1rem",
              letterSpacing: "",
            },
            "& input": {
              fontFamily: "outfit",
              fontSize: "1rem",
              fontWeight: "400",
              color: "#4D4D4D",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              padding: "",
              display: "flex",
              justifyContent: "center",
              alignItems: "center", // These should be strings
            },
            "& .MuiInputLabel-root": {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "outfit",
              color: "#808080",
              fontSize: "1rem",
            },
            "& .MuiInputLabel-shrink": {
              fontSize: "1rem", // Font size when label is up (focused)'
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "outfit",
            },
          }}
        />
      </div>

      <div className="m-8">
        <TextField
          id="outlined-basic"
          label="Number"
          name="number"
          type="number"
          required={true}
          value={inputData.number}
          variant="outlined"
          error={errorShow.number}
          helperText={errorShow.number? "Please enter your number": ""}
          onChange={getFormData}
          sx={{
            width: "50%",
            "& label": {
              color: "#808080",
              fontFamily: "outfit !important",
              padding: "",
              fontSize: "1rem",
              letterSpacing: "",
            },
            "& input": {
              fontFamily: "outfit",
              fontSize: "1rem",
              fontWeight: "400",
              color: "#4D4D4D",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              padding: "",
              display: "flex",
              justifyContent: "center",
              alignItems: "center", // These should be strings
            },
            "& .MuiInputLabel-root": {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "outfit",
              color: "#808080",
              fontSize: "1rem",
            },
            "& .MuiInputLabel-shrink": {
              fontSize: "1rem", // Font size when label is up (focused)'
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "outfit",
            },
          }}
        />
      </div>

      <div className="m-8">
        <TextField
          id="outlined-basic"
          label="Email"
          name="email"
          variant="outlined"
          type="email"
          required={true}
          onChange={getFormData}
          error={errorShow.email}
          helperText={errorShow.email ? "Please enter your number": ""}
          value={inputData.email}
          sx={{
            width: "50%",

            "& label": {
              color: "#808080",
              fontFamily: "outfit !important",
              padding: "",
              fontSize: "1rem",
              letterSpacing: "",
            },
            "& input": {
              fontFamily: "outfit",
              fontSize: "1rem",
              fontWeight: "400",
              color: "#4D4D4D",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              padding: "",
              display: "flex",
              justifyContent: "center",
              alignItems: "center", // These should be strings
            },
            "& .MuiInputLabel-root": {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "outfit",
              color: "#808080",
              fontSize: "1rem",
            },
            "& .MuiInputLabel-shrink": {
              fontSize: "1rem", // Font size when label is up (focused)'
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "outfit",
            },
          }}
        />
      </div>

      <div className="m-8">
        <TextField
          id="outlined-basic"
          label="Age"
          name="age"
          type="number"
          variant="outlined"
          required={true}
          value={inputData.age}
          error={errorShow.age}
          helperText={errorShow.age ? "Please enter your number" : ""}
          onChange={getFormData}
          sx={{
            width: "50%",

            "& label": {
              color: "#808080",
              fontFamily: "outfit !important",
              padding: "",
              fontSize: "1rem",
              letterSpacing: "",
            },
            "& input": {
              fontFamily: "outfit",
              fontSize: "1rem",
              fontWeight: "400",
              color: "#4D4D4D",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              padding: "",
              display: "flex",
              justifyContent: "center",
              alignItems: "center", // These should be strings
            },
            "& .MuiInputLabel-root": {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "outfit",
              color: "#808080",
              fontSize: "1rem",
            },
            "& .MuiInputLabel-shrink": {
              fontSize: "1rem", // Font size when label is up (focused)'
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "outfit",
            },
          }}
        />
      </div>

      <div className="m-8">
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label font-outfit text-black">
            Gender
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio name="gender" onChange={getFormData} />}
              className="font-outfit"
              label="Female"
            />
            <FormControlLabel
              value="male"
              control={<Radio name="gender" onChange={getFormData} />}
              className="font-outfit"
              label="Male"
            />
            <FormControlLabel
              value="other"
              control={<Radio name="gender" onChange={getFormData} />}
              className="font-outfit"
              label="Other"
            />
          </RadioGroup>
        </FormControl>
      </div>
      
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-outfit"
        onClick={handleSubmit}
     >
        Submit
      </button>
    </form>
  );
};

export default Create;
