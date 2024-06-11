import { Fragment, useState } from 'react'
import { useGetProductByIdQuery, useGetProductByNameQuery } from "../Redux/Services/gproducts"
import Topnavbar from "./topnavbar";
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import ProductInformation from './productinformationpage';
import Modal from './modal';
import Showmodal from './showmodal';

  export default function Products() {
    
  const { data, error, isLoading } = useGetProductByNameQuery();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
 
  const handleViewProduct = (product) => {
    console.log(product);
    setSelectedProduct(product);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedProduct(null);
  };
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-4 sm:py-4 lg:max-w-7xl lg:px-4">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
           {!error && !isLoading && data.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" /> {product.Name}
                      </a>
                    </h3>
                  </div>
                  <div className="group-hover:opacity-0"> 
                    <p className="mt-1 text-sm text-gray-500 group-hover:opacity-0">{product.Color}</p>
                    <p className="text-sm font-medium text-gray-900 group-hover:opacity-0">{'Rs. '+product.Price}</p>
                  </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex justify-between">
              <button  onClick={() => handleViewProduct(product)} className="text-blue-600 underline">View Product</button>
              <button className="px-1 py-1 bg-blue-600 text-white rounded-md">Buy Now</button>
            </div>
          </div>
             <Showmodal isOpen={isModalVisible} onClose={closeModal} product={selectedProduct} />
             </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  