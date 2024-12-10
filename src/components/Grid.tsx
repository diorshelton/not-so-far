import React from "react";
import "../component-styles/gridStyles.css"

// type CelestialBodies = {
//   id: string;
//   englishName: string;
//   mass: object;
//   vol: object;
//   density: object;
//   bodyType: string;
// }[]
interface GridProps {
  children: React.ReactNode;
}

const Grid = ({children}: GridProps) => { 
  return (
    <div className="grid">
      {children}
		</div>
	);
};

export default Grid;
