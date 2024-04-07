import { FaBuilding, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
 return (
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-16 p-4 bg-neutral-900 text-neutral-100">
   <div className="">
    <div className=" text-2xl flex items-center gap-2"><FaBuilding /><span className=" font-bold">Futon MFB</span>Bank</div>
    <p className=" py-4">Futon MFB is a full-service financial institution committed to providing personalized banking solutions to individuals, businesses, and communities. With a focus on customer service, innovation, and community involvement, Futon MFB strives to be a trusted partner in helping customers achieve their financial goals.</p>
    <div className="flex items-center gap-4">
     <FaFacebookF className=" w-10 h-10 p-3 bg-neutral-500 rounded-full hover:bg-blue-600 transition-all duration-500" />
     <FaTwitter className=" w-10 h-10 p-3 bg-neutral-500 rounded-full hover:bg-blue-600 transition-all duration-500" />
     <FaInstagram className=" w-10 h-10 p-3 bg-neutral-500 rounded-full hover:bg-blue-600 transition-all duration-500" />
    </div>
   </div>
   <div className="">
    <p className=" font-bold text-lg py-4">Explore</p>
    <div className=" px-4 text-neutral-300">

     <li className=" hover:text-blue-500 transition-all duration-300 cursor-pointer">About Us</li>
     <li className=" hover:text-blue-500 transition-all duration-300 cursor-pointer">Testimonials</li>
     <li className=" hover:text-blue-500 transition-all duration-300 cursor-pointer">Careers</li>
     <li className=" hover:text-blue-500 transition-all duration-300 cursor-pointer">Career Detalis</li>
     <li className=" hover:text-blue-500 transition-all duration-300 cursor-pointer">FAQS</li>
    </div>
   </div>
   <div className="">
    <p className=" font-bold text-lg py-4">Useful Links</p>
    <div className=" px-4 text-neutral-300">

     <li className=" hover:text-blue-500 transition-all duration-300 cursor-pointer">Credit Card</li>
     <li className=" hover:text-blue-500 transition-all duration-300 cursor-pointer">Saving Account</li>
     <li className=" hover:text-blue-500 transition-all duration-300 cursor-pointer">Digital Gift Cards</li>
     <li className=" hover:text-blue-500 transition-all duration-300 cursor-pointer">Apply for Loans</li>
     <li className=" hover:text-blue-500 transition-all duration-300 cursor-pointer">Mobile Application</li>
    </div>
   </div>
   <div className="">
    <p className=" font-bold text-lg py-4">Solutions</p>
    <div className=" px-4 text-neutral-300">
     <li className=" hover:text-blue-500 transition-all duration-300 cursor-pointer">Marketing</li>
     <li className=" hover:text-blue-500 transition-all duration-300 cursor-pointer">Analytics</li>
     <li className=" hover:text-blue-500 transition-all duration-300 cursor-pointer">Commerce</li>
     <li className=" hover:text-blue-500 transition-all duration-300 cursor-pointer">Insights</li>

    </div>
   </div>
   <div className=""></div>
  </div>
 );
};

export default Footer;