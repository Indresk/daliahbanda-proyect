import Button from '../components/buttons/GeneralButton';
import { NavLink, Outlet } from 'react-router';
export default function GalleryView() {
	const filters = [
		{ name: 'todos', link: '/gallery' },
		{ name: 'Silvia', link: '/gallery/silvia' },
		{ name: 'Mike', link: '/gallery/mike' },
		{ name: 'Rafa', link: '/gallery/rafa' },
		{ name: 'Aya', link: '/gallery/aya' },
		{ name: 'Chris', link: '/gallery/chris' },
		{ name: 'Nico', link: '/gallery/nico' },
	];

	// Pendiente ajustar dropdown en mobile
	return (
		<>
			<section className='p-8 md:p-14'>
				<h1 className='text-4xl md:text-6xl lg:text-8xl uppercase '>
					Eventos <br /> <strong>En vivo</strong>
				</h1>
			</section>
			<section className='searcher flex gap-4 px-8 md:p-14 items-center'>
				<div>Filtros:</div>

				{filters.map((filter) => (
					<NavLink key={filter.name} to={filter.link}>
						{({ isActive }) => (
							<Button variant={isActive ? 'primary' : 'secondary'} className=''>
								{filter.name}
							</Button>
						)}
					</NavLink>
				))}
			</section>
			<>
				<Outlet />
			</>
		</>
	);
}
