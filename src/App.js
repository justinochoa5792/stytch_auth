import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import { StytchHeadlessClient } from "@stytch/vanilla-js/headless";
import { StytchProvider } from "@stytch/react";

function App() {
  const stytchClient = new StytchHeadlessClient(process.env.REACT_APP_STYTCH);

  const logOut = () => {
    stytchClient.session.revoke();
  };

  return (
    <div className="App">
      <Link to="/signup">Sign Up</Link>
      <Link to="/auth">Log In</Link>
      <StytchProvider stytch={stytchClient}>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/resetpassword/*" element={<ResetPassword />} />
        </Routes>
        <button onClick={logOut}>Logout</button>
      </StytchProvider>
    </div>
  );
}

export default App;
