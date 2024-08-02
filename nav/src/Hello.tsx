import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hello = () => {
  console.log("Hello ...");
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/welcome");
  }

  const handleBack = () => {
    navigate("/bye");
  }

  return (
    <>
      <div>Hello</div>
      <button onClick={handleClick}>Go to Welcome! </button>
      <button onClick={handleBack}>Go to Bye! </button>
    </>
  );
}

export default Hello;
