import { EnterIcon } from '@radix-ui/react-icons';
import { Button, Dialog, Flex } from '@radix-ui/themes';

const DepositPopUp = ({ className = 'w-full' }) => {
 return (
  <Dialog.Root>
   <Dialog.Trigger>

    <Button variant='surface' className={className}><EnterIcon />Deposit</Button>
   </Dialog.Trigger>

   <Dialog.Content style={{ maxWidth: 450 }}>
    <Dialog.Title>Deposit</Dialog.Title>
    <Dialog.Description size="2" mb="4">
     Please go to bank to make deposits.
    </Dialog.Description>

    <Flex gap="3" mt="4" justify="end">
     <Dialog.Close>
      <Button variant="soft" color="gray">
       Cancel
      </Button>
     </Dialog.Close>

    </Flex>
   </Dialog.Content>
  </Dialog.Root>

 );
};

export default DepositPopUp;