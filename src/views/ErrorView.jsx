import { Link } from 'react-router';
import App from '../App';

export default function ErrorView() {
	return (
		<App>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<h1>
					404 - Pagina no encontrada...{' '}
					<Link to={'/'} className='text-pink-500 underline'>
						Click para volver.
					</Link>
				</h1>
			</div>
		</App>
	);
}
