import React, { useEffect } from "react";
import { signInWithGoogle } from "../Firebase";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const navigate=useNavigate();

    useEffect(() => {
        if(localStorage.setItem){
            navigate("/home");
        }
      });

  return (
    <div className="App">
      <button class="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default SignIn;