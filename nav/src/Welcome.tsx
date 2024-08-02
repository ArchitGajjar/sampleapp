import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  console.log("Welcome ....");
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  }

  return (
    <>
      <div>Welcome</div>
      <button onClick={handleBack}>Back to Home! </button>
    </>
  )
}

export default Welcome;
