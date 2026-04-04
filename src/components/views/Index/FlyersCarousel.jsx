import LazyImage from '../../util/LazyImage';
import './carousel.css';

const flyers = [
	{
		link: 'https://assets.daliahbanda.com/images/flyers/cine-y-tv-2-v1.jpg',
		alt: 'Daliah Banda en el flyer del evento Cine y TV 2',
	},
	{
		link: 'https://assets.daliahbanda.com/images/flyers/cine-y-tv-3-v1.jpeg',
		alt: 'Daliah Banda en el flyer del evento Cine y TV 3',
	},
	{
		link: 'https://assets.daliahbanda.com/images/flyers/cine-y-tv-v1.jpg',
		alt: 'Daliah Banda en el flyer del evento Cine y TV',
	},
	{
		link: 'https://assets.daliahbanda.com/images/flyers/dx-festival2-v1.jpg',
		alt: 'Daliah Banda en el flyer del evento DX Festival 2',
	},
	{
		link: 'https://assets.daliahbanda.com/images/flyers/espectros-sonoros-v1.jpg',
		alt: 'Daliah Banda en el flyer del evento Espectros Sonoros',
	},
	{
		link: 'https://assets.daliahbanda.com/images/flyers/grange-1-v1.webp',
		alt: 'Daliah Banda en el flyer del evento Grange 1',
	},
	{
		link: 'https://assets.daliahbanda.com/images/flyers/grange-2-v1.webp',
		alt: 'Daliah Banda en el flyer del evento Grange 2',
	},
	{
		link: 'https://assets.daliahbanda.com/images/flyers/jersey-1-v1.webp',
		alt: 'Daliah Banda en el flyer del evento Jersey 1',
	},
	{
		link: 'https://assets.daliahbanda.com/images/flyers/kaiju-v1.jpg',
		alt: 'Daliah Banda en el flyer del evento Kaiju',
	},
	{
		link: 'https://assets.daliahbanda.com/images/flyers/nostalgia-fest-v1.jpg',
		alt: 'Daliah Banda en el flyer del evento Nostalgia Fest',
	},
	{
		link: 'https://assets.daliahbanda.com/images/flyers/rock-and-blend-1-v1.jpg',
		alt: 'Daliah Banda en el flyer del evento Rock and Blend 1',
	},
	{
		link: 'https://assets.daliahbanda.com/images/flyers/rock-and-blend-2-v1.webp',
		alt: 'Daliah Banda en el flyer del evento Rock and Blend 2 v1',
	},
	{
		link: 'https://assets.daliahbanda.com/images/flyers/rock-and-blend-2-v2.jpg',
		alt: 'Daliah Banda en el flyer del evento Rock and Blend 2 v2',
	},
	{
		link: 'https://assets.daliahbanda.com/images/flyers/rock-and-blend-3-v1.jpg',
		alt: 'Daliah Banda en el flyer del evento Rock and Blend 3 v1',
	},
	{
		link: 'https://assets.daliahbanda.com/images/flyers/rock-and-blend-3-v2.webp',
		alt: 'Daliah Banda en el flyer del evento Rock and Blend 3 v2',
	},
	{
		link: 'https://assets.daliahbanda.com/images/flyers/tariama-a-la-sala-v1.jpg',
		alt: 'Daliah Banda en el flyer del evento Tariama a la Sala',
	},
	{
		link: 'https://assets.daliahbanda.com/images/flyers/tus-raices-v1.jpg',
		alt: 'Daliah Banda en el flyer del evento Tus Raíces',
	},
];

export default function FlyersCarousel() {
	return (
		<section className='flex flex-col px-8 pb-14 md:px-14 gap-8'>
			<h2 className='tracking-tighter font-headline uppercase font-bold text-5xl'>
				Trayectoria y <span className='text-primary-light'>presentaciones</span>
			</h2>
			<div className='overflow-x-scroll no-scrollbar w-full shrink-1'>
				<div className='flex gap-4 w-[400%] animation'>
					<div className='flex gap-4 '>
						{flyers.map((event) => (
							<picture className='w-full'>
								<LazyImage
									className='aspect-square'
									src={event.link}
									alt={event.alt}
								/>
							</picture>
						))}
					</div>
					<div aria-hidden className='flex gap-4 '>
						{flyers.map((event) => (
							<picture className='w-full'>
								<LazyImage
									className='aspect-square'
									src={event.link}
									alt={event.alt}
								/>
							</picture>
						))}
					</div>
				</div>
			</div>
			<p>
				Como Daliah hemos participado diversos espacios de la escena rock
				bogotana como The Music Hall, The Grange Bar Records, La Chorizería,
				Jersey Bar y Jackass Rock Bar.
			</p>
			<p>
				También hemos sido parte de eventos culturales y educativos, incluyendo
				presentaciones en la Universidad Nacional de Colombia y en la
				Universidad San Buenaventura.
			</p>
		</section>
	);
}
