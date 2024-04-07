import { useSignup } from '@/Features/authentication/useSignup';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { Button, Dialog, Flex, TextField, Text } from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';
import SpinnerMini from './SpinnerMini';
import toast from 'react-hot-toast';

const CreateUserPopUp = () => {
  const { signup, isLoading } = useSignup();
  const { register, getValues, handleSubmit, reset, formState: { errors } } = useForm();

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSuccess: () => {
          toast.success('Successfully created verify your mail');
          reset();
        },
        onError: () => {
          toast.error('There was an error');
          reset();
        },
      }
    );
  }
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button color='green'><PlusCircledIcon />Create user</Button>
      </Dialog.Trigger>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Dialog.Content style={{ maxWidth: 450 }}>
          <Dialog.Title>Create user</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Create a new user profile.
          </Dialog.Description>

          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Name
              </Text>
              <TextField.Input
                required
                type="text"
                id="fullName"
                disabled={isLoading}
                {...register("fullName", { required: "This field is required" })}
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Email
              </Text>
              <TextField.Input
                required
                type="email"
                id="email"
                disabled={isLoading}
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please provide a valid email address",
                  },
                })}
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Password
              </Text>
              <TextField.Input
                required
                type="password"
                id="password"
                disabled={isLoading}
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 8,
                    message: "Password needs a minimum of 8 characters",
                  },
                })}
              />
              {errors?.password?.message && <div className="pt-2">
                <span className=' text-rose-800 bg-rose-200 text-xs py-2 px-4 rounded-full'>{errors?.password?.message}</span>
              </div>}
            </label>
            <label>

              <Text as="div" size="2" mb="1" weight="bold">
                Confirm Password
              </Text>
              <TextField.Input
                required
                type="password"
                id="passwordConfirm"
                disabled={isLoading}
                {...register("passwordConfirm", {
                  required: "This field is required",
                  validate: (value) =>
                    value === getValues().password || "Passwords need to match",
                })}
              />
              {errors?.passwordConfirm?.message && <div className="pt-2">
                <span className=' text-rose-800 bg-rose-200 text-xs py-2 px-4 rounded-full'>{errors?.passwordConfirm?.message}</span>
              </div>}
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button disabled={isLoading} variant="soft" color="gray">
                Cancel
              </Button>
            </Dialog.Close>

            <Button onClick={handleSubmit(onSubmit)} color='green' disabled={isLoading} type='submit'>{isLoading ? <SpinnerMini /> : 'Create Account'}</Button>

          </Flex>
        </Dialog.Content>
      </Form>
    </Dialog.Root>

  );
};

export default CreateUserPopUp;