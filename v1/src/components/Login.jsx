import React, { useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from "axios";


export default function Login() {

  const [email,  setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlelogin = () => {
    
    
    axios.post("http://localhost:3000/login",{
    email : email,
    password : password
  } ).then( response => {
    console.log(response.data.message);
    if( response.status === 200){
      navigate("/home");
    }
  });
  }


 


  return (
    <section className="h-full pl-20 grid place-content-center ">
      <div className="container h-full p-20 justify-center ml-20">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-slate-200 shadow-lg ">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="flex text-center justify-center">
                      <img
                        className="w-10 h-5 mr-2 pt-1"
                        src="../images/ENPH.png"
                        alt="logo"
                      />
                      <h4 className="mb-12 pb-1 text-xl font-semibold text-black">
                        Weather Application Login
                      </h4>
                    </div>

                    <form class="space-y-4 md:space-y-6" action="" onSubmit={(e)=> {
                      e.preventDefault();
                    }}>
                  <div>
                      <label for="email" class="block text-sm font-medium text-gray-900 dark:text-black">Your email</label>
                      <TEInput type="email" name="email" id="email" onChange={(e) => {
                setEmail(e.target.value);

              }} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""> </TEInput>
                  </div>
                  <div>
                      <label for="password" class="block text-sm font-medium text-gray-900 dark:text-black">Password</label>
                      <TEInput type="password" name="password" id="password" onChange={(e) => {
                setPassword(e.target.value);

              }} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""> </TEInput>
                  </div>
                  
                  <button type="submit" onClick={handlelogin} class="border-solid border-2 border-sky-500 w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-black">
                      Don’t have an account yet? 
                      <NavLink to="/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Sign up
                      </NavLink>
                  </p>
              </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                >
                  <div>
                    <img src="../images/back-sunny.jpeg" alt="Weather App Image"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
