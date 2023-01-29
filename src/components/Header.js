import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="flex-1">
          <p className=" normal-case lg:text-xl text-lg font-bold lg:px-10 px-5">Special Task</p>
        </div>
        <div className="flex-none">
          <ul className="font-semibold menu-horizontal lg:px-10 px-5">
            <li>
              <p>Total : 10</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
