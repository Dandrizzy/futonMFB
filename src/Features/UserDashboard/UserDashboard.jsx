import { formatDate } from '@/Hooks/helpers';
import { Dialog, Button, Badge } from '@radix-ui/themes';

const UserDashboard = ({ transaction, children }) => {
 return (
  <>
   <Dialog.Root>
    <Dialog.Trigger>
     {children}
    </Dialog.Trigger>

    <Dialog.Content maxWidth="450px" >
     <Dialog.Title >Transaction Details</Dialog.Title>
     <Dialog.Description size="2" mb="4">
      View transaction  details here.
     </Dialog.Description>

     <div className=" grid gap-4">
      <div className=" grid grid-cols-[120px_auto] font-semibold capitalize">
       <p className=' text-sm'>ID:</p>
       <p className=' text-sm'>{transaction.userId}</p>
      </div>
      <div className="  grid grid-cols-[120px_60px] font-semibold capitalize">
       <p className=' text-sm'>Status:</p>
       <Badge color={`${transaction.status === 'success' ? 'green' : transaction.status === 'failed' ? 'red' : 'yellow'}`}>{transaction.status}</Badge>
      </div>
      <div className=" grid grid-cols-[120px_auto] font-semibold capitalize">
       <p className=' text-sm'>amount:</p>
       <p className=' text-sm'>{transaction.amount}</p>
      </div>
      <div className=" grid grid-cols-[120px_auto] font-semibold capitalize">
       <p className=' text-sm'>name:</p>
       <p className=' text-sm'>{transaction.name}</p>
      </div>
      <div className=" grid grid-cols-[120px_auto] font-semibold capitalize">
       <p className=' text-sm'>type:</p>
       <p className=' text-sm'>{transaction.type}</p>
      </div>
      <div className=" grid grid-cols-[120px_auto] font-semibold capitalize">
       <p className=' text-sm'>bank name:</p>
       <p className=' text-sm'>{transaction.bankName}</p>
      </div>
      <div className=" grid grid-cols-[120px_auto] font-semibold capitalize pb-8">
       <p className=' text-sm'>created at:</p>
       <p className=' text-sm'>{formatDate(transaction.created_at)}</p>
      </div>

      <Dialog.Close>
       <Button variant="soft" color="gray">
        Cancel
       </Button>
      </Dialog.Close>
     </div>


    </Dialog.Content>
   </Dialog.Root>

  </>
 );
};

export default UserDashboard;