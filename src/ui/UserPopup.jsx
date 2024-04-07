import { EyeOpenIcon } from '@radix-ui/react-icons';
import { Button, Dialog, Flex, TextField, Text } from '@radix-ui/themes';

const UserPopUp = () => {
 return (
  <Dialog.Root>
   <Dialog.Trigger>
    <Button color='purple'><EyeOpenIcon />View</Button>   </Dialog.Trigger>

   <Dialog.Content style={{ maxWidth: 450 }}>
    <Dialog.Title>Edit profile</Dialog.Title>
    <Dialog.Description size="2" mb="4">
     Make changes to your profile.
    </Dialog.Description>

    <Flex direction="column" gap="3">
     <label>
      <Text as="div" size="2" mb="1" weight="bold">
       Name
      </Text>
      <TextField.Input
       defaultValue="Freja Johnsen"
       placeholder="Enter your full name"
      />
     </label>
     <label>
      <Text as="div" size="2" mb="1" weight="bold">
       Email
      </Text>
      <TextField.Input
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
      <Button color='green'>Save</Button>
     </Dialog.Close>
    </Flex>
   </Dialog.Content>
  </Dialog.Root>

 );
};

export default UserPopUp;