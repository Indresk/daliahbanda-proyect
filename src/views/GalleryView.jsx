import { useEffect, useState } from 'react';
import LazyImage from '../components/util/LazyImage';
import Button from '../components/buttons/GeneralButton';
import { NavLink, Outlet } from 'react-router';
export default function GalleryView() {
	const [images, setImages] = useState([]);

	async function handleShare(link) {
		await navigator.clipboard.writeText(link);
	}

	useEffect(() => {
		async function getImages() {
			try {
				const response = await fetch('/assets/temporal-assets-file.json');
				const data = await response.json();
				setImages(data);
			} catch (error) {
				console.error(error);
			}
		}

		getImages();
	}, []);
	const filters = [
		{ name: 'todos', link: '/gallery' },
		{ name: 'Silvia', link: '/gallery/silvia' },
		{ name: 'Mike', link: '/gallery/mike' },
		{ name: 'Rafa', link: '/gallery/rafa' },
		{ name: 'Jesus', link: '/gallery/jesus' },
		{ name: 'Chris', link: '/gallery/chris' },
		{ name: 'Nico', link: '/gallery/nico' },
	];
	return (
		<>
			{/* <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
			<div className='grid gap-4'>
			{images.map((link, i) => (
				<div key={i} >
					<LazyImage
						className='h-auto max-w-full rounded-base'
						src={link}
						alt={`Imagen de galería ${i + 1}`}
					/>

					 <span
						onClick={() => handleShare(link)}
						className='material-symbols-outlined mt-2 inline-block cursor-pointer transition-transform hover:scale-110 h-[24px]'>
						share
					</span> *
				</div>
			))}
			</div>
		</div> */}
			<section className='px-8 md:p-14 min-h-[440px]'>
				<h1 className='text-8xl uppercase '>
					Eventos <br /> <strong>En vivo</strong>
				</h1>
			</section>
			<section className='searcher flex gap-4 px-8 md:p-14 items-center'>
				<div>Filtros:</div>

				{filters.map((filter) => (
					<NavLink key={filter.name} to={filter.link}>
						{({ isActive }) =>
							isActive ? (
								<Button variant='primary' className=''>
									{filter.name}
								</Button>
							) : (
								<Button variant='secondary' className=''>
									{filter.name}
								</Button>
							)
						}
					</NavLink>
				))}
			</section>
			<>
				<Outlet />
			</>
		</>
	);
}
