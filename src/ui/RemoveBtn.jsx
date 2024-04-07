import { useDispatch } from "react-redux";
import { remove } from "../Slices/orderSlice";
import SmallBtn from "./SmallBtn";

const RemoveBtn = ({ id }) => {
 const dispatch = useDispatch();
 return (
  <SmallBtn onClick={() => dispatch(remove(id))}>Remove</SmallBtn>
 );
};

export default RemoveBtn;