import { clear } from '../Slices/orderSlice';
import WarnBtn from './WarnBtn';
import { useDispatch } from 'react-redux';

const ClearBtn = () => {
 const dispatch = useDispatch();
 return (
  <WarnBtn onClick={() => dispatch(clear())}>Clear Cart</WarnBtn>
 );
};

export default ClearBtn;