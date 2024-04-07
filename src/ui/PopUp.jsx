import { FaUser, } from 'react-icons/fa6';
import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';

const PopUp = () => {

 const { register, handleSubmit } = useForm();

 const onSubmit = (data) => {
  console.log(data);
 };

 return (
  <Form onSubmit={() => handleSubmit(onSubmit())}>
   <Dialog.Root>
    <Dialog.Trigger>
     <FaUser />
    </Dialog.Trigger>

    <Dialog.Content style={{ maxWidth: 450 }}>
     <Dialog.Title>Log in</Dialog.Title>
     <Dialog.Description size="2" mb="4">
      Login with your gmail and password.
     </Dialog.Description>

     <Flex direction="column" gap="3">
      <label>
       <Text as="div" size="2" mb="1" weight="bold">
        Name
       </Text>
       <TextField.Input
        {...register('name')}
        id='name'
        type='text'
        defaultValue="Freja Johnsen"
        placeholder="Enter your full name"
       />
      </label>
      <label>
       <Text as="div" size="2" mb="1" weight="bold">
        Email
       </Text>
       <TextField.Input
        {...register('email')}
        id='email'
        type='email'
        defaultValue="freja@example.com"
        placeholder="Enter your email"
       />
      </label>
     </Flex>

     <Flex gap="3" mt="4" justify="end">
      <Dialog.Close>
       <Button variant="soft" color="gray">
        Cancel
       </Button>
      </Dialog.Close>
      <Dialog.Close>
       <Button onClick={handleSubmit(onSubmit)}>Save</Button>
      </Dialog.Close>
     </Flex>
    </Dialog.Content>
   </Dialog.Root>

  </Form>

 );
};

export default PopUp;