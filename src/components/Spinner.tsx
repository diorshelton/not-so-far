const Spinner = () => {
  return(
	<div style={{ color: "#ffdc3e", display:"grid", placeItems:"center", height:"100vh", alignItems:"center"}}>
		<svg
			width="124"
			height="124"
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<filter id="spinner-gF01">
					<feGaussianBlur in="SourceGraphic" stdDeviation="1" result="y" />
					<feColorMatrix
						in="y"
						mode="matrix"
						values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"
						result="z"
					/>
					<feBlend in="SourceGraphic" in2="z" />
				</filter>
			</defs>

			<g filter="url(#spinner-gF01)">
				<circle cx="5" cy="12" r="4" fill="currentColor">
					<animate
						attributeName="cx"
						calcMode="spline"
						dur="2s"
						values="5;8;5"
						keySplines=".36,.62,.43,.99;.79,0,.58,.57"
						repeatCount="indefinite"
					/>
				</circle>
				<circle cx="19" cy="12" r="4" fill="currentColor">
					<animate
						attributeName="cx"
						calcMode="spline"
						dur="2s"
						values="19;16;19"
						keySplines=".36,.62,.43,.99;.79,0,.58,.57"
						repeatCount="indefinite"
					/>
				</circle>
				<animateTransform
					attributeName="transform"
					type="rotate"
					dur="0.75s"
					values="0 12 12;360 12 12"
					repeatCount="indefinite"
				/>
			</g>
		</svg>
	</div>)
};

export default Spinner;
