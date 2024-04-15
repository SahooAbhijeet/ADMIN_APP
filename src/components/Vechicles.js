import React from 'react'

const Vehicles = () => {
  return (
    <section>
      <div>
        <h1 className='text-secondary font-medium lg:mt-10 mt-5 lg:mx-36 md:mx-8 mx-12 font-poppins lg:text-5xl text-3xl '>Vehicles
        </h1>

        <div className="lg:mx-36 md:mx-7 mx-8  h-screen  lg:-mt-64 -mt-44 flex items-center justify-center ">
          <div className="w-full border border-slate-200 rounded-xl overflow-x-auto ">
            <table className="w-full divide-y divide-gray-400 whitespace-nowrap ">
              <thead className="bg-primary text-secondary font-poppins font-semibold text-xs overflow-hidden">
                <tr>
                  <th className="lg:px-4 md:px-2 py-3 px-4 text-start ">Sl.No.</th>
                  <th className="lg:px-4 md:px-2 py-3 px-4 text-start ">Reg. No.</th>
                  <th className="lg:px-4 md:px-2 py-3 px-4 text-start ">Chassis No. </th>
                  <th className="lg:px-4 md:px-2 py-3 px-4 text-start ">Upcoming Insurance Date</th>
                  <th className="lg:px-4 md:px-2 py-3 px-4 text-start ">Upcoming Service Date</th>
                  <th className="lg:px-4 md:px-2 py-3  text-start ">Contact Person</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 bg-white text-slate-800 text-xs">
                <tr className="cursor-pointer bg-primary font-poppins font-light text-xs">
                  <td className="lg:px-4 md:px-2 px-4 py-3">01</td>
                  <td className="lg:px-4 md:px-2 px-4 py-3 whitespace-nowrap">OD 02 AB 1234</td>
                  <td className="lg:px-4 md:px-2 px-4 py-3">MB8TEUR98634638961528</td>
                  <td className="lg:px-4 md:px-2 px-4 py-3">10th Feb 2024</td>
                  <td className="lg:px-4 md:px-2 px-4 py-3">20th Feb 2024</td>
                  <td className="lg:px-4 md:px-2 px-4 py-3">Bhagirathi</td>
                </tr>

                <tr className="cursor-pointer bg-primary font-poppins font-light  text-xs">
                  <td className="lg:px-4 md:px-2 px-4 py-3">02</td>
                  <td className="lg:px-4 md:px-2 px-4 py-3">OD 02 AB 1234</td>
                  <td className="lg:px-4 md:px-2 px-4 py-3">MB8TEUR98634638961528</td>
                  <td className="lg:px-4 md:px-2 px-4 py-3">10th Feb 2024</td>
                  <td className="lg:px-4 md:px-2 px-4 py-3">20th Feb 2024</td>
                  <td className="lg:px-4 md:px-2 px-4 py-3">Bhagirathi</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vehicles