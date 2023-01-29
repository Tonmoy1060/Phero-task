import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
   return (
      <div className='flex items-center justify-center h-screen'>
         <Link to={'billingPage'} className="btn btn-primary">Billing Page</Link>
      </div>
   );
};

export default Home;