import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";

const BackBtn = ({ my = '4' }) => {
 const navigate = useNavigate();
 return (
  <>
   <Button highContrast variant="outline" onClick={() => navigate(-1)} color="gray" my={my}>
    <ArrowLeftIcon width="16" height="16" /> Back
   </Button>

  </>
 );
};

export default BackBtn;