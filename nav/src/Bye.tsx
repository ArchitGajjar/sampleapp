import React from 'react';
import { useNavigate } from 'react-router-dom';

const Bye = () => {
  console.log("Bye ...");
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/welcome");
  }

  const handleBack = () => {
    navigate("/");
  }

  return (
    <>
      <div>Hello</div>
      <button onClick={handleClick}>Go to Welcome! </button>
      <button onClick={handleBack}>Back to Home! </button>
    </>
  );
}

export default Bye;
