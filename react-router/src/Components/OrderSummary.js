import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function OrderSummary() {
  const navigate = useNavigate();
  //to navigate back just pass -1 to navigation hook
  return (
    <>
      <div>Order Confirmed!!</div>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
}
