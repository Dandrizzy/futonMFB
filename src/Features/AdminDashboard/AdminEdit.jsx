import { useEdit } from "@/Hooks/Edit/useEdit";
import { useEditApi } from "@/Hooks/Edit/useEditApi";
import Spinner from "@/ui/Spinner";
import { Dialog, Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";

const AdminEdit = ({ transaction, children }) => {
 const { editFn: fn } = useEditApi({ key: 'transactions', id: transaction.id });
 const { edit, isEditing } = useEdit({ key: ['transaction'], fn });
 const x = transaction.created_at.split('.').at(0);
 const y = transaction.created_at.split('+').at(1);
 const { register, handleSubmit } = useForm();
 if (isEditing) return <Spinner />;
 const onSubmit = data => {
  const update = { ...data, created_at: data.created_at + '+' + y };
  edit({ ...transaction, ...update });
 };
 return (
  <div>
   <Dialog.Root>
    <Dialog.Trigger>
     <div>
      {children}
     </div>
    </Dialog.Trigger>

    <Dialog.Content >
     <Dialog.Title>Edit Transaction</Dialog.Title>
     <Dialog.Description size="2" mb="4">
      {transaction.id}
     </Dialog.Description>

     <Form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="3">
       <label>
        <Text as="div" size="2" mb="1" weight="bold">
         Amount
        </Text>
        <TextField.Input
         type='number'
         defaultValue={transaction.amount}
         required
         {...register('amount')} id='amount'
         placeholder="Enter amount to deposit"
        />
       </label>
       <label>
        <Text as="div" size="2" mb="1" weight="bold">
         Bank Name
        </Text>
        <TextField.Input
         defaultValue={transaction.bankName ?? 'City Bank'}
         type='text'
         required
         {...register('bankName')} id='bankName'
         placeholder="Enter bank name to deposit"
        />
       </label>
       <label>
        <Text as="div" size="2" mb="1" weight="bold">
         Account Number
        </Text>
        <TextField.Input
         defaultValue={transaction.account}
         type='number'
         minLength={10}
         required
         {...register('account')} id='account'
         placeholder="Enter amount to deposit"
        />
       </label>
       <label>
        <Text as="div" size="2" mb="1" weight="bold">
         Sender&apos;s full name
        </Text>
        <TextField.Input
         defaultValue={transaction.name}
         required
         {...register('name')} id='name'
         placeholder="Enter sender's name"
        />
       </label>

       <label>
        <Text as="div" size="2" mb="1" weight="bold">
         Date
        </Text>
        <TextField.Input
         type="datetime-local"
         defaultValue={x}
         required
         {...register('created_at')} id='created_at'
         placeholder="Enter sender's name"
        />
       </label>

       <label>
        <Text as="div" size="2" mb="1" weight="bold">
         Status
        </Text>
        <select
         defaultValue={transaction.status}
         required
         {...register('status')} id='status'
         placeholder="Enter status"
        >
         <option value="success">Success</option>
         <option value="failed">Failed</option>
         <option value="pending">Pending</option>
        </select>
       </label>
       <Dialog.Close>
        <Button variant="soft" color="gray" type='reset'>
         Cancel
        </Button>
       </Dialog.Close>

       <Button color='green' type='submit' >
        Deposit
       </Button>
      </Flex>


     </Form>


    </Dialog.Content>
   </Dialog.Root>

  </div>
 );
};

export default AdminEdit;