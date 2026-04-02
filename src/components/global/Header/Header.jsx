import { NavLink, useLocation } from 'react-router-dom';
import { useContext, useState, useEffect, useRef } from 'react';

import LiveBanner from './LiveBanner';
import { LiveContext } from '../../../context/LiveContext.jsx';
import Button from '../../buttons/GeneralButton.jsx';
import { useBlockScroll } from '../../../hooks/useBlockScroll.js';
import './header.css';

export default function Header() {
	const { liveStatus } = useContext(LiveContext);
	const [dropdown, setDropdown] = useState(false);
	const panelRef = useRef(null);
	const backgroundPanelRef = useRef(null);
	const location = useLocation();

	const navigationLinks = [
		{ title: 'Discografía', link: '/albums' },
		{ title: 'Galería', link: '/gallery' },
		{ title: 'Tienda', link: '/shop' },
	];

	useBlockScroll(dropdown);

	useEffect(() => {
		dropdown && manageDropdown();
	}, [location]);

	function manageDropdown() {
		if (dropdown) {
			const panel = panelRef.current;
			requestAnimationFrame(() => {
				backgroundPanelRef.current.style.opacity = '0';
				panel.style.maxHeight = '0px';
			});
			setTimeout(() => {
				setDropdown(false);
			}, 300);
		} else {
			setDropdown(true);
			setTimeout(() => {
				const panel = panelRef.current;
				backgroundPanelRef.current.style.opacity = '1';
				requestAnimationFrame(() => {
					panel.style.maxHeight = panel.scrollHeight + 'px';
				});
			}, 100);
		}
	}

	return (
		<header className='main-header dark:bg-black bg-white z-30'>
			{liveStatus && <LiveBanner />}
			<section className='px-4 sm:px-6 lg:px-10 relative py-6'>
				<nav className='flex gap-4 justify-between items-center relative'>
					<div className='basis-40'>
						<NavLink to='/' className='flex items-end w-10'>
							<img
								className='black-icon'
								src='https://assets.daliahbanda.com/brand/logos/icon/logo-d-daliah-vector-v1.svg'
								alt='Logo de Daliah Banda'
							/>
							<span className='flex flex-col text-base/3 tracking-tighter font-headline'>
								'aliah<small className='text-[10px] text-end'>banda</small>
							</span>
						</NavLink>
					</div>

					{/* LARGE */}
					<ul className='gap-4 hidden md:flex items-center'>
						{navigationLinks.map((item) => (
							<li key={item.link}>
								<NavLink
									to={item.link}
									className={({ isActive }) =>
										`tracking-tighter font-headline transition-colors duration-300 hover:text-primary-light ${isActive ? ' text-pink-500 border-b-2' : ''}`
									}>
									{item.title}
								</NavLink>
							</li>
						))}
					</ul>
					<div className='flex gap-4 items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							onClick={() => manageDropdown()}
							className={`cursor-pointer md:hidden transition duration-300 ease-in-out${dropdown ? ' rotate-180' : ''}`}
							width='50'
							height='50'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'>
							<path stroke='none' d='M0 0h24v24H0z' fill='none' />
							<path d='M4 11l8 3l8 -3' />
						</svg>
						<NavLink to='/login' className={'hidden md:flex'}>
							<Button size='sm'>Nuestra comunidad</Button>
						</NavLink>
					</div>

					{/* SMALL */}
					{dropdown && (
						<div onClick={() => manageDropdown()} className={`header-dropdown`}>
							<div
								ref={backgroundPanelRef}
								className={`backdrop-blur-sm backdrop-brightness-50 transition-opacity duration-500 ease-in-out h-full`}
								style={{ opacity: 0 }}>
								<div
									ref={panelRef}
									className={`bg-gray-300 dark:bg-darkgray w-[90vw] m-auto overflow-hidden transition-[max-height] duration-400 ease-in-out max-h-0`}>
									<ul className='gap-1 flex flex-col p-4'>
										{navigationLinks.map((item) => (
											<li key={item.link}>
												<NavLink
													to={item.link}
													className={({ isActive }) =>
														`w-full inline-block tracking-tighter font-headline transition-colors duration-300 ${isActive ? ' text-pink-500 border-b-2' : ''}`
													}>
													{item.title}
												</NavLink>
											</li>
										))}
									</ul>
									<NavLink to='/login'>
										<Button fullWidth>Nuestra comunidad</Button>
									</NavLink>
								</div>
							</div>
						</div>
					)}
				</nav>
			</section>
		</header>
	);
}
