import { Box, Card, Container, Heading, Inset, Text } from "@radix-ui/themes";
import React from "react";
import planet from "../assets/planet.svg";
import "../component-styles/localInsetStyles.css"

interface LocalInsetProps {
	/** Title of celestial body */
	cbEnglishName: string;
	/** celestial body type */
	cbType: "Comet" | "Planet" | "Asteroid" | "Dwarf Planet" | "Moon";
	/** celestial body vol */
	vol?: number;
	/** celestial body vol exponent */
	volExponent?: number;
	/** celestial body density */
	density?: number;
	/** celestial body mass */
	mass?: number;
}
const LocalInset = React.forwardRef(
	({
		cbEnglishName,
		cbType,
		vol,
		volExponent,
		density,
		mass,
	}: LocalInsetProps) => {
		return (
			<Box className="inset" minHeight="2rem">
				<Container className="container" size={"4"}>
					<Card size={"4"} className="inset-card">
						<img
							className="cb-svg"
							src={planet}
							alt="red planet"
							style={{
								display: "block",
								width: "100%",
								height: 120,
							}}
						/>
						<Inset clip={"padding-box"}>
							<Heading className="inset-heading" align={"center"}>
								{cbEnglishName}
							</Heading>
							<Text className="inset-text" as="p" size="5">
								Type: {cbType}
							</Text>
							<Text className="inset-text" as="p" size="5">
								Volume: {vol}
								<sup>{volExponent}</sup>
								km
							</Text>
							<Text className="inset-text" as="p" size="5">
								Density: {density}
							</Text>
							<Text className="inset-text" as="p" size="5">
								Mass: {mass}
							</Text>
						</Inset>
					</Card>
				</Container>
			</Box>
		);
	}
);
export default LocalInset;
