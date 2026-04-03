import { Link } from 'react-router';
import Button from '../../buttons/GeneralButton';

const song = {
	name: 'Intento Sobrevivir',
	description:
		'Una canción que retrata el conflicto interno de quien no logra expresar sus emociones. Letras honestas y una atmósfera intensa acompañan una narrativa profundamente humana.',
	cover:
		'https://assets.daliahbanda.com/images/covers/intento-sobrevivir-v2.jpg',
};

export default function RecommendedSong() {
	return (
		<section className='play-music-container bg-darkgray'>
			<Link to='/albums'>
				<Button fullWidth size='lg' rigthArrow>
					<h2>Nuestra música</h2>
				</Button>
			</Link>
			<div className='song-info-container grid grid-cols-2 gap-7'>
				<div className='title-container place-content-center pt-13 pb-13 pl-13 '>
					<div className='description-section flex '>
						<img
							className='play-icon size-13 self-center mr-7'
							src='https://www.freeiconspng.com/uploads/play-button-icon-png-15.png'
							alt=''
						/>
						<div>
							<h3 className='song-title text-[2.6rem] '>{song.name}</h3>
							<p className='song-description'> {song.description}</p>
						</div>
					</div>
					<div className='streaming-platforms grid grid-cols-4 mt-7 '>
						<span>Spotify</span>
						<span>Apple Music</span>
						<span>Youtube Music</span>
						<span>Amazon Music</span>
					</div>
					<hr className='text-[#717171]' />
				</div>
				<div className='song-image-container'>
					<img
						src={song.cover}
						className='w-full pt-13 pb-13 pr-13'
						alt={song.name + ' Oficial Banner'}
					/>
				</div>
			</div>
		</section>
	);
}
