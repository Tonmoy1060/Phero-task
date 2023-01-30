import React, { useState } from "react";

const BillingModal = () => {
  const handleSub = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const amount = e.target.amount.value;

    console.log(name.length, phone.length, email, amount);
  };
  return (
    <div>
      <input type="checkbox" id="post-billing-data" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="post-billing-data"
            className="btn btn-sm bg-red-600 border-none hover:bg-red-700 btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form className="" onSubmit={handleSub}>
            <div>
              <input name="name" className="input input-sm mt-5 input-bordered w-5/6" type="text" placeholder="Full Name" required/>
              <input name="email" className="input input-sm mt-2 input-bordered w-5/6" type="email" placeholder="Email" required/>
              <input name="phone" className="input input-sm mt-2 input-bordered w-5/6" type="tel" placeholder="Phone" required/>
              <input name="amount" className="input input-sm mt-2 input-bordered w-5/6" type="tel" placeholder="Amount" required/>
              <div className="modal-action">
                <button>
                  <label htmlFor="post-billing-data" className="btn btn-sm btn-info" >
                    Add Data
                  </label>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BillingModal;
