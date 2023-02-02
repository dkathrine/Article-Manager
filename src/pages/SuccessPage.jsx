import React from 'react'
import { useLocation } from 'react-router-dom';

const SuccessPage = () => {
const query = useLocation().search;
const queryParams = new URLSearchParams(query);
const name = queryParams.get("name");

  return (
    <div>
        <h1>Thank you for your submit {name}!</h1>
        <p>Your submit was successful!</p>
    </div>
  )
}

export default SuccessPage