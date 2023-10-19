"use client";

import { useRecoilState } from "recoil";
import { emailState } from "store";
import { Form } from "ui";

export default function Home() {
  const [val, setVal] = useRecoilState(emailState);

  return (
    <>
      <h1>hello word</h1>
      <h3>this is from ayush kumar gupta</h3>
      <h4>from page.tsx {val}</h4>
      <Form
        onClick={() => {
          alert("hello ");
        }}
      />
      <h2>hi form client</h2>
    </>
  );
}
