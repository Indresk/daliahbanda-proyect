import { useEffect, useRef, useState } from 'react';

export default function LazyImage({ src, alt, className }) {
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
				rootMargin: '200px',
				threshold: 0.1,
			},
		);

		observer.observe(element);

		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={containerRef}
			className={'w-full overflow-hidden rounded bg-gray-100 ' + className}>
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
