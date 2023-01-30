import React from "react";

const BillingHeader = () => {
  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="flex-1">
          <p className=" normal-case text-sm lg:text-lg font-bold lg:px-5 px-2">
            Search
          </p>
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered md:input-sm input-xs lg:input-md"
            />
          </div>
        </div>
        <div className="flex-none">
          <ul className="font-semibold menu-horizontal lg:px-10 px-5">
            <label htmlFor="post-billing-data" className="btn btn-secondary md:btn-sm btn-xs lg:btn-md  text-white">Add New</label>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BillingHeader;
