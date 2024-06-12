import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { useSelector, useDispatch } from 'react-redux';
import { useGetProductByIdQuery } from '../Redux/Services/gproducts';
import { selectFilteredProducts } from '../Redux/Services/gproducts/selectors';
import { toggleCategory } from '../Redux/Services/gproducts/filterSlice';


const typeFilter = {
  id: 'type',
  name: 'type',
  options: [
    { value: 'phones', label: 'Phones', checked: false },
    { value: 'headphones', label: 'Headphones', checked: false },
    { value: 'accessories', label: 'Accessories', checked: true },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Productfilter() {

  // const dispatch = useDispatch();
  // const { data: products, error, isLoading } = useGetProductByIdQuery();
  // const filteredProducts = useSelector(selectFilteredProducts);

  // const handleCategoryChange = (category) => {
  //   dispatch(toggleCategory(category));
  // };

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error fetching products</div>;

  return (
    <div className="bg-white p-4">
      <form>
        <Disclosure as="div" className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-4">
          {({ open }) => (
            <>
              
                <div className="space-y-4">
                  {typeFilter.options.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        id={`filter-${typeFilter.id}-${optionIdx}`}
                        name={`${typeFilter.id}[]`}
                        defaultValue={option.value}
                        type="checkbox"
                        defaultChecked={option.checked}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        // onChange={() => handleCategoryChange(option.value)}
                      />
                      <label
                        htmlFor={`filter-${typeFilter.id}-${optionIdx}`}
                        className="ml-3 text-sm text-gray-600"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
            
            </>
          )}
        </Disclosure>
      </form>
    </div>
  )
}
