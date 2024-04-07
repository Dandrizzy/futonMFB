import { CaretDownIcon } from "@radix-ui/react-icons";
import { Button, DropdownMenu, Flex } from "@radix-ui/themes";

const DropDown = () => {
 return (
  <div>
   <Flex gap="3" align="center">
    {/* <DropdownMenu.Root>
      <DropdownMenu.Trigger>
       <Button variant="solid">
        Options
        <CaretDownIcon width="12" height="12" />
       </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content variant="solid">
       <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
       <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
       <DropdownMenu.Separator />
       <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

       <DropdownMenu.Separator />
       <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
        Delete
       </DropdownMenu.Item>
      </DropdownMenu.Content>
     </DropdownMenu.Root> */}

    <DropdownMenu.Root>
     <DropdownMenu.Trigger>
      <Button variant="soft">
       <CaretDownIcon width="12" height="12" />
      </Button>
     </DropdownMenu.Trigger>
     <DropdownMenu.Content variant="soft">
      <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
      <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
      <DropdownMenu.Separator />
      <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

      <DropdownMenu.Separator />
      <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
       Delete
      </DropdownMenu.Item>
     </DropdownMenu.Content>
    </DropdownMenu.Root>
   </Flex>

  </div>
 );
};

export default DropDown;