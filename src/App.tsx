// import { useState } from 'react'
import "./globals.css";
import LocalInset from "./components/LocalInset";
import LocalSelect from "./components/LocalSelect";
import Grid from "./components/Grid";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";

function App() {

		const [celestialBodies, setCelestialBodies] = useState([]);

		useEffect(() => {
			fetch("https://api.le-systeme-solaire.net/rest/bodies/")
        .then(response => 
					response.json())
        .then(data => { console.log(data) })
				.catch((error) => {
					console.log(error);
				});
		}, []);

	return (
    <>
      <Banner/>
        <LocalSelect></LocalSelect>
      <Grid>
				<LocalInset
					cbEnglishName="Mars"
					cbType="Planet"
					vol={23}
					density={234}
					mass={3243}
				></LocalInset>
				<LocalInset
					cbEnglishName="Mars"
					cbType="Planet"
					vol={23}
					density={234}
					mass={3243}
				></LocalInset>
				<LocalInset
					cbEnglishName="Mars"
					cbType="Planet"
					vol={23}
					density={234}
					mass={3243}
				></LocalInset>
				<LocalInset
					cbEnglishName="Mars"
					cbType="Planet"
					vol={23}
					density={234}
					mass={3243}
				></LocalInset>
      </Grid>
		</>
	);
}

export default App;
