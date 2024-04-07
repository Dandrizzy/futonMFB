import { Card, Strong, Text } from '@radix-ui/themes';
import { FaCheckCircle, FaArrowCircleDown } from "react-icons/fa";
import { FaClock, FaSquarePhone } from "react-icons/fa6";
const Innovate = () => {
 return (
  <div className='flex flex-col gap-4 items-center justify-center sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:place-items-center'>
   <div className=" font-bold text-2xl lg:text-4xl uppercase py-4 sm:col-span-2 lg:col-span-4">How can we help you?</div>
   <Card size="2" style={{ maxWidth: 400 }} className=' shadow-md drop-shadow-md'>

    <FaCheckCircle className=' h-16 w-16 text-blue-500' />

    <div className="py-8">
     <Text as="p" size="4">
      <Strong>Secure International Transaction</Strong>
     </Text>
    </div>
    <Text as="p" size="4">
     Ensure the protection of sensitive financial information and mitigate the risk of fraud across borders.
    </Text>
   </Card>

   <Card size="2" style={{ maxWidth: 400 }} className=' shadow-md drop-shadow-md'>

    <FaSquarePhone className=' h-16 w-16 text-blue-500' />

    <div className="py-8">
     <Text as="p" size="4">
      <Strong>24/7 Support from the Expert Team</Strong>
     </Text>
    </div>
    <Text as="p" size="4">
     Our dedicated expert team is available around the clock to provide personalized support, guidance, and solutions to meet your needs, whenever you need them.
    </Text>
   </Card>

   <Card size="2" style={{ maxWidth: 400 }} className=' shadow-md drop-shadow-md'>

    <FaArrowCircleDown className=' h-16 w-16 text-blue-500' />

    <div className="py-8">
     <Text as="p" size="4">
      <Strong>Lowest Processing Fee than Other Banks</Strong>
     </Text>
    </div>
    <Text as="p" size="4">
     Experience unparalleled value with our bank&apos;s commitment to providing the lowest processing fees in the industry, helping you achieve your financial goals with minimal expenses.
    </Text>
   </Card>

   <Card size="2" style={{ maxWidth: 400 }} className=' shadow-md drop-shadow-md'>

    <FaClock className=' h-16 w-16 text-blue-500' />

    <div className="py-8">
     <Text as="p" size="4">
      <Strong>Less Time in any Loans Approval</Strong>
     </Text>
    </div>
    <Text as="p" size="4">
     Experience faster loan approvals with our streamlined processes, reducing wait times and allowing you to access funds when you need them most.
    </Text>
   </Card>

  </div>
 );
};

export default Innovate;