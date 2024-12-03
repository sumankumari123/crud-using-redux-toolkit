import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { actionEditUserDetails, fetchEditUserData } from "../../reducer/createReducer";
import { useSelector, useDispatch } from "react-redux";
import { Button, Drawer, Space } from "antd";


const EditUserData = () => {
  const { isOpenDrawerForEdit, singleUseData , users} = useSelector(
    (state) => state.app
  );
  const dispatch = useDispatch();
  const [placement, setPlacement] = useState("right");
  const [editData, setEditData] = useState({});

  useEffect(() => {
    setEditData(singleUseData || {});
  },[singleUseData]);

  


  const getFormData = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
    // console.log({...editData,[e.target.name]: e.target.value})
  };

  const handleSubmit = (e) => {
    dispatch(fetchEditUserData(editData));
    setEditData("");
    dispatch(actionEditUserDetails(false));
  };

  return (
    <div>
      <Drawer
        title="Edit User Details"
        placement={placement}
        width={"40%"}
        onClose={() => dispatch(actionEditUserDetails(false))}
        open={isOpenDrawerForEdit}
        extra={
          <Space>
            <Button onClick={() => dispatch(actionEditUserDetails(false))}>
              Cancel
            </Button>
            <Button
              type="primary"
              onClick={() => dispatch(actionEditUserDetails(false))}
            >
              OK
            </Button>
          </Space>
        }
      >
        {Boolean(editData) ? (
          <form className="text-center bg-white my-9">
            <div className="m-8">
              <TextField
                id="outlined-basic"
                label="Name"
                name="name"
                type="text"
                variant="outlined"
                onChange={getFormData}
                // onChange={(e) => getFormData("name",  e.target.value)}
                // onChange={(e) => getFormData(e)}
                value={editData?.name}
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
                variant="outlined"
                // value={editData?.number || ""}
                value={editData.number ? Number(editData.number) : ""}

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
                value={editData?.email || ""}
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
                label="Age"
                name="age"
                type="number"
                variant="outlined"
                value={editData?.age || ""}
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
                  value={editData.gender || ""}
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
              Button
            </button>
          </form>
        ) : (
          <>
            <div>SomeThing Wrong</div>
          </>
        )}
      </Drawer>
    </div>
  );
};

export default EditUserData;
