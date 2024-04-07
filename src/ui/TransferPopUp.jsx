import { ExitIcon } from '@radix-ui/react-icons';
import { Button, Dialog, Flex, TextField, Text } from '@radix-ui/themes';
import SpinnerMini from './SpinnerMini';
import { Form } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useCreateApi } from '@/Hooks/Create/useCreateApi';
import { useCreate } from '@/Hooks/Create/useCreate';
import { useGetApi } from '@/Hooks/Get/useGetApi';
import { useGet } from '@/Hooks/Get/useGet';
import Spinner from './Spinner';
import { useState } from 'react';
import { formatCurrency } from '@/Hooks/helpers';
import { useEditApi } from '@/Hooks/Edit/useEditApi';
import { useEdit } from '@/Hooks/Edit/useEdit';

const TransferPopUp = ({ className = ' w-full', userId }) => {
 const [OTP, setOTP] = useState(0);
 const [required, setRequired] = useState(false);
 const [valid, setValid] = useState(false);
 const { reset, register, handleSubmit, getValues, formState: { errors } } = useForm();
 const { create: fn } = useCreateApi({ key: 'transactions' });
 const { create, isCreating } = useCreate({ fn, key: ['transaction'] });
 const { fetch: fetchFn } = useGetApi({ key: 'accounts' });
 const { fetch: acc, isFetching } = useGet({ key: ['account', userId], fn: fetchFn });
 const { fetch: otpFn } = useGetApi({ key: 'otp' });
 const { fetch: otp, isFetching: isFetchingOtp } = useGet({ key: ['otp'], fn: otpFn });
 const acn = acc?.find(ac => ac?.userId === userId);
 const { editFn } = useEditApi({ key: 'accounts', id: acn?.id });
 const { edit, isEditing } = useEdit({ key: ['account'], fn: editFn });

 if (isFetching || isFetchingOtp) return <Spinner />;

 const bal = acc?.find(ac => ac?.userId === userId)?.checking;


 const onSubmit = data => {
  if (!data || data === undefined) return;
  const amount = bal - data?.amount;

  if (+OTP === otp.at(0).otp || data?.amount < 10000) {
   if (+data.pin === +acn?.pin) {
    create({ ...data, userId, author: 'milan', type: 'transfer', status: 'pending' }, {
     onSuccess: () => {
      edit({ name: acn?.name, checking: amount, account: acn?.account, admin: acn?.admin, email: acn?.email, routing: acn?.routing, savings: acn?.savings, userId });
      setValid(false);
      setRequired(false);

      reset();
     }
    });
   }
  }
 };

 const onClick = () => {
  const amount = +getValues('amount');
  if (amount > 10000) setRequired(true);
  setValid(true);
 };
 return (
  <Dialog.Root>
   <Dialog.Trigger>
    <Button className={className}><ExitIcon />Transfer</Button>
   </Dialog.Trigger>

   <Dialog.Content style={{ maxWidth: 450 }}>
    <Dialog.Title>Transfer</Dialog.Title>
    <Dialog.Description size="2" mb="4">
     Checking Balance: <span className=" font-bold">{formatCurrency({ value: bal, currency: acc?.currency })}</span>
    </Dialog.Description>
    <Form onSubmit={handleSubmit(onSubmit)}>
     <Flex direction="column" gap="3">
      <label>
       <Text as="div" size="2" mb="1" weight="bold">
        Amount
       </Text>
       <TextField.Input
        max={bal}
        type='number'
        required
        {...register('amount', {
         required: 'This field is required',
         max: { value: bal, message: 'Amount should be less than checking balance' }
        })} id='amount'
        placeholder="Enter amount to credit"
       />
       {errors?.amount?.message && <div className="pt-2">
        <span className=' text-rose-800 bg-rose-200 text-xs py-2 px-4 rounded-full'>{errors?.amount?.message}</span>
       </div>}
      </label>
      <label>
       <Text as="div" size="2" mb="1" weight="bold">
        Bank Name
       </Text>
       <TextField.Input
        type='text'
        required
        minLength={3}
        {...register('bankName', {
         required: 'This field is required',
         minLength: {
          value: 3,
          message: 'Enter a valid bank'
         }
        })} id='bankName'
        placeholder="Enter bank name"
       />
       {errors?.account?.message && <div className="pt-2">
        <span className=' text-rose-800 bg-rose-200 text-xs py-2 px-4 rounded-full'>{errors?.account?.message}</span>
       </div>}

      </label>
      <label>
       <Text as="div" size="2" mb="1" weight="bold">
        Account Number
       </Text>
       <TextField.Input
        type='number'
        required
        minLength={10}
        {...register('account', {
         required: 'This field is required',
         minLength: {
          value: 10,
          message: 'Should be 10 digits'
         }
        })} id='account'
        placeholder="Enter account number/routing number"
       />
       {errors?.account?.message && <div className="pt-2">
        <span className=' text-rose-800 bg-rose-200 text-xs py-2 px-4 rounded-full'>{errors?.account?.message}</span>
       </div>}

      </label>
      <label>
       <Text as="div" size="2" mb="1" weight="bold">
        Account Name
       </Text>
       <TextField.Input
        type='text'
        required
        minLength={4}
        {...register('name', {
         required: 'This field is required',
         minLength: {
          value: 4,
          message: 'Should be 4 letters'
         }
        })} id='name'
        placeholder="Enter account name "
       />
       {errors?.name?.message && <div className="pt-2">
        <span className=' text-rose-800 bg-rose-200 text-xs py-2 px-4 rounded-full'>{errors?.name?.message}</span>
       </div>}

      </label>
      {valid && <label>
       <Text as="div" size="2" mb="1" weight="bold">
        Pin
       </Text>
       <TextField.Input
        type='number'
        required
        minLength={4}
        {...register('pin', {
         required: 'This field is required',
         minLength: {
          value: 4,
          message: 'Should be 4 digits'
         }
        })} id='pin'
        placeholder="Enter pin "
       />
       {errors?.pin?.message && <div className="pt-2">
        <span className=' text-rose-800 bg-rose-200 text-xs py-2 px-4 rounded-full'>{errors?.pin?.message}</span>
       </div>}

      </label>}
      {/* {valid && <p className=' text-neutral-500 uppercase font-bold'>{name}</p>}
      {!valid && <p className=' text-rose-500 uppercase text-xs font-bold'>No account found</p>} */}
      {required && <label>
       <Text as="div" size="2" mb="1" weight="bold">
        OTP
       </Text>
       <TextField.Input
        onChange={(e) => {
         setValid(false);
         setOTP(e.target.value);
        }}
        type='number'
        required
        minLength={6}
        placeholder="Enter OTP"
       />
       {OTP.length < 6 && <div className="pt-2">
        <span className=' text-rose-900 bg-rose-100 text-xs py-1 px-3 rounded-full'>Invalid OPT</span>
       </div>}
      </label>}
     </Flex>

     {valid && <Flex gap="3" mt="4" justify="end">
      <Dialog.Close>
       <Button onClick={() => {
        reset();
        setValid(false);
        setRequired(false);
       }} variant="soft" color="gray" type='reset'>
        Cancel
       </Button>
      </Dialog.Close>

      <Button color='green' disabled={acn?.restricted || isEditing} type='submit'>
       {isCreating || isEditing ? <SpinnerMini /> : 'Send'}
      </Button>
     </Flex>}

     {!valid && <Flex gap="3" mt="4" justify="end">
      <Dialog.Close>
       <Button onClick={() => {
        setRequired(false);
        setValid(false);
       }} variant="soft" color="gray" type='reset'>
        Cancel
       </Button>
      </Dialog.Close>
      <Button color='green' type='button' disabled={acn?.restricted || isEditing} onClick={handleSubmit(onClick)}>
       {isCreating ? <SpinnerMini /> : 'Next'}
      </Button>
     </Flex>}

    </Form>
   </Dialog.Content>
  </Dialog.Root>

 );
};

export default TransferPopUp;