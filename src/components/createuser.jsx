import { useNavigate } from "react-router-dom";
import { useCreateuserMutation } from "../Redux/Services/gproducts"
import { grpoductsrouter } from "../Router/router";
import React, { useState } from "react";
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Createuser() {

    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');


    const navigate =useNavigate();

    const [createaccount, {error,isloading}] = useCreateuserMutation();

    const btncreateuser = (event) => { 
        event.preventDefault();
        createaccount({ name : username,email : email, password : password }).then(res => {
            if (res.data) {
                alert("User created Successfully!");
                navigate(grpoductsrouter.login);
            } else {
              alert("Something went wrong")
            }
        })
    }
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
        <div className="flex min-h-full flex-1 justify-center px-6 py-14 lg:px-8 md:w-1/2 flex-col float-left">
                  <img
                        className="sm:mx-auto sm:w-full sm:max-w-sm"
                        src="./Assets/createuserpage.svg"
                        alt="Your Company"
                      />
        </div>
        <div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="./Assets/googleicon.svg"
              alt="Your Company"
            />
            <h2 className="mt-2 text-center text-2xl font-bold leading-6 tracking-tight text-gray-900">
              Welcome to Google Store!
            </h2>
            <h2 className="text-base font-semibold text-gray-900 mb-6 text-center">Register your account</h2>
          </div>
  
          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-4" onSubmit={btncreateuser}>

            <div>
                <label htmlFor="username" className="block text-sm font-medium leading-4 text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value = {username}
                    onChange={(e) => setUsername(e.target.value) }
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value = {email}
                    onChange={(e) => setEmail(e.target.value) }
                 />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Create Password
                  </label>
                  
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value = {password}
                    onChange={(e) => setPassword(e.target.value) }
                 />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="repassword" className="block text-sm font-medium leading-6 text-gray-900">
                    Retype Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="repassword"
                    name="repassword"
                    type="password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
      </>
    )
  }
  