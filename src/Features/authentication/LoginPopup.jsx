import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';
import { useLogin } from "./useLogin";
import SpinnerMini from '@/ui/SpinnerMini';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useGet } from '@/Hooks/Get/useGet';
import { useGetApi } from '@/Hooks/Get/useGetApi';
import Spinner from '@/ui/Spinner';

function LoginPopup() {
 const { fetch: fn } = useGetApi({ key: 'otp' });
 const { fetch: OTP, isFetching } = useGet({ key: ['otp'], fn });
 const [otp, setOtp] = useState(false);
 const { register, handleSubmit, reset } = useForm();
 const { login, isLoading } = useLogin({ route: '/dashboard' });
 if (isFetching) return <Spinner />;
 const onSubmit = (data) => {
  if (data.email === 'admin@nordrakreds.com') {
   login(
    data,
    {
     onSuccess: () => {
      reset();
     },
    }
   );
   return;
  }

  setOtp(true);
  if (!data) return;
  if (!data.otp) return;
  if (data.otp != OTP.at(0)?.otp) {
   toast.error('Please confirm your OTP code');
   return;
  }

  login(
   data,
   {
    onSuccess: () => {
     reset();
    },
   }
  );
 };
 return (
  <>
   <Dialog.Root>
    <Dialog.Trigger>
     <Button variant='ghost'>

      <span className="text-sm font-semibold leading-6 text-gray-900">
       Login <span aria-hidden="true">&rarr;</span>
      </span>

     </Button>
    </Dialog.Trigger>

    <Dialog.Content style={{ maxWidth: '450px' }}>
     <Dialog.Title>Log In</Dialog.Title>
     <Dialog.Description size="2" mb="4">
      Login to your account
     </Dialog.Description>

     <Form >
      <Flex direction="column" gap="3">
       <label>
        <Text as="div" size="2" mb="1" weight="bold">
         Email
        </Text>
        <TextField.Input
         {...register("email", {
          required: "This field is required",
          pattern: {
           value: /\S+@\S+\.\S+/,
           message: "Please provide a valid email address",
          },
         })}
         required
         id='email'
         type='text'
         placeholder="example@email.com"
        />
       </label>

       <label>
        <Text as="div" size="2" mb="1" weight="bold">
         Password
        </Text>
        <TextField.Input
         required
         {...register("password", {
          required: "This field is required",
          minLength: {
           value: 8,
           message: "Password needs a minimum of 8 characters",
          },
         })}
         id='password'
         type='password'
         placeholder="Enter your password"
        />
       </label>
       {otp && <label>
        <Text as="div" size="2" mb="1" weight="bold">
         OTP
        </Text>
        <TextField.Input
         required
         {...register("otp", {
          required: "This field is required",
          minLength: {
           value: 6,
           message: "OTP needs a minimum of 6 characters",
          },
         })}
         id='otp'
         type='number'
         placeholder="Enter your password"
        />
       </label>}
       <Button mt='4' onClick={handleSubmit(onSubmit)} color='green'>{isLoading ? <SpinnerMini /> : 'Log in'}</Button>
       <Dialog.Close>
        <Button variant="soft" color="gray">
         Cancel
        </Button>
       </Dialog.Close>
      </Flex>

      {/* <Flex gap="3" mt="4" justify="end">
       <Dialog.Close>
        <Button variant="soft" color="gray">
         Cancel
        </Button>
       </Dialog.Close>

       <Button onClick={handleSubmit(onSubmit)} color='green'>{isLoading ? <SpinnerMini /> : 'Log in'}</Button>

      </Flex> */}
     </Form>
    </Dialog.Content>
   </Dialog.Root>

  </>
 );
}

export default LoginPopup;
