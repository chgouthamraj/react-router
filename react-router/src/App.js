import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
// import About from './Components/About';
import NavBar from './Components/NavBar';
import OrderSummary from './Components/OrderSummary';
import NoMatch from './Components/NoMatch';
import { Products } from './Components/Products';
import { FeatureProducts } from './Components/FeatureProducts';
import { NewProducts } from './Components/NewProducts';
import { Users } from './Components/Users';
import { UserDetails } from './Components/UserDetails';
import { Admin } from './Components/Admin';
const LazyAbout = React.lazy(() => import('./Components/About'));

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading..">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeatureProducts />} />
          <Route path="featured" element={<FeatureProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        {/* <Route path="users" element={<Users />} />
        <Route path="users/:userId" element={<UserDetails />} />
        <Route path="users/admin" element={<Admin />} /> */}
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
