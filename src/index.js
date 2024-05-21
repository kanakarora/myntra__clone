import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './Routes/App';
import Bag from "./Routes/bag"
import {RouterProvider,createBrowserRouter,createRoutesFromElements,Route} from 'react-router-dom'
import { Provider } from 'react-redux';

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Routes/home';
import myntraStore from './store/ReduxStore';
import WishList from './Routes/wishList';
import Search from './Routes/search';
import OrderPlaced from './components/orderPlaced';
import Products from './Routes/products';



const router = createBrowserRouter(createRoutesFromElements(
  
  <Route exact path="/" element={<App/>}>
  <Route path="/" element={<Home/>} />
  <Route path="products/:category" element={<Products/>} />
 
  <Route path="/search" element={<Search/>} />
  <Route path="/bag" element={<Bag/>} />
  <Route path="/orderPlaced" element={<OrderPlaced/>} />
  <Route   path="/wishlist"  element={<WishList/>} />
  
    </Route>
 
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={myntraStore}>
   <RouterProvider router = {router}/>
   </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
