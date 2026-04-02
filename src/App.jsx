import Footer from './components/global/Footer/Footer';
import Header from './components/global/Header/Header';
import DaliahClicker from './components/global/DaliahClicker/DaliahClicker';
import Provider from './context/provider';
import { Outlet } from 'react-router-dom';

function App({ children }) {
	return (
		<>
			<Provider>
				<div className='grid grid-rows-[auto_1fr_auto] min-h-screen'>
					<Header />
					<main>
						<Outlet />
						{children}
					</main>
					<Footer />
				</div>
				<DaliahClicker />
			</Provider>
		</>
	);
}

export default App;
