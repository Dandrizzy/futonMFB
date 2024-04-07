import { Box, Card, Flex, Text } from "@radix-ui/themes";
import { FaCheck, FaDollarSign } from "react-icons/fa6";
const About = () => {
 return (
  <div className=" px-4 py-8 grid lg:grid-cols-2">
   <div className="">
    <img src="/bank.jpg" alt="bank" className=" mx-auto" />
   </div>
   <div className="">
    <div className="font-bold p-8 text-center ">
     <p>⭐⭐⭐⭐⭐</p>
     <p>5 Star Rating Bank</p>
    </div>
    <div className="font-bold text-blue-50 bg-blue-600 p-8 text-center ">
     <p className=" text-6xl  ">40</p>
     <p>Years of Experience</p>
    </div>
    <div className="">
     <p className="py-5 font-bold text-blue-600">About US</p>
     <p className=" pb-5 text-2xl font-bold">Financial Guidance for Every Stage of Life.</p>
     <p className="pb-8">Financial guidance is essential at every stage of life, helping individuals navigate various milestones, challenges, and opportunities. </p>
     <div className=" flex gap-8 flex-col">
      <Card variant="ghost">
       <Flex gap="3" align="center">
        <FaDollarSign className=" h-14 w-14 bg-blue-200 rounded-full text-blue-500 p-3" />
        <Box>
         <Text as="div" size="2" weight="bold">
          Solution Focused
         </Text>
         <Text as="div" size="2" color="gray">
          We help customers identify their existing financial resources, such as income, savings, investments, and assets.
         </Text>
        </Box>
       </Flex>
      </Card>
      <Card variant="ghost">
       <Flex gap="3" align="center">
        <FaCheck className=" h-14 w-14 bg-blue-200 rounded-full text-blue-500 p-3" />
        <Box>
         <Text as="div" size="2" weight="bold">
          99.99% Success
         </Text>
         <Text as="div" size="2" color="gray">
          Excellence across various areas of operation, including transaction processing, security, customer service, risk management, compliance, technology, and financial performance.
         </Text>
        </Box>
       </Flex>
      </Card>

     </div>
    </div>
   </div>
  </div>
 );
};

export default About;