import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

type Props = {
  items: string[];
  label: string;
  onChange: (e: Event) => void;
};

export const Dropdown = (props: Props) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="h-12 w-44 border rounded border-border">
        {props.label}
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="z-50 bg-elements border border-border rounded w-44 p-4 cursor-pointer">
        {props.items.map((item) => {
          return (
            <DropdownMenu.Item onSelect={props.onChange}>
              <p>{item}</p>
            </DropdownMenu.Item>
          );
        })}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
