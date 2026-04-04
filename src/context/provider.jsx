import { StrictMode } from 'react';
import AuthProvider from './AuthContext';
import LiveProvider from './LiveContext';
import PlayerProvider from './PlayerContext';
export default function Provider({ children }) {
	return (
		<StrictMode>
			<AuthProvider>
				<PlayerProvider>
					<LiveProvider>{children}</LiveProvider>
				</PlayerProvider>
			</AuthProvider>
		</StrictMode>
	);
}
