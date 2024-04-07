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

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';


export default function Calculate() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const { register, handleSubmit } = useForm();
  const amount = data => {
    const value = +data.loanAmount * (+data.interestRate / 100);
    const pay = value * +data.numberOfMonths + +data.loanAmount;
    setX(value);
    setY(pay);
  };

  return (
    <div className='grid lg:grid-cols-2'>
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">Calculate Loan</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Online EMI Calculator    </p>
        </div>
        <Form onSubmit={handleSubmit(amount)} className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="loanAmount" className="block text-sm font-semibold leading-6 text-gray-900">
                Loan amount
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  {...register('loanAmount')}
                  id="loanAmount"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="numberOfMonths" className="block text-sm font-semibold leading-6 text-gray-900">
                Number of months
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  {...register('numberOfMonths')}
                  id="numberOfMonths"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="interestRate" className="block text-sm font-semibold leading-6 text-gray-900">
                Interest rate
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  id="interestRate"
                  {...register('interestRate')}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="month" className="block text-sm font-semibold leading-6 text-gray-900">
                Monthly Installment is
              </label>
              <div className="mt-2.5">
                <input
                  disabled
                  type="number"
                  value={x}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:text-neutral-500"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="month" className="block text-sm font-semibold leading-6 text-gray-900">
                Total Payment
              </label>
              <div className="mt-2.5">
                <input
                  disabled
                  type="number"
                  value={y}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:text-neutral-500"
                />
              </div>
            </div>

          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Calculate
            </button>

          </div>
          <div className="mt-10">
            <button
              type="reset"
              className="block w-full rounded-md border-2 border-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Reset Data
            </button>

          </div>
        </Form>
      </div>
      <div className=" mx-auto my-16">
        <img src="/loan.jpg" alt="loan" />
      </div>
    </div>
  );
}
