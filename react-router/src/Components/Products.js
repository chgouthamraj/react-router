import React from 'react';
import { Link, Outlet } from 'react-router-dom';

//we use Outlet to render the nested routes

export const Products = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="Search Products" />
      </div>
      <nav>
        <Link to="/featured">Featured</Link>
        <Link to="/new">New</Link>
        {/* //absolute links
        <Link to="/products/featured">Featured</Link>
        <Link to="/products/new">New</Link> */}
      </nav>
      <Outlet />
    </>
  );
};
