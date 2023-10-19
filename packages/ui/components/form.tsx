"use client";
import { Button, TextField } from "@mui/material";
// import { useState } from "react";
import { useRecoilState } from "recoil";
// import { emailState } from "store/src/atoms/emailState";
import { emailState } from "store";

export function Form(props: { onClick }): JSX.Element {
  // const [email, setEmail] = useState("");

  const [val, setVal] = useRecoilState(emailState);

  const handleChange = (e) => {
    // setEmail(e.target.value);
    setVal(e.target.value);
  };

  return (
    <>
      <h3> ayushsdis form</h3>
      <h4>{val}</h4>
      <TextField
        id="outlined-basic"
        label="Outlined"
        onChange={handleChange}
        value={val}
        variant="outlined"
      />
      <Button
        color="success"
        onClick={() => {
          props.onClick();
        }}
        variant="contained"
      >
        Text
      </Button>
    </>
  );
}
