import React from "react";
import Input from "../UI/Input";

const LoginForm = () => {
  return (
    <>
      <form className="flex justify-center items-center flex-col h-56 gap-4 bg-notePurple px-4 rounded-lg z-10 shadow-xl">
        <p className="font-noteFont">Login or Signup</p>
        <Input iotype="text" field="Username" />
        <Input iotype="password" field="Password" />
        <button className="text-white bg-royal border-none rounded-lg px-12 h-7">
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginForm;
