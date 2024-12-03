import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Theme } from '@radix-ui/themes'

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Theme accentColor="gold" grayColor="sand" radius="large" scaling="100%">
			<App />
		</Theme>
	</StrictMode>
);
