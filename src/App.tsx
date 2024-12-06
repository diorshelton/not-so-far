// import { useState } from 'react'
import "./globals.css";
import LocalInset from "./components/LocalInset";
import LocalSelect from "./components/LocalSelect";

function App() {
	return (
    <>
      <LocalSelect></LocalSelect>
			<LocalInset cbEnglishName="Mars" cbType="Planet" vol={23}density={234} mass={3243}></LocalInset>
		</>
	);
}

export default App;
