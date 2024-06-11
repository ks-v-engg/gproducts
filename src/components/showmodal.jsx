import React from 'react';

const Showmodal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div className="p-4">
            <span
              className="float-right text-gray-500 cursor-pointer"
              onClick={onClose}
            >
              &times;
            </span>
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                
                {product?product.Name:'not asinged' || 'Loading...'}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {product?product.Description:'' || 'Loading...'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showmodal;
