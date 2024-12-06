import { Select } from "@radix-ui/themes";
import React from "react";

// Create Interface

// interface LocalSelectProps {
//   label: string
//   value: string
// }
// { label, value }: LocalSelectProps
const LocalSelect = React.forwardRef(() => {
	return (
		<Select.Root size="3" defaultValue="all">
			<Select.Trigger />
			<Select.Content>
				<Select.Group>
					<Select.Label>Celestial Bodies</Select.Label>
					<Select.Separator />
					<Select.Item value="all">All</Select.Item>
					<Select.Item value="asteroid">Asteroid</Select.Item>
					<Select.Item value="comet">Comet</Select.Item>
					<Select.Item value="dwarf planet">Dwarf Planet</Select.Item>
					<Select.Item value="moon">Moon</Select.Item>
					<Select.Item value="planet">Planet</Select.Item>
				</Select.Group>
			</Select.Content>
		</Select.Root>
	);
});

export default LocalSelect;
