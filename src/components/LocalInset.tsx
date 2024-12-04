import { Box, Card, Container, Heading, Inset, Text } from "@radix-ui/themes";
import React from "react";
import planet from "../assets/planet.svg";

interface LocalInsetProps {
  /** Title of celestial body */
  cbTitle: string;
  /** celestial body type */
  cbType: "Comet" | "Planet" | "Asteroid" | "Dwarf Planet"
  /** celestial body vol */
  vol?: number;
  /** celestial body density */
  density?: number;
  /** celestial body mass */
  mass?: number;
}
const LocalInset = React.forwardRef(({cbTitle, cbType}: LocalInsetProps) => {
	return (
		<Box className="inset-card" minHeight="2rem" maxWidth={"22rem"}>
			<Container size={"4"}>
				<Card size={"4"} >
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
          <Inset>
            <Heading className="inset-heading" align={"center"}>{cbTitle}</Heading>
            <Text align={"center"} as="p" size="5">{cbType}
						</Text>
					</Inset>
				</Card>
			</Container>
		</Box>
	);
});
export default LocalInset;
