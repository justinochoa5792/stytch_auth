import React, { useState } from "react";
import { useStytch } from "@stytch/react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const stytchClient = useStytch();

  const signUp = () => {
    stytchClient.passwords
      .strengthCheck({ email, password })
      .then((res) => {
        console.log("Res", res);
      })
      .catch((err) => {
        console.log("Err:", err);
      });
    stytchClient.passwords.create({
      email,
      password,
      session_duration_minutes: 60,
    });
  };

  return (
    <div>
      {" "}
      <input
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signUp}> Sign Up</button>
    </div>
  );
};

export default SignUp;
