import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Callout } from "@radix-ui/themes";

const CalloutCard = () => {
 return (
  <Callout.Root color="yellow" mx='auto'>
   <Callout.Icon>
    <ExclamationTriangleIcon />
   </Callout.Icon>
   <Callout.Text>
    We regret to inform you that your account has been temporarily restricted due to security concerns. To ensure the safety of your funds and personal information, we kindly ask you to contact our customer support team at your earliest convenience. Our representatives will assist you in verifying your identity and resolving any issues, enabling you to regain full access to your account. We apologize for any inconvenience this may cause and appreciate your cooperation in helping us maintain the security of your account. <span className=" font-bold">support@Futon MFB.com</span>
   </Callout.Text>
  </Callout.Root>

 );
};

export default CalloutCard;