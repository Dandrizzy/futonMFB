import { AlertDialog, Button, Flex } from '@radix-ui/themes';

const InvestBtn = ({ plan, id }) => {

 (plan, id);
 return (
  <div>
   <AlertDialog.Root>
    <AlertDialog.Trigger>
     <Button color="blue" size='3'>Invest Now</Button>
    </AlertDialog.Trigger>
    <AlertDialog.Content style={{ maxWidth: 450 }}>
     <AlertDialog.Title>Confirm Investment</AlertDialog.Title>
     <AlertDialog.Description size="2">
      Are you sure? This application will no longer be accessible and any
      existing sessions will be expired.
     </AlertDialog.Description>

     <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
       <Button variant="soft" color="gray">
        Cancel
       </Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
       <Button variant="solid" color="green">
        Confirm
       </Button>
      </AlertDialog.Action>
     </Flex>
    </AlertDialog.Content>
   </AlertDialog.Root>

  </div>
 );
};

export default InvestBtn;