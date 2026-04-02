import { useEffect, useRef, useState } from 'react';

function LazyImage({ src, alt }) {
	const containerRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const element = containerRef.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(element);
				}
			},
			{
				rootMargin: '200px', // comienza un poco antes de entrar a pantalla
				threshold: 0.1,
			},
		);

		observer.observe(element);

		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={containerRef}
			className='aspect-square w-full overflow-hidden rounded bg-gray-100'>
			{!isVisible ? (
				<div className='h-full w-full animate-pulse bg-gray-200' />
			) : (
				<img
					src={src}
					alt={alt}
					loading='lazy'
					decoding='async'
					onLoad={() => setIsLoaded(true)}
					className={`h-full w-full object-cover transition-opacity duration-300 ${
						isLoaded ? 'opacity-100' : 'opacity-0'
					}`}
				/>
			)}
		</div>
	);
}

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

	return (
		<div className='columns-1 sm:columns-2 md:columns-3 gap-4'>
			{images.map((link, i) => (
				<div key={i} className='mb-4 break-inside-avoid'>
					<LazyImage src={link} alt={`Imagen de galería ${i + 1}`} />

					<span
						onClick={() => handleShare(link)}
						className='material-symbols-outlined mt-2 inline-block cursor-pointer transition-transform hover:scale-110 h-[24px]'>
						share
					</span>
				</div>
			))}
		</div>
	);
}
