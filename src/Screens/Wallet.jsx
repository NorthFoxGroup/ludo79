import React from "react";
import { FaRupeeSign } from "react-icons/fa";

const Wallet = () => {
  return (
    <>
      <div className="px-40 py-10">
        <div className="flex justify-between p-10 bg-accentLight rounded-md text-accent">
          <div>
            <p className="flex items-center font-bold text-3xl">
              <FaRupeeSign className="text-xl" />
              1550.56
            </p>
            <p className="font-medium">Current Wallet Balance</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <button>Add Money</button>
            <button>withdrawal</button>
          </div>
        </div>
        <div className="my-10">
          <p className="text-2xl font-medium">All Transaction History</p>

          <div class="overflow-x-auto relative mt-5">
            <table class="w-full text-sm text-left text-gray-500">
              <thead class="text-xs text-gray-700 uppercase bg-accentLight">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    Product name
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Color
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Category
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td class="py-4 px-6">Sliver</td>
                  <td class="py-4 px-6">Laptop</td>
                  <td class="py-4 px-6">$2999</td>
                </tr>
                <tr class="bg-white border-b">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Microsoft Surface Pro
                  </th>
                  <td class="py-4 px-6">White</td>
                  <td class="py-4 px-6">Laptop PC</td>
                  <td class="py-4 px-6">$1999</td>
                </tr>
                <tr class="bg-white">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Magic Mouse 2
                  </th>
                  <td class="py-4 px-6">Black</td>
                  <td class="py-4 px-6">Accessories</td>
                  <td class="py-4 px-6">$99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="my-10 w-1/3">
          <p className="text-2xl font-medium">Choose Amount to add</p>
          <div className="flex flex-col my-5">
            <label htmlFor="" className="text-xs font-medium">
              Enter Amount
            </label>
            <div className="relative flex items-center">
              <input
                type="number"
                className="border-b border-b-black py-1 pl-5 focus:outline-0 w-full"
                min={100}
                max={10000}
                step={50}
              />
              <FaRupeeSign className="absolute text-xs" />
            </div>
            <p className="text-xs font-medium mt-2">Min: 100, Max: 10000</p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <button className="bg-accentLight border-2 border-accent text-black hover:bg-accent flex items-center justify-center">
              <FaRupeeSign className="text-xs" />
              100
            </button>
            <button className="bg-accentLight border-2 border-accent text-black hover:bg-accent flex items-center justify-center">
              <FaRupeeSign className="text-xs" />
              200
            </button>
            <button className="bg-accentLight border-2 border-accent text-black hover:bg-accent flex items-center justify-center">
              <FaRupeeSign className="text-xs" />
              250
            </button>
            <button className="bg-accentLight border-2 border-accent text-black hover:bg-accent flex items-center justify-center">
              <FaRupeeSign className="text-xs" />
              500
            </button>
            <button className="bg-accentLight border-2 border-accent text-black hover:bg-accent flex items-center justify-center">
              <FaRupeeSign className="text-xs" />
              1000
            </button>
            <button className="bg-accentLight border-2 border-accent text-black hover:bg-accent flex items-center justify-center">
              <FaRupeeSign className="text-xs" />
              2000
            </button>
          </div>
          <button className="my-10 w-full border-2 border-blue-500 bg-transparent hover:bg-blue-500 text-black hover:text-white">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Wallet;
