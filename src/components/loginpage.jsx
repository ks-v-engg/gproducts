import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { grpoductsrouter } from "../Router/router";
import { useGetuserdetailsQuery } from "../Redux/Services/gproducts";




const Loginpage = () => {

  
   const [useremail,setEmail] = useState('');
   const [userpassword,setPassword] = useState('');

    const {data, error, isloading } = useGetuserdetailsQuery();

    const loginnavi = useNavigate();

 

    const btnsubmit = (event) => {
        event.preventDefault();
        console.log()
        const Checkcredential = data.filter(user => (user.email.toLowerCase() === useremail.toLowerCase() && user.password === userpassword))
        
       if (Checkcredential.length  > 0 ){
        localStorage.setItem('loginstatus','sucess');
        loginnavi(grpoductsrouter.shoppingpage);
        
      } else {
        localStorage.setItem('loginstatus','notsucess');
     
      }
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

          <div className="flex min-h-full flex-1  justify-center px-6 py-12 lg:px-8 md:w-1/2 flex-col float-left">
                  <img
                        className="sm:mx-auto sm:w-full sm:max-w-sm"
                        src="./Assets/createuserpage.svg"
                        alt="Your Company"
                      />
          </div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 md:w-1/2 p-4 float-right">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="./Assets/googleicon.svg"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Login in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
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
                    value={useremail}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
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
                    value={userpassword}
                    onChange={ (e) => setPassword(e.target.value)}
                 />
                </div>
              </div>
  
              <div>
                <button onClick={btnsubmit}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                 Login in
                </button>
              </div>
            </form>
           <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" onClick={()=> {loginnavi(grpoductsrouter.createaccount)}} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Create account
            </a>
          </p>
          </div>
        </div>
      </>
    )
  }
  export default Loginpage;