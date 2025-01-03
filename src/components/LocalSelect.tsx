import { Select } from "@radix-ui/themes";
// import React, { useState } from "react";

// [bodyType, setBodyType] = useState("");

const handleChange = (e: Event) => {
	const bodyType = e;
	console.log(bodyType)
}

const LocalSelect = (() => {
	return (
		<Select.Root size="3" defaultValue="all" onValueChange={(e)=>handleChange(e)}>
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
