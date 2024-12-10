// import { useState } from 'react'
import "./globals.css";
import LocalInset from "./components/LocalInset";
import LocalSelect from "./components/LocalSelect";
import Grid from "./components/Grid";
import Banner from "./components/Banner";

function App() {
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
