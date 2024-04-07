import { FaMinus, FaPlus } from "react-icons/fa6";
import SmallBtn from "./SmallBtn";
import { decrease, increase, remove } from "../Slices/orderSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const CartBtn = ({ quantity, id }) => {
 const dispatch = useDispatch();
 const handleClick = () => {
  dispatch(decrease(id));
 };

 useEffect(() => {
  if (quantity === 0) dispatch(remove(id));
 }, [quantity, id, dispatch]);

 return (
  <div className="flex sm:gap-4 gap-2 items-center font-bold">
   <SmallBtn size='medium' onClick={handleClick}><FaMinus /></SmallBtn>
   <p>{quantity}</p>
   <SmallBtn size='medium' onClick={() => dispatch(increase(id))}><FaPlus /></SmallBtn>
  </div>
 );
};

export default CartBtn;