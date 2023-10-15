import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div>Home page</div>
      <button onClick={() => navigate('order-summary', { replace: true })}>Place order</button>
    </>
  );
}
