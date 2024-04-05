import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './Routes/App';
import Bag from "./Routes/bag"
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Routes/home';
import myntraStore from './store/ReduxStore';
import WishList from './Routes/wishList';
import Search from './Routes/search';



const router = createBrowserRouter([{
  path:"/",element:<App/>,
  children:[
    {path:"/",element:<Home/>},
    {path:"/bag",element:<Bag/>},
    {path:"/wishlist",element:<WishList/>},
    {path:"/search",element:<Search/>}
  ]
}])

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
