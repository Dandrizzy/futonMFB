import { useCreate } from "@/Hooks/Create/useCreate";
import { useCreateApi } from "@/Hooks/Create/useCreateApi";
import { useGet } from "@/Hooks/Get/useGet";
import { useGetApi } from "@/Hooks/Get/useGetApi";
import { useGetTransaction } from "@/Hooks/Transaction/useGetTransaction";
import { formatCurrency, formatDate } from "@/Hooks/helpers";
import AdminDeposit from "@/ui/AdminDeposit";
import Spinner from "@/ui/Spinner";
import SpinnerMini from "@/ui/SpinnerMini";
import TransferPopUp from "@/ui/TransferPopUp";
import { PlusCircledIcon, ResetIcon } from "@radix-ui/react-icons";
import { Button, Flex, Table, Text, TextField, Badge } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { MdDeleteForever } from "react-icons/md";
import { Form, useNavigate, useParams } from "react-router-dom";
import AdminEdit from "./AdminEdit";
import { useState } from "react";
import { useEditApi } from "@/Hooks/Edit/useEditApi";
import { useEdit } from "@/Hooks/Edit/useEdit";
import CalloutCard from "@/ui/Callout";

const AdminUsers = () => {
 const { userId } = useParams();
 const navigate = useNavigate();
 const { data: transactions = [], isLoading: isFetching } = useGetTransaction({ id: userId });
 const { fetch: fetchFn } = useGetApi({ key: 'accounts' });
 const { fetch: acc = [], isFetching: isFetchingAccount } = useGet({ key: ['account', userId], fn: fetchFn });
 const accounts = acc?.find(ac => ac.userId === userId);

 const { register, handleSubmit } = useForm();
 const { create: createFn } = useCreateApi({ key: 'accounts' });
 const { create, isCreating } = useCreate({ fn: createFn, key: ['account'] });
 const { editFn } = useEditApi({ key: 'accounts', id: accounts?.id });
 const { edit, isEditing } = useEdit({ key: ['accounts'], fn: editFn });

 const [isRestricted, setIsRestricted] = useState(accounts?.restricted);

 if (isFetching || isFetchingAccount) return <Spinner />;



 const onSubmit = data => {
  create({ ...data, admin: 'futon', userId, restricted: false });
 };


 const restrict = () => {
  setIsRestricted(x => !x);
  edit({ ...accounts, restricted: isRestricted });
 };

 return (
  <div className=" p-4">

   {accounts?.restricted && <CalloutCard />}

   <Form >
    <Flex direction="column" gap="3">
     <label>
      <Text as="div" size="2" mb="1" weight="bold" className=' text-neutral-800'>
       Name
      </Text>
      <TextField.Input
       disabled={accounts !== undefined} className=" disabled:cursor-not-allowed"
       {...register('name')} id='name' required
       defaultValue={accounts === undefined ? '' : accounts?.name}
       placeholder="Enter your full name"
      />
     </label>
     <label>
      <Text as="div" size="2" mb="1" weight="bold" className=' text-neutral-800'>
       Email
      </Text>
      <TextField.Input
       disabled={accounts !== undefined} className=" disabled:cursor-not-allowed"
       {...register('email')} id='email' required
       defaultValue={accounts === undefined ? '' : accounts?.email}
       placeholder="Enter your email"
       type="email"
      />
     </label>
     <label>
      <Text as="div" size="2" mb="1" weight="bold" className=' text-neutral-800'>
       Account Number
      </Text>
      <TextField.Input
       disabled={accounts !== undefined} className=" disabled:cursor-not-allowed"
       {...register('account', {
        required: 'Required',
        minLength: 10
       })} id='account' required
       minLength={10}
       defaultValue={accounts === undefined ? '' : accounts?.account}
       placeholder="Enter account number"
       type="number"
      />
     </label>
     <label>
      <Text as="div" size="2" mb="1" weight="bold" className=' text-neutral-800'>
       Routing Number
      </Text>
      <TextField.Input
       disabled={accounts !== undefined} className=" disabled:cursor-not-allowed"
       {...register('routing')} id='routing' required
       defaultValue={accounts === undefined ? '' : accounts?.routing}
       placeholder="Enter routing number"
       type="number"
      />
     </label>
     <label>
      <Text as="div" size="2" mb="1" weight="bold" className=' text-neutral-800'>
       Checking
      </Text>
      <TextField.Input
       disabled={accounts !== undefined} className=" disabled:cursor-not-allowed"
       {...register('checking')} id='checking' required
       defaultValue={accounts === undefined ? '' : accounts?.checking}
       placeholder="Enter checking balance"
       type="number"
      />
     </label>
     <label>
      <Text as="div" size="2" mb="1" weight="bold" className=' text-neutral-800'>
       Savings
      </Text>
      <TextField.Input
       disabled={accounts !== undefined} className=" disabled:cursor-not-allowed"
       {...register('savings')} id='savings' required type="number"
       defaultValue={accounts === undefined ? '' : accounts?.savings}
       placeholder="Enter savings balance"
      />
     </label>
     <label>
      <Text as="div" size="2" mb="1" weight="bold" className=' text-neutral-800'>
       Pin
      </Text>
      <TextField.Input
       disabled={accounts !== undefined} className=" disabled:cursor-not-allowed"
       {...register('pin')} id='pin' required type="number"
       defaultValue={accounts === undefined ? '' : accounts?.pin}
       placeholder="Enter pin."
      />
     </label>
     <label>
      <Text as="div" size="2" mb="1" weight="bold" className=' text-neutral-800'>
       Currency
      </Text>
      <select disabled={accounts?.currency !== undefined} defaultValue={accounts === undefined ? 'USD' : accounts?.currency} {...register('currency')} id='currency' className=" rounded-full disabled:cursor-not-allowed border-[1.5px] border-neutral-300 disabled:bg-neutral-200/80" >



       <option value="USD">USD</option>
       <option value="GBP">GBP</option>
       <option value="JPY">
        JPY
       </option>


       <option value="CHN">CHN</option>
       <option value="EUR">EUR</option>

      </select>

     </label>
    </Flex>
    {accounts === undefined && <Flex gap="3" mt="4" justify="end">
     <Button color="green" onClick={handleSubmit(onSubmit)}><PlusCircledIcon />{isCreating ? <SpinnerMini /> : 'Create'}</Button>
     <Button variant="soft" color="gray" type="reset">
      <ResetIcon />
      Reset
     </Button>

    </Flex>}
   </Form>

   <div className=" col-span-2 mt-4">
    <Table.Root variant='surface'>
     <Table.Header>
      <Table.Row>
       <Table.ColumnHeaderCell>Transactions</Table.ColumnHeaderCell>
       <Table.ColumnHeaderCell >
       </Table.ColumnHeaderCell>
      </Table.Row>
     </Table.Header>

     {transactions.reverse().map(transaction => <Table.Body key={transaction.id}>
      <Table.Row>
       <Table.RowHeaderCell>
        <AdminEdit transaction={transaction}>
         <div className=" grid gap-1">
          <p className=" capitalize">{transaction.name}</p>
          <span className=" text-xs text-neutral-500">{formatDate(transaction.created_at)}, Checking</span>
         </div>
        </AdminEdit>
       </Table.RowHeaderCell>
       <Table.Cell >
        <div className="grid place-content-end place-items-end gap-1 text-right">
         <div className={transaction.type === 'deposit' ? ' text-right text-green-400' : ' text-right text-rose-400'}>{transaction?.type === 'deposit' ? '+' : '-'}{formatCurrency({ value: transaction.amount, currency: accounts?.currency })}</div>
         <Badge color={`${transaction.status === 'success' ? 'green' : transaction.status === 'failed' ? 'red' : 'yellow'}`}>{transaction.status}</Badge>
        </div>
       </Table.Cell>
      </Table.Row>


     </Table.Body>)}
    </Table.Root>

   </div>

   {isEditing ? <SpinnerMini /> : <Flex gap="2" mt="6" wrap='wrap' justify="center">


    <AdminDeposit className="" />
    <TransferPopUp className="" userId={userId} />
    <Button color="yellow" onClick={restrict} variant="surface">{accounts?.restricted ? 'Un-restrict' : 'Restrict'}</Button>
    <Button color='red'><MdDeleteForever />Delete</Button>
    <Button variant="soft" color="gray" onClick={() => navigate('/admin')}>
     &larr; Back
    </Button>

   </Flex>}

  </div>


 );
};

export default AdminUsers;