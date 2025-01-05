import { Box, Card, Container, Heading, Inset, Text } from "@radix-ui/themes";
import planet from "../assets/planet.svg";
import asteroid from "../assets/asteroid.svg";
import "../component-styles/localInsetStyles.css";

interface LocalInsetProps {
	/** ID of celestial body */
	id: string;
	/** Title of celestial body */
	englishName: string;
	/** celestial body type */
	bodyType: "Comet" | "Planet" | "Asteroid" | "Dwarf Planet" | "Moon" | "Star";
	/** celestial body vol value */
	volValue?: number;
	/** celestial body vol exponent */
	volExponent?: number;
	/** celestial body density */
	density?: number;
	/** celestial body mass */
	massValue?: number;
	/** mass exponent */

	massExponent?: number;
}
const LocalInset = ({
	englishName,
	bodyType,
	volValue,
	volExponent,
	density,
	massValue,
	massExponent,
}: LocalInsetProps) => {

	const setSvgImage = (bodyType: string) => {
		let svgType = '';
		for (const letter of bodyType) {
			const char = letter.toLowerCase();
			svgType += char
		}
		return svgType
	};

	return (
		<Box className="inset" minHeight="2rem">
			<Container className="container" size={"4"}>
				<Card size={"4"} className="inset-card">
					<img
						className="cb-svg"
						src={planet}
						alt={setSvgImage(bodyType)}
						style={{
							display: "block",
							width: "100%",
							height: 120,
						}}
					/>
					<Inset clip={"padding-box"}>
						<Heading className="inset-heading" align={"center"}>
							{englishName}
						</Heading>
						<Text className="inset-text" as="p" size="5">
							Type: {bodyType}
						</Text>
						<Text className="inset-text" as="p" size="5">
							Volume:{volValue}x10
							<sup>{volExponent}</sup>
							km<sup>3</sup>
						</Text>
						<Text className="inset-text" as="p" size="5">
							Density: {density} g/cm <sup>3</sup>
						</Text>
						<Text className="inset-text" as="p" size="5">
							Mass: {massValue} x 10
							<sup>{massExponent}</sup>
							kg
						</Text>
					</Inset>
				</Card>
			</Container>
		</Box>
	);
};
export default LocalInset;
