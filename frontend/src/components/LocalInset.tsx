import { Box, Card, Container, Heading, Inset, Text } from "@radix-ui/themes";
import asteroid from "../assets/asteroid.svg";
import comet from "../assets/comet.svg";
import dwarfplanet from "../assets/dwarfplanet.svg";
import moon from "../assets/moon.svg";
import planet from "../assets/planet.svg";
import star from "../assets/star.svg";
import "../component-styles/localInsetStyles.css";

interface SVGSource {
  [key: string]: string;
}

interface LocalInsetProps {
  /** ID of celestial body */
  id: string;
  /** Title of celestial body */
  englishName: string;
  /** celestial body type */
  bodyType: "Comet" | "Planet" | "Asteroid" | "Dwarf Planet" | "Moon" | "Star";
  /** celestial body volume */
  volume?: number | null;
  /** celestial body density */
  density?: number | null;
  /** celestial body mass */
  mass?: number | null;
  /** mass exponent */
}
const LocalInset = ({
  englishName,
  bodyType,
  volume,
  density,
  mass,
}: LocalInsetProps) => {
  const setSVGAlt = (altText: string) => {
    return `drawing of ${altText}`;
  };

  const setSVGSource = (bodyType: string) => {
    setSVGAlt(bodyType);

    const svgTypes: SVGSource = {
      Asteroid: asteroid,
      Moon: moon,
      Comet: comet,
      Star: star,
      "Dwarf Planet": dwarfplanet,
      Planet: planet,
    };
    return svgTypes[bodyType];
  };

  return (
    <Box className="inset">
      <Container className="container" size={"4"}>
        <Card size={"4"} className="inset-card">
          <img
            className="cb-svg"
            src={setSVGSource(bodyType)}
            alt={setSVGAlt(bodyType)}
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
              Volume:{volume}x10 km<sup>3</sup>
            </Text>
            <Text className="inset-text" as="p" size="5">
              Density: {density} g/cm <sup>3</sup>
            </Text>
            <Text className="inset-text" as="p" size="5">
              Mass: {mass} x 10 kg
            </Text>
          </Inset>
        </Card>
      </Container>
    </Box>
  );
};
export default LocalInset;
