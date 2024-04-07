import { FcIdea, FcIphone, FcPuzzle, FcReading, FcShipped, FcSimCardChip, FcStackOfPhotos, FcVideoProjector, FcWiFiLogo } from "react-icons/fc";

const QuickAccess = () => {
 return (
  <div className=" text-slate-500 grid grid-cols-4 gap-2 ">
   <div className=" bg-slate-100 p-4 rounded-sm grid place-items-center gap-2">
    <FcSimCardChip className=" size-10" />
    <p className=" text-xs font-bold">Credit Card</p>
   </div>
   <div className=" bg-slate-100 p-4 rounded-sm grid place-items-center gap-2">
    <FcIphone className=" size-10" />
    <p className=" text-xs font-bold">Airtime</p>
   </div>
   <div className=" bg-slate-100 p-4 rounded-sm grid place-items-center gap-2">
    <FcWiFiLogo className=" size-10" />
    <p className=" text-xs font-bold">Internet</p>
   </div>
   <div className=" bg-slate-100 p-4 rounded-sm grid place-items-center gap-2">
    <FcPuzzle className=" size-10" />
    <p className=" text-xs font-bold">Betting</p>
   </div>
   <div className=" bg-slate-100 p-4 rounded-sm grid place-items-center gap-2">
    <FcIdea className=" size-10" />
    <p className=" text-xs font-bold">Electricity</p>
   </div>
   <div className=" bg-slate-100 p-4 rounded-sm grid place-items-center gap-2">
    <FcStackOfPhotos className=" size-10" />
    <p className=" text-xs font-bold">Gift Cards</p>
   </div>
   <div className=" bg-slate-100 p-4 rounded-sm grid place-items-center gap-2">
    <FcShipped className=" size-10" />
    <p className=" text-xs font-bold">Transport</p>
   </div>
   <div className=" bg-slate-100 p-4 rounded-sm grid place-items-center gap-2">
    <FcReading className=" size-10" />
    <p className=" text-xs font-bold">Education</p>
   </div>
   <div className=" bg-slate-100 p-4 rounded-sm grid place-items-center gap-2">
    <FcVideoProjector className=" size-10" />
    <p className=" text-xs font-bold">Cable</p>
   </div>
  </div>
 );
};

export default QuickAccess;