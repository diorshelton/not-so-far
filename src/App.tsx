import "./globals.css";
import LocalInset from "./components/LocalInset";
import LocalSelect from "./components/LocalSelect";
import Grid from "./components/Grid";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";

/** celestial body vol */
interface Volume {
	/** base vol value */
	volValue: number;
	/**exponent value */
	volExponent: number;
}
/** celestial body Mass */
interface Mass {
	/** base value */
	massValue: number;
	/**exponent value */
	massExponent: number;
}

type attributes = {
	/** ID of celestial body */
	id: string;
	/** English name*/
	englishName: string;
	/** celestial body type */
	bodyType: "Comet" | "Planet" | "Asteroid" | "Dwarf Planet" | "Moon"| "Star";
	/** celestial body volume */
	vol?: Volume;
	/** celestial body density */
	density?: number;
	/** celestial body mass */
	mass?: Mass;
}[];

function App() {
	const [celestialBodies, setCelestialBodies] = useState<attributes>([]);

	useEffect(() => {
		fetch("https://api.le-systeme-solaire.net/rest/bodies/")
			.then((response) => response.json())
			.then((data) => {
				setCelestialBodies(data.bodies);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
			<Banner />
			<LocalSelect />
			<Grid>
				{celestialBodies.map((body) => {
					console.log(body);
					return (
						<LocalInset
							key={body.id}
							id={body.id}
							englishName={body.englishName}
							bodyType={body.bodyType}
							volValue={body.vol?.volValue}
							volExponent={body.vol?.volExponent}
							massValue={body.mass?.massValue}
							massExponent={body.mass?.massExponent}
              density={body.density}
						/>
					);
				})}
			</Grid>
		</>
	);
}

export default App;
