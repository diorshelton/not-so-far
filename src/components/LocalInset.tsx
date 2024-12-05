import { Box, Card, Container, Heading, Inset, Text } from "@radix-ui/themes";
import React from "react";
import planet from "../assets/planet.svg";

interface LocalInsetProps {
  /** Title of celestial body */
  cbEnglishName: string;
  /** celestial body type */
  cbType: "Comet" | "Planet" | "Asteroid" | "Dwarf Planet"
  /** celestial body vol */
  vol?: number;
  /** celestial body vol exponent */
  volExponent?: number;
  /** celestial body density */
  density?: number;
  /** celestial body mass */
  mass?: number;
}
const LocalInset = React.forwardRef(({cbEnglishName, cbType, vol,volExponent, density, mass}: LocalInsetProps) => {
	return (
		<Box  minHeight="2rem" maxWidth={"22rem"}>
      <Container size={"4"}>
				<Card size={"4"} className="inset-card">
					<img
						className="cb-svg"
						src={planet}
						alt="red planet"
						style={{
							display: "block",
							objectFit: "scale-down",
							width: "100%",
							height: 140,
							backgroundColor: "var(--gray-5)",
						}}
					/>
          <Inset className="inset-box" clip={"padding-box"}>
            <Heading className="inset-heading" align={"center"}>{cbEnglishName}</Heading>
            <Text align={"left"} as="p" size="5">Type: {cbType}
						</Text>
            <Text align={"left"} as="p" size="5">Volume: {vol}
              <sup>{volExponent}</sup>
              km
						</Text>
            <Text align={"left"} as="p" size="5">Density: {density}
						</Text>
            <Text align={"left"} as="p" size="5">Mass: {mass}
						</Text>
					</Inset>
				</Card>
			</Container>
		</Box>
	);
});
export default LocalInset;
