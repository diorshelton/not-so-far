// import { useState } from 'react'
import "./globals.css";
import "./cardStyles.css";
import LocalInset from "./components/LocalInset";

function App() {
	return (
		<>
			<LocalInset cbEnglishName="Mars" cbType="Planet" vol={23}density={234} mass={3243}></LocalInset>
		</>
	);
}

export default App;
