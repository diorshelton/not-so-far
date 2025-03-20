import { Select } from "@radix-ui/themes";

interface LocalSelectProps {
	checkBodyType: (arg0: string) => string;
}

const LocalSelect: React.FC<LocalSelectProps> = ({ checkBodyType }) => {

	const logBodyType = (e: string) => {
		const bodyType = e;
		checkBodyType(bodyType);
	};

	return (
		<Select.Root
			size="3"
			defaultValue="all"
			onValueChange={(e) => {
				logBodyType(e);
			}}
		>
			<Select.Trigger />
			<Select.Content>
				<Select.Group>
					<Select.Label>Celestial Bodies</Select.Label>
					<Select.Separator />
					<Select.Item value="all">All Celestial Bodies</Select.Item>
					<Select.Item value="asteroid">Asteroids</Select.Item>
					<Select.Item value="comet">Comets</Select.Item>
					<Select.Item value="dwarf planet">Dwarf Planets</Select.Item>
					<Select.Item value="moon">Moons</Select.Item>
					<Select.Item value="planet">Planets</Select.Item>
					<Select.Item value="star">Star</Select.Item>
				</Select.Group>
			</Select.Content>
		</Select.Root>
	);
};

export default LocalSelect;
