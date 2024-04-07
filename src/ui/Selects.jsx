import { Select } from '@radix-ui/themes';

const Selects = () => {
  return (
    <div>
      <Select.Root defaultValue='bed'>
        <Select.Trigger />
        <Select.Content position='popper'>
          <Select.Item value='bed'>Bed</Select.Item>
          <Select.Item value='table'>Table</Select.Item>
          <Select.Item value='chair'>Chair</Select.Item>
          <Select.Item value='tvConsole'>Tv console</Select.Item>
          <Select.Item value='diningTable'>Dining table</Select.Item>

        </Select.Content>
      </Select.Root>
    </div>
  );
};

export default Selects;