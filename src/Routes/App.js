import { Outlet } from 'react-router';
import Header from '../components/header';
import Footer from '../components/footer';
import FetchItems from '../components/fetchItem';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../components/loadingSpinner';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from 'react';




function App() {
  const currentlyFetching = useSelector(store=>store.shoppingItems.currentlyFetching)
 
  
      
  return (
    <div>
    <Header/>
    <FetchItems/>
    <main className='mt-5 row'>
    {currentlyFetching ? <LoadingSpinner /> : <Outlet />}
    </main>
    <Footer/>
    </div>
  );
}

export default App;
