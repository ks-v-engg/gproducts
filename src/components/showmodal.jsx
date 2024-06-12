import React from 'react';
import { StarIcon } from '@heroicons/react/20/solid';

const Showmodal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center pb-3">
          <p className="text-2xl font-bold">{product.Name}</p>
          <button onClick={onClose} className="text-black">
            X
          </button>
        </div>

        <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                      <img src={product.imageSrc} alt={product.imageAlt} className="object-cover object-center" />
          </div>
          
          <div className="sm:col-span-8 lg:col-span-7">
                    {/* <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.Name}</h2> */}
                    <p className="text-2xl text-gray-900">{'Rs. '+product.Price}</p>
            </div>

            {/* Reviews */}
            <div className="mt-6">
                          <h4 className="sr-only">Reviews</h4>
                          <div className="flex items-center">
                            <div className="flex items-center">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    product.Star_Rating > rating ? 'text-gray-900' : 'text-gray-200',
                                    'h-5 w-5 flex-shrink-0'
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                            <p className="sr-only">{product.rating} out of 5 stars</p>
                            <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                              {product.No_User_Reviews} reviews
                            </a>
            </div>
                          
            <div className="mt-4">
              <p><strong>Battery:</strong> {product.Battery_Charging}</p>
              <p><strong>Price:</strong> Rs. {product.Price}</p>
              <p><strong>Color:</strong> {product.Color}</p>
              <p><strong>Star Rating:</strong> {product.Star_Rating} / 5</p>
              <p><strong>Battery:</strong> {product.Battery_Charging}</p>
              <p><strong>Processor:</strong> {product.Processor}</p>
              <p><strong>Storage:</strong> {product.Storage}</p>
              <p><strong>Dimension & Weight:</strong> {product.Dimension_Weight}</p>
          </div>
        </div>
        <div className="flex justify-end pt-2">
          <button onClick={onClose} className="px-4 bg-gray-200 p-3 rounded-lg text-black hover:bg-gray-300">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Showmodal;
