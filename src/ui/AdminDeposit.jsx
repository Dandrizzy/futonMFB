import { useCreate } from '@/Hooks/Create/useCreate';
import { useCreateApi } from '@/Hooks/Create/useCreateApi';
import { EnterIcon } from '@radix-ui/react-icons';
import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import { Form, useParams } from 'react-router-dom';
import SpinnerMini from './SpinnerMini';
import { formatCurrency } from '@/Hooks/helpers';
import { useEdit } from '@/Hooks/Edit/useEdit';
import { useGet } from '@/Hooks/Get/useGet';
import { useGetApi } from '@/Hooks/Get/useGetApi';
import { useEditApi } from '@/Hooks/Edit/useEditApi';
import Spinner from './Spinner';

const AdminDeposit = ({ className = 'w-full' }) => {
 const { userId } = useParams();
 const { reset, register, handleSubmit } = useForm();
 const { create: fn } = useCreateApi({ key: 'transactions' });
 const { create, isCreating } = useCreate({ fn, key: ['transaction'] });
 const { fetch: fetchFn } = useGetApi({ key: 'accounts' });
 const { fetch: acc, isFetching } = useGet({ key: ['account', userId], fn: fetchFn });
 const acn = acc?.find(ac => ac?.userId === userId);
 const { editFn } = useEditApi({ key: 'accounts', id: acn?.id });
 const { edit, isEditing } = useEdit({ key: ['account'], fn: editFn });

 if (isFetching) return <Spinner />;
 const bal = acc?.find(ac => ac?.userId === userId)?.checking;
 const onSubmit = data => {
  if (!data || data === undefined) return;
  const amount = +bal + +data?.amount;
  create({ ...data, userId, author: 'milan', type: 'deposit', status: 'success' }, {
   onSuccess: () => {
    edit({ name: acn.name, checking: amount, account: acn.account, admin: acn.admin, email: acn.email, routing: acn.routing, savings: acn.savings, userId });
    reset();
   }
  });
 };

 return (
  <Dialog.Root>
   <Dialog.Trigger>

    <Button variant='surface' className={className}><EnterIcon />Deposit</Button>
   </Dialog.Trigger>

   <Dialog.Content style={{ maxWidth: 450 }}>
    <Dialog.Title>Deposit</Dialog.Title>
    <Dialog.Description size="2" mb="4">
     Checking Balance: <span className=" font-bold">{formatCurrency({ value: bal, currency: acn?.currency })}</span>
    </Dialog.Description>
    <Form onSubmit={handleSubmit(onSubmit)}>
     <Flex direction="column" gap="3">
      <label>
       <Text as="div" size="2" mb="1" weight="bold">
        Amount
       </Text>
       <TextField.Input
        type='number'
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
        required
        {...register('name')} id='name'
        placeholder="Enter sender's name"
       />
      </label>
     </Flex>

     <Flex gap="3" mt="4" justify="end">
      <Dialog.Close>
       <Button disabled={isEditing || isCreating} variant="soft" color="gray" type='reset'>
        Cancel
       </Button>
      </Dialog.Close>

      <Button color='green' type='submit' disabled={isEditing || isCreating}>
       {isCreating || isEditing ? <SpinnerMini /> : 'Deposit'}
      </Button>


     </Flex>
    </Form>
   </Dialog.Content>
  </Dialog.Root>

 );
};

export default AdminDeposit;