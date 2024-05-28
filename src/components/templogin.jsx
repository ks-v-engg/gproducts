import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex bg-white w-full max-w-4xl shadow-md rounded-lg overflow-hidden">
        {/* Left Side - Image */}
        <div className="hidden md:flex md:w-1/2 bg-blue-100 justify-center items-center">
          <img
            src="https://via.placeholder.com/500" // Replace with your image URL
            alt="Login Illustration"
            className="object-cover"
          />
        </div>
        
        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8">
          <div className="flex justify-center mb-6">
            <img src="https://via.placeholder.com/50" alt="Logo" className="h-12 w-12" />
          </div>
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-4">Welcome to Google Store!</h2>
          <p className="text-center text-gray-500 mb-8">Register your account</p>
          <form className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
