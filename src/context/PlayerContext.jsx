import { createContext, useEffect, useState } from 'react';

export const PlayerContext = createContext();

function PlayerProvider({ children }) {
	const [playStatus, setPlayStatus] = useState(false);

	useEffect(() => {
		async function fetchSong() {}
		//implement song context with player
	}, []);

	return (
		<PlayerContext.Provider value={{ playStatus, setPlayStatus }}>
			{children}
		</PlayerContext.Provider>
	);
}

export default PlayerProvider;
