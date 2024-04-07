import { useEdit } from "@/Hooks/Edit/useEdit";
import { useEditApi } from "@/Hooks/Edit/useEditApi";
import { useGet } from "@/Hooks/Get/useGet";
import { useGetApi } from "@/Hooks/Get/useGetApi";
import Spinner from "@/ui/Spinner";
import SpinnerMini from "@/ui/SpinnerMini";
import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";

const OTPPopup = () => {
 const { register, handleSubmit } = useForm();
 const { fetch: fn } = useGetApi({ key: 'otp' });
 const { fetch: otp, isFetching } = useGet({ key: ['otp'], fn });
 const { editFn } = useEditApi({ key: 'otp', id: 1 });
 const { edit, isEditing } = useEdit({ key: ['otp'], fn: editFn });
 if (isFetching) return <Spinner />;
 const submit = data => {
  edit(data);
 };
 return (
  <Dialog.Root>
   <Dialog.Trigger>
    <Button>Generate OPT</Button>
   </Dialog.Trigger>

   <Dialog.Content maxWidth="450px">
    <Dialog.Title>OTP management</Dialog.Title>
    <Dialog.Description size="2" mb="4">
     Customize your OTP.
    </Dialog.Description>
    <Form onSubmit={handleSubmit(submit)}>


     <Flex direction="column" gap="3">
      <label>
       <Text as="div" size="2" mb="1" weight="bold">
        OTP
       </Text>
       <TextField.Input
        minLength={6}
        {...register('otp', {
         minLength: 6
        })}
        defaultValue={otp[0]?.otp}
        placeholder="Enter otp"
       />
      </label>
      <Dialog.Close>
       <Button disabled={isEditing} variant="soft" color="gray">
        Cancel
       </Button>
      </Dialog.Close>

      <Button disabled={isEditing} type="submit" color="green">{isEditing ? <SpinnerMini /> : 'Change OTP'}</Button>

     </Flex>

    </Form>


   </Dialog.Content>
  </Dialog.Root>

 );
};

export default OTPPopup;