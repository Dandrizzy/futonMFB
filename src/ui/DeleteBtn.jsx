import { MdDelete } from "react-icons/md";
import SmallBtn from "./SmallBtn";
import { useDispatch } from "react-redux";
import { remove } from "../Slices/orderSlice";


const DeleteBtn = ({ id }) => {
 const dispatch = useDispatch();
 return (
  <SmallBtn onClick={() => dispatch(remove(id))}>
   <MdDelete />
  </SmallBtn>
 );
};

export default DeleteBtn;