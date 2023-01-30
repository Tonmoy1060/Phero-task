import React from 'react';
import BillingHeader from './BillingHeader';
import BillingModal from './BillingModal';

const BillingPage = () => {
   return (
      <div className='lg:p-10 md:p-5 p-1'>
         <BillingHeader></BillingHeader>
         <BillingModal></BillingModal>
      </div>
   );
};

export default BillingPage;