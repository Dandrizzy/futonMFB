import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { useEditApi } from "../Hooks/Edit/useEditApi";
import { useEdit } from "../Hooks/Edit/useEdit";
import Spinner from "./Spinner";
import { Form } from "react-router-dom";
import { useGetById } from "../Hooks/GetSpecific/useGetById";
import { useGet } from "../Hooks/Get/useGet";
import SpinnerMini from "./SpinnerMini";
import { useState } from "react";

const EditBalance = ({ id }) => {
 const { getSpecific } = useGetById({ key: 'balance', id: id, column: 'userId' });
 const { fetch, isFetching } = useGet({ key: ['balance'], fn: getSpecific });

 const balance = fetch?.data?.balance;
 const [balanced, setBalanced] = useState(0);
 const { editFn } = useEditApi({ key: 'balance', column: 'userId' });
 const { edit, isEditing } = useEdit({ key: ['balance'], fn: editFn });



 const handleEdit = () => {
  edit({ data: { balance: +balanced, userId: id }, id });
 };


 if (isFetching) return <Spinner />;
 return (
  <Dialog.Root>
   <Dialog.Trigger>
    <Button color="blue" variant="solid">
     <Pencil2Icon />
     Edit
    </Button>
   </Dialog.Trigger>

   <Dialog.Content style={{ maxWidth: 450 }}>
    <Dialog.Title>Edit Balance</Dialog.Title>
    <Dialog.Description size="2" mb="4">
     Make changes to user balance.
    </Dialog.Description>
    <Form onSubmit={() => handleEdit()}>

     <Flex direction="column" gap="3">
      <label>
       <Text as="div" size="2" mb="1" weight="bold">
        Balance
       </Text>
       <TextField.Input
        required
        onChange={e => setBalanced(e.target.value)}
        id="balance"
        type="number"
        defaultValue={balance}
        placeholder="Edit balance"
       />
      </label>
     </Flex>
    </Form>

    <Flex gap="3" mt="4" justify="end">
     <Dialog.Close>
      <Button variant="soft" color="gray">
       Cancel
      </Button>
     </Dialog.Close>

     <Button onClick={() => handleEdit()}>
      {isEditing ? <SpinnerMini /> : 'Save'}
     </Button>

    </Flex>
   </Dialog.Content>
  </Dialog.Root>

 );
};

export default EditBalance;