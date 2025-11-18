import "./globals.css";
import LocalInset from "./components/LocalInset";
import LocalSelect from "./components/LocalSelect";
import Grid from "./components/Grid";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import "./component-styles/navigationStyles.css"
import Spinner from "./components/Spinner";

interface Volume {
	/** base vol value */
	volValue: number;
	/**exponent value */
	volExponent: number;
}

interface Mass {
	/** base value */
	massValue: number;
	/**exponent value */
	massExponent: number;
}

export type CelestialBody = {
	id: string;
	englishName: string;
	bodyType: "Comet" | "Planet" | "Asteroid" | "Dwarf Planet" | "Moon" | "Star";
	vol: Volume;
	density: number;
	mass: Mass;
};

type BodyList = CelestialBody[];

interface SolarSystemApiResponse {
	bodies: CelestialBody[];
}

function App() {
	const [celestialBodies, setCelestialBodies] = useState<BodyList>([]);
	const [visibleBodies, setVisibleBodies] = useState<BodyList>([]);

	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 25;

	const startIndex = (currentPage - 1) * pageSize;
	const endIndex = startIndex + pageSize;
	const currentPageItems = visibleBodies.slice(startIndex, endIndex);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch("https://nsf-serverless.vercel.app/api/nsfProxy")
			.then((response) => response.json())
			.then((data: SolarSystemApiResponse) => {
				setCelestialBodies(data.bodies);
				setVisibleBodies(data.bodies);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const filterBodyByType = (filterBy: string) => {
		if (filterBy === "All") {
			return setVisibleBodies(celestialBodies);
		}
		const selectedType = celestialBodies.filter(
			(body: CelestialBody) => body.bodyType === filterBy
		);
		setVisibleBodies(selectedType);
	};

	const selectHandler = (e: string): string => {
		setCurrentPage(1);
		let alteredString: string = "";
		const bodyString = e.split("");

		bodyString.forEach((char: string, i: number) => {
			if (i > 0 && char === "p") {
				alteredString += char.toUpperCase();
			} else if (i === 0) {
				alteredString += char.toUpperCase();
			} else {
				alteredString += char;
			}
		});

		filterBodyByType(alteredString);
		return alteredString;
	};

	return (
		<>
				{loading ? (
					<Spinner />
				) : (
					<div>
						<Banner />
						<div className="navigation">
				<LocalSelect checkBodyType={selectHandler} />
							<Pagination
							totalItems={visibleBodies.length}
							currentPage={currentPage}
							pageSize={pageSize}
							onPageChange={setCurrentPage}
						/>
						</div>
			<Grid>
							{currentPageItems.map((body: CelestialBody) => (
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
							))}
						</Grid>
					</div>
				)}
		</>
	);
}

export default App;
