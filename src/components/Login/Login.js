import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
   const handleLogin = (e) => {
      e.preventDefault();
      const data = {
        email: e.target.email.value,
        password: e.target.password.value,
      };
  
      fetch('http://localhost:5000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data, data.message);
      e.target.reset();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  
    };
    return (
      <div className="hero max-h-screen  bg-base-100 mt-10">
        <div className="hero-content flex-col lg:p-0 lg:flex-row ">
          <div className="card flex justify-end text-center rounded-none pb-14 flex-shrink-0 w-full lg:max-w-[516px] max-h-[630px]  drop-shadow-2xl bg-base-100">
            <form
              onSubmit={handleLogin}
              className="card-body rounded-none text-center  pt-20"
            >
              <h1 className="text-5 font-bold text-center">Login Form</h1>
              <div className="form-control flex justify-center  p-0 lg:px-10  mt-20">
                <input
                  name="email"
                  type="text"
                  placeholder="Write Email Address"
                  className="px-3.5 border-b-2 w-full focus:outline-0"
                  required
                />
                
              </div>
              <div className="form-control flex justify-center  p-0 lg:px-10 mb-0  mt-14">
                <input
                  name="password"
                  type="password"
                  placeholder="Write Password"
                  className="px-3.5 border-b-2 w-full focus:outline-0"
                  required
                />
              </div>
              <span className="text-xs pb-0 mb-0 p-0 mt-[-8px] ml-[-110px]"></span>
              <div className="mt-14">
                <button className="btn btn-primary rounded-xl btn-sm text-white">
                  Login
                </button>
              </div>
            </form>
            <div className="text-end mr-2">
              <span className="text-xs inline">First time here?</span>
              <Link
                to={"/register"}
                className="inline text-sm ml-3.5 mr-16 underline underline-offset-2 text-primary"
              >
                Please Registration
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;