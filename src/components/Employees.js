import React from 'react'

const Employees = () => {
  return (
    <section>
      <div>
        <h1 className='text-secondary font-medium mt-10 mx-36 font-poppins text-5xl'>Employees
        </h1>


        <div className="lg:mx-36 md:mx-7 mx-8 h-screen  lg:-mt-48 -mt-28 flex items-center justify-center ">
          <div className="w-full border border-slate-200 rounded-xl overflow-x-auto">
            <table className="w-full divide-y divide-gray-400 ">
              <thead className="bg-primary text-secondary font-poppins font-semibold text-xs overflow-hidden">
                <tr>
                  <th className="lg:px-4 md:px-2 py-3 px-4 text-start ">Sl.No.</th>
                  <th className="lg:px-4 md:px-2 py-3 px-4 text-start ">Employee ID</th>
                  <th className="lg:px-4 md:px-2 py-3 px-4 text-start ">Full Name</th>
                  <th className="lg:px-4 md:px-2 py-3 px-4 text-start ">Joining Date</th>
                  <th className="lg:px-4 md:px-2 py-3 px-4 text-start ">Contact No.</th>
                  <th className="lg:px-4 md:px-2 py-3 px-4 text-start ">Address</th>
                  <th className="lg:px-4 md:px-2 py-3 px-4 text-start ">No. of Leave</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white text-slate-800">
                <tr className="cursor-pointer bg-primary font-poppins font-light text-xs">
                  <td className="lg:px-4 md:px-2 px-4 py-3">01</td>
                  <td className="lg:px-4 md:px-2 px-4 py-3">PBBS001</td>
                  <td className="lg:px-4 md:px-2 px-4 py-3">Bhagirathi Behera</td>
                  <td className="lg:px-4 md:px-2 px-4 py-3 whitespace-nowrap">10th Feb 2024</td>
                  <td className="lg:px-4 md:px-2 px-4 py-3">9669600288</td>
                  <td className="lg:px-4 md:px-2 px-4 py-3">Plot No. 145/554, Old Town...</td>
                  <td className="lg:px-4 md:px-2 px-4 py-3">02</td>

                </tr>
                <tr className="cursor-pointer bg-primary font-poppins font-light text-xs">
                  <td className="lg:px-4 md:px-2 px-4 py-3">02</td>
                  <td className="lg:px-4 md:px-2 px-4 py-3">PBBS002</td>
                  <td className="lg:px-4 md:px-2 px-4 py-3">Suman Kumar Das</td>
                  <td className="lg:px-4 md:px-2 px-4 py-3">10th Feb 2024</td>
                  <td className="lg:px-4 md:px-2 px-4 py-3">9669600288</td>
                  <td className="lg:px-4 md:px-2 px-4 py-3">Plot No. 145/554, Old Town...</td>
                  <td className="lg:px-4 md:px-2 px-4 py-3">05</td>

                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Employees