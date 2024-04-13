import React, { useEffect, useState } from "react";
import { Input, Popover, PopoverHandler, PopoverContent } from "@material-tailwind/react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";


export default function Dashboard() {
  const [selectedRange, setSelectedRange] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const handleDayClick = (date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (date < startDate) {
      setStartDate(date);
    } else if (date > startDate && !endDate) {
      setEndDate(date);
    } else if (date === startDate && date === endDate) {
      setStartDate(null);
      setEndDate(null);
    } else if (date === startDate) {
      setEndDate(null);
    }
  };


  useEffect(() => {
    setStartDate(new Date());
  }, []);



  const handleResetClick = () => {
    setSelectedRange([]);
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <section>
      <div>
        <h1 className='font-poppins lg:ml-36 md:ml-7 mt-5 font-semibold text-secondary text-4xl'>Dashboard</h1>
        <div className="inline-block absolute -mt-12 whitespace-nowrap ">
          <div className="p-24">


            <Popover placement="bottom">
              <PopoverHandler>
                <div className="-mt-[16%] ml-80" >
                  <Input

                    value={
                      startDate && endDate
                        ? `${format(startDate, "dd MMM yy")} - ${format(endDate, "dd MMM yy")}`
                        : startDate
                          ? `${format(startDate, "dd MMM yy")}`
                          : ""
                    }
                    className="p-3 font-inter font-semibold focus:ring-2 focus:ring-secondary outline-none rounded-xl"
                    readOnly
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-44 -mt-8 z-10 absolute cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"

                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

              </PopoverHandler>
              <PopoverContent>
                <DayPicker
                  selected={selectedRange}
                  onDayClick={handleDayClick}
                  modifiers={{
                    selectedRange: { from: startDate, to: endDate }
                  }}
                  className="border-0 bg-wh"
                  mode="range"
                />

                <button onClick={handleResetClick} className="mt-4 text-secondary  px-4 py-2 rounded-md font-inter text-lg font-semibold">Reset</button>
              </PopoverContent>
            </Popover>
          </div>
        </div>


        <form className="mx-[66%] -mt-[2.5%]">
            <select id="cities" className="bg-white border font-inter cursor-pointer font-semibold text-lg border-gray-400 text-black  rounded-lg block p-2.5 focus:ring focus:ring-secondary  dark:border-gray-300 outline-none dark:placeholder-gray-800 ">
              <option value="BBSR">Bhubaneswar</option>
              <option value="CTK" disabled>Cuttack (Coming Soon)</option>
              <option value="BRP" disabled>Berhampur (Coming soon)</option>
            </select>
          </form>
          
      </div>
      <div className="lg:mx-36 md:mx-7 mx-8 h-screen  lg:-mt-48 -mt-32 flex items-center justify-center text-xs">
        <div className="w-full border border-slate-200 rounded-xl whitespace-nowrap overflow-x-auto">
          <table className="w-full divide-y divide-gray-400 ">
            <thead className="bg-primary text-secondary font-poppins font-semibold  overflow-hidden">
              <tr>
                <th className="lg:px-4 md:px-2 py-3 px-4 text-start ">Sl.No.</th>
                <th className="lg:px-4 md:px-2 py-3 px-4 text-start ">Order From<br /> (Individual/Org.)</th>
                <th className="lg:px-4 md:px-2 py-3 px-4 text-start ">Location</th>
                <th className="lg:px-4 md:px-2 py-3 px-4 text-start ">Contact <br /> Person</th>
                <th className="lg:px-4 md:px-2 py-3 px-4 text-start ">Contact No.</th>
                <th className="lg:px-4 md:px-2 py-3 px-4 text-start ">Type of Waste</th>
                <th className="lg:px-4 md:px-2 py-3 px-4 text-start ">Recycle<br /> Qty. in Kg.</th>
                <th className="lg:px-4 md:px-2 py-3 px-4 text-start ">Amount Paid</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white text-slate-800">
              <tr className="cursor-pointer bg-primary font-poppins font-light ">
                <td className="lg:px-4 md:px-2 px-4 py-3">01</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">Mr. Lorem Ipsum</td>
                <td className="lg:px-4 md:px-2 px-4 py-3 whitespace-nowrap">Lorem Ipsum Place</td>
                <td className="lg:px-4 md:px-2 px-4 py-3 whitespace-nowrap">Lorem Ipsum</td>
                <td className="lg:px-4 md:px-2 px-4 py-3 whitespace-nowrap">+91-9669600399</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">Carton, NP, Books, MBooks</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">233.00</td>
                <td className="lg:px-4 md:px-2 px-4 py-3 whitespace-nowrap">₹ 23308.50</td>
              </tr>
              <tr className="cursor-pointer bg-primary font-poppins font-light ">
                <td className="lg:px-4 md:px-2 px-4 py-3">02</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">Mr. Lorem Ipsum</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">Lorem Ipsum Place</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">Lorem Ipsum</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">+91-9669600399</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">Carton, NP, Books, MBooks</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">233.00</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">₹ 23308.50</td>
              </tr>
              <tr className="cursor-pointer bg-primary font-poppins font-light">
                <td className="lg:px-4 md:px-2 px-4 py-3">03</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">Mr. Lorem Ipsum</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">Lorem Ipsum Place</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">Lorem Ipsum</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">+91-9669600399</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">Carton, NP, Books, MBooks</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">233.00</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">₹ 23308.50</td>
              </tr>

              <tr className="cursor-pointer bg-primary font-poppins font-light ">
                <td className="lg:px-4 md:px-2 py-3 px-4">04</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">Mr. Lorem Ipsum</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">Lorem Ipsum Place</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">Lorem Ipsum</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">+91-9669600399</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">Carton, NP, Books, MBooks</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">233.00</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">₹ 23308.50</td>
              </tr>

              <tr className="cursor-pointer bg-primary font-poppins font-light">
                <td className="lg:px-4 md:px-2 py-3 px-4">05</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">Mr. Lorem Ipsum</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">Lorem Ipsum Place</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">Lorem Ipsum</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">+91-9669600399</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">Carton, NP, Books, MBooks</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">233.00</td>
                <td className="lg:px-4 md:px-2 px-4 py-3">₹ 23308.50</td>
              </tr>


              
            </tbody>
          </table>
        </div>

      </div>
      <div className="-mt-20 ">
      <button className='px-44 py-7 rounded-xl text-white bg-secondary ml-36 mb-10 pl-5 '>
        <h1 className='font-poppins font-semibold text-sm absolute -mt-5'>Total Weight</h1>
        <h2 className='font-poppins font-semibold text-2xl mt-5'>6280.50 Kg.</h2>
      </button>

      <button className='px-72 py-7 rounded-xl text-white bg-secondary ml-5 mb-10 pl-5 -pt-10'>
        <h1 className='font-poppins font-semibold text-sm absolute -mt-5'>Total Orders</h1>
        <h2 className='font-poppins font-semibold text-2xl mt-5'>1130</h2>
      </button>

      <button className='px-44 py-7 rounded-xl text-white bg-secondary ml-5 mb-10 pl-5 -pt-10'>
        <h1 className='font-poppins font-semibold text-sm absolute -mt-5'>Total Order Value</h1>
        <h2 className='font-poppins font-semibold text-2xl mt-5'>₹ 2039078.00</h2>
      </button>
      </div>


    </section>
  )
}

