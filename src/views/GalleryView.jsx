import { useEffect, useState } from 'react';
import LazyImage from '../components/util/LazyImage';

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
					<LazyImage
						className='aspect-video'
						src={link}
						alt={`Imagen de galería ${i + 1}`}
					/>

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
