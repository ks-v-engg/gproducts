import { useState } from 'react'
import { Disclosure } from '@headlessui/react'

const colorFilter = {
  id: 'color',
  name: 'Color',
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
  return (
    <div className="bg-white p-4">
      <form>
        <Disclosure as="div" className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {({ open }) => (
            <>
              
                <div className="space-y-4">
                  {colorFilter.options.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        id={`filter-${colorFilter.id}-${optionIdx}`}
                        name={`${colorFilter.id}[]`}
                        defaultValue={option.value}
                        type="checkbox"
                        defaultChecked={option.checked}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={`filter-${colorFilter.id}-${optionIdx}`}
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
