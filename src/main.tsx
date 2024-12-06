import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Theme } from '@radix-ui/themes'

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Theme accentColor="blue" grayColor="sand" radius="medium" scaling="100%">
			<App />
		</Theme>
	</StrictMode>
);
