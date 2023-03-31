import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate=useNavigate();
    const logout = () => {
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        navigate("/");
      };
  return (
    <>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("profilePic")} />

      <button onClick={logout()}>Logout</button>
    </>
  );
}

export default Home;