import { FaUser, } from 'react-icons/fa6';
import { Box, Button, Dialog, Flex, Tabs, Text, TextField } from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import { useSignup } from './useSignup';
import { useUser } from './useUser';
import ReactDatePicker from 'react-datepicker';
import { useState } from 'react';
import { formatDate } from '../../Hooks/helpers';
import { useCreateApi } from '../../Hooks/Create/useCreateApi';
import { useCreate } from '../../Hooks/Create/useCreate';

function LoginForm() {
  const [startDate, setStartDate] = useState();

  const { create: fn } = useCreateApi({ key: 'balance' });
  const { create, isCreating } = useCreate({ fn, key: ['balance'] });

  const { signup, isLoading: isSigningUp } = useSignup();
  const { register, handleSubmit, reset } = useForm();
  const { login, isLoading } = useLogin({ route: '/user' });

  const { user, isAuthenticated } = useUser();

  function signUp(data) {
    const date = formatDate(startDate);
    signup({ ...data, dateOfBirth: date });
    reset();
    create({
      userId: user.id,
      balance: 50,
    });
  }

  function onSubmit(data) {
    if (!data?.email || !data?.password) return;
    login(
      { email: data?.email, password: data?.password },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  }

  return (
    <>
      {isAuthenticated ? <p className=' text-blue-900 text-sm'>{user?.user_metadata?.fullName}</p> :
        <Form onSubmit={() => handleSubmit(onSubmit())}>
          <Dialog.Root>
            <Dialog.Trigger>
              <FaUser />
            </Dialog.Trigger>

            <Dialog.Content style={{ maxWidth: 450 }}>
              <Tabs.Root defaultValue="signIn">
                <Tabs.List>
                  <Tabs.Trigger value="signIn">Sign Up</Tabs.Trigger>
                  <Tabs.Trigger value="sign Up">Sign In</Tabs.Trigger>
                </Tabs.List>

                <Box px="4" pt="3" pb="2">
                  <Tabs.Content value="signIn">

                    <Dialog.Title>Sign up</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                      Sign up for free.
                    </Dialog.Description>

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

                      <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                          Full Name
                        </Text>
                        <TextField.Input
                          {...register("fullName", { required: "This field is required" })}
                          id='fullName'
                          type='text'
                          placeholder="Enter your full name"
                        />
                      </label>

                      <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                          Display Name
                        </Text>
                        <TextField.Input
                          {...register("displayName", { required: "This field is required" })}
                          id='displayName'
                          type='text'
                          placeholder="Enter your full name"
                        />
                      </label>

                      <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                          Address
                        </Text>
                        <TextField.Input
                          {...register("address", { required: "This field is required" })}
                          id='address'
                          type='text'

                          placeholder="Enter your full name"
                        />
                      </label>

                      <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                          Phone Number
                        </Text>
                        <TextField.Input
                          {...register("phoneNumber", { required: "This field is required" })}
                          id='phoneNumber'
                          type='tel'

                          placeholder="Enter your full name"
                        />
                      </label>

                      <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                          Country
                        </Text>
                        <TextField.Input
                          {...register("country", { required: "This field is required" })}
                          id='country'
                          type='text'

                          placeholder="United States"
                        />
                      </label>

                      <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                          State
                        </Text>
                        <TextField.Input
                          {...register("State", { required: "This field is required" })}
                          id='State'
                          type='text'

                          placeholder="Enter your state"
                        />
                      </label>

                      <div className=" grid gap-3 grid-cols-2 overflow-x-hidden">
                        <label>
                          <Text as="div" size="2" mb="1" weight="bold">
                            Gender
                          </Text>
                          <select className=' p-1 bg-white border border-gray-500 rounded' id="gender" {...register('gender')}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </label>
                        <label>
                          <Text as="div" size="2" mb="1" weight="bold">
                            Date of Birth
                          </Text>
                          <ReactDatePicker className=' p-1 bg-white border border-gray-500 rounded '
                            selected={startDate}
                            onChange={(date) => {
                              setStartDate(date);
                            }}
                            showYearDropdown
                            dateFormat="MM/dd/yyyy"
                            maxDate={new Date()} // Optional: Set a maximum date (e.g., today)
                            placeholderText="Select Date of Birth"
                          />
                        </label>
                      </div>
                    </Flex>

                    <Flex gap="3" mt="4" justify="end">
                      <Dialog.Close>
                        <Button variant="soft" color="gray" >
                          Cancel
                        </Button>
                      </Dialog.Close>

                      <Button disabled={isLoading || isSigningUp || isCreating} onClick={handleSubmit(signUp)}>{isSigningUp || isCreating ? <SpinnerMini /> : 'Sign up'}</Button>

                    </Flex>
                  </Tabs.Content>

                  <Tabs.Content value="sign Up">

                    <Dialog.Title>Sign Up</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                      Sign up for free.
                    </Dialog.Description>

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
                    </Flex>

                    <Flex gap="3" mt="4" justify="end">
                      <Dialog.Close>
                        <Button variant="soft" color="gray" >
                          Cancel
                        </Button>
                      </Dialog.Close>

                      <Button disabled={isLoading || isSigningUp} onClick={handleSubmit(onSubmit)}>{isLoading ? <SpinnerMini /> : 'Sign in'}</Button>




                    </Flex>
                  </Tabs.Content>
                </Box>
              </Tabs.Root>


            </Dialog.Content>


          </Dialog.Root>

        </Form >
      }
    </>
  );
}

export default LoginForm;
