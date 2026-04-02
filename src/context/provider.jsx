import { StrictMode } from 'react';
import AuthProvider from './AuthContext';
import LiveProvider from './LiveContext';
export default function Provider({ children }) {
	return (
		<StrictMode>
			<AuthProvider>
				<LiveProvider>{children}</LiveProvider>
			</AuthProvider>
		</StrictMode>
	);
}
