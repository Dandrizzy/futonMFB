import { FaBuilding, FaChartPie, FaCircleDollarToSlot, FaMobile, FaSackDollar, FaVault, FaWallet } from "react-icons/fa6";
import { IoBarChart } from "react-icons/io5";
const Services = () => {
  return (
    <>
      <div className=" p-4">
        <div className=" text-center py-8">
          <p className=" text-blue-500 pb-1 text-lg font-semibold">Our Services</p>
          <p className=" text-4xl font-bold">Online Banking at Your
            Fingertips</p>
        </div>
        <div className=" grid gap-4 place-content-center md:grid-cols-2 lg:grid-cols-4">
          <div className=" max-w-[30rem] min-w-[25rem] shadow-md drop-shadow-md rounded-md sm:min-w-96 bg-white px-4 py-16">
            <IoBarChart className=" w-10 h-10 text-blue-500" />
            <p className=" text-2xl font-bold py-4">Digital Banking</p>

            <li className=" mx-4 text-gray-600">Bank & savings accounts</li>
            <li className=" mx-4 text-gray-600">Credit card</li>
            <li className=" mx-4 text-gray-600">Personal loans</li>

          </div>

          <div className=" max-w-[30rem] min-w-[25rem] shadow-md drop-shadow-md rounded-md sm:min-w-96 bg-white px-4 py-16">
            <FaMobile className=" w-10 h-10 text-blue-500" />
            <p className=" text-2xl font-bold py-4">Mobile & Web Banking</p>

            <li className=" mx-4 text-gray-600">Instant Access</li>
            <li className=" mx-4 text-gray-600">Savings Fixed Term
            </li>
            <li className=" mx-4 text-gray-600">Savings Instant</li>

          </div>

          <div className=" max-w-[30rem] min-w-[25rem] shadow-md drop-shadow-md rounded-md sm:min-w-96 bg-white px-4 py-16">
            <FaWallet className=" w-10 h-10 text-blue-500" />
            <p className=" text-2xl font-bold py-4">Insurance Policies</p>

            <li className=" mx-4 text-gray-600">    Pet insurance

            </li>
            <li className=" mx-4 text-gray-600">Transport Insurance</li>
            <li className=" mx-4 text-gray-600">Accident insurance</li>

          </div>

          <div className=" max-w-[30rem] min-w-[25rem] shadow-md drop-shadow-md rounded-md sm:min-w-96 bg-white px-4 py-16">
            <FaBuilding className=" w-10 h-10 text-blue-500" />
            <p className=" text-2xl font-bold py-4">Home & Property Loan</p>

            <li className=" mx-4 text-gray-600">
              Residential Mortgages
            </li>
            <li className=" mx-4 text-gray-600">Buy-to-let Mortgages</li>
            <li className=" mx-4 text-gray-600">Building Mortgages</li>

          </div>

          <div className=" max-w-[30rem] min-w-[25rem] shadow-md drop-shadow-md rounded-md sm:min-w-96 bg-white px-4 py-16">
            <FaSackDollar className=" w-10 h-10 text-blue-500" />
            <p className=" text-2xl font-bold py-4">All Bank Account</p>

            <li className=" mx-4 text-gray-600">
              Instant Access Savings

            </li>
            <li className=" mx-4 text-gray-600">Instant Access Cash</li>
            <li className=" mx-4 text-gray-600">Young Savers Account</li>

          </div>

          <div className=" max-w-[30rem] min-w-[25rem] shadow-md drop-shadow-md rounded-md sm:min-w-96 bg-white px-4 py-16">
            <FaChartPie className=" w-10 h-10 text-blue-500" />
            <p className=" text-2xl font-bold py-4">Borrowing Accounts



            </p>

            <li className=" mx-4 text-gray-600">Bank Credit Card</li>
            <li className=" mx-4 text-gray-600">Setter personal loan</li>
            <li className=" mx-4 text-gray-600">Overdraft</li>

          </div>

          <div className=" max-w-[30rem] min-w-[25rem] shadow-md drop-shadow-md rounded-md sm:min-w-96 bg-white px-4 py-16">
            <FaVault className=" w-10 h-10 text-blue-500" />
            <p className=" text-2xl font-bold py-4">Private Banking
            </p>

            <li className=" mx-4 text-gray-600"> Dedicated personal service</li>
            <li className=" mx-4 text-gray-600">Specialist teams</li>
            <li className=" mx-4 text-gray-600">Tailored products</li>

          </div>

          <div className=" max-w-[30rem] min-w-[25rem] shadow-md drop-shadow-md rounded-md sm:min-w-96 bg-white px-4 py-16">
            <FaCircleDollarToSlot className=" w-10 h-10 text-blue-500" />
            <p className=" text-2xl font-bold py-4">Fixed term accounts
            </p>

            <li className=" mx-4 text-gray-600">Fixed Term Saving</li>
            <li className=" mx-4 text-gray-600">Fixed Rate Cash</li>
            <li className=" mx-4 text-gray-600">Resume your Current</li>

          </div>

        </div>
      </div>
    </>
  );
};

export default Services;