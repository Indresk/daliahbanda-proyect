import { Link } from 'react-router';
import LiveCard from '../components/views/Index/LiveCard';
import Button from '../components/buttons/GeneralButton';
import Integrantes from '../components/views/Index/Integrantes';
import RecommendedSong from '../components/views/Index/RecommendedSong';

export default function Index() {
	//
	return (
		<>
			<section id='hero' className='overflow-hidden'>
				<div className='grid'>
					<div className='[grid-area:1/1] z-1 flex items-end p-4 md:p-6 lg:p-10 bg-linear-to-tr from-black/80 via-black/20 to-transparent'>
						<div className='grid'>
							<img
								className='invert w-40 md:w-60 h-auto [grid-area:1/1]'
								src='https://assets.daliahbanda.com/brand/logos/full/logo-daliah-vector-black-v1.webp'
								alt='Daliah Banda tocando en vivo en escenario de rock alternativo en Bogotá'
							/>
							<div className='[grid-area:1/1]'>
								<h1 className='text-white uppercase text-[8px] md:text-[11px] pl-[90px] md:pl-[135px] pt-[57px] md:pt-[86px]'>
									Daliah Banda - Metalcore y Pop Emo Punk desde Bogotá
								</h1>
							</div>
						</div>
					</div>

					<picture className='[grid-area:1/1]'>
						<source
							media='(min-width: 768px)'
							srcSet='https://assets.daliahbanda.com/images/hero/hero-home-lg-2700-1080-v1.webp'
						/>
						<img
							src='https://assets.daliahbanda.com/images/hero/hero-home-sm-1280-960-v2.webp'
							alt='Banda Daliah posando en vivo, metalcore y pop emo punk desde Bogotá'
						/>
					</picture>
				</div>
			</section>
			<div className='flex flex-row'>
				<picture className='flex items-end basis-[40%] md:basis-[20%] pl-8 pt-14 md:pl-14'>
					<img
						className='block h-full w-auto max-w-full object-contain'
						src='https://assets.daliahbanda.com/images/promo/promo-setlist-2025-v1.jpeg'
						alt='Set list de Daliah Banda tocando en vivo en escenario de rock alternativo en Bogotá'
					/>
				</picture>
				<section className='p-8 pt-14 pb-0 md:p-14 md:pb-0 flex-1 flex flex-col gap-6 justify-center basis-[30%]'>
					<h2 className='tracking-tighter font-headline uppercase font-bold text-5xl'>
						¿Quiénes somos?
					</h2>
					<p>
						Somos una agrupación musical colombiana con más de cinco años de
						trayectoria en la escena alternativa. Nuestra propuesta nace del
						punk rock y el pop punk clásico, integrando la complejidad del metal
						progresivo para crear un sonido energético y contemporáneo.
					</p>
					<p>
						En nuestras letras abordamos temáticas emocionales, sociales y
						políticas, invitando a la reflexión personal y colectiva.
					</p>
				</section>

				<LiveCard
					className='hidden md:flex md:basis-[45%]'
					aria-labelledby='live-card'
				/>
			</div>

			<div className='relative'>
				<section className='flex justify-end pt-15 md:pt-20 lg:pt-30 xl:pt-50 pb-14 px-8 md:pr-34'>
					<div className='md:basis-[50%] flex flex-col gap-4'>
						<h2 className='tracking-tighter font-headline uppercase font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
							¿Quieres vernos en el escenario?
						</h2>
						<Link to='/gallery'>
							<Button variant='textLink' size='noPadding' rigthArrow>
								Visita nuestra galeria de fotos
							</Button>
						</Link>
					</div>
				</section>
				<div className='w-full absolute bottom-[0px] left-[0px] z-[-2] aspect-4/3 md:aspect-5/2'>
					<img
						className='w-full absolute bottom-[0px] left-[0px] z-[-2] aspect-4/3 md:aspect-5/2'
						src='https://assets.daliahbanda.com/images/live/unal/show-randb2/unal-show2-34-v1.jpg'
						alt='Guitarrista ritmico tocando en vivo su guitarra estilo stratocaster roja.'
					/>
					<div className='absolute inset-0 z-[-1] bg-gradient-to-b from-black via-black/60 to-transparent' />
				</div>
			</div>
			{/* Tarjeta de live - se movio completamente de lugar solo para mobile */}
			<LiveCard className='md:hidden' aria-hidden='true' />

			<div className=''>
				<section className='flex flex-col md:flex-row px-8 py-14 gap-8 md:p-14 md:gap-14'>
					<div className='flex flex-col gap-4 md:gap-14 text-base md:text-lg basis-[50%] self-center'>
						<div>
							<h2 className='tracking-tighter font-headline uppercase font-bold text-5xl'>
								Estilo musical e{' '}
								<span className='text-primary-light'>influencias</span>
							</h2>
							<h3 className='tracking-tighter font-headline uppercase text-sm text-lightgray'>
								Metalcore, Pop Emo Punk y Rock Alternativo
							</h3>
						</div>
						<p>
							Nuestro sonido como Daliah se mueve entre el metalcore moderno, el
							pop emo punk y el rock alternativo, con influencias del punk rock
							de los 90 y 2000 y el metal progresivo de décadas posteriores.
						</p>
						<p>
							De ahí que nuestras canciones sean tan melódicas, intensas y
							cargadas de energía, con estructuras dinámicas y una fuerte
							identidad emocional.
						</p>
					</div>
					<div className='grid basis-[50%] grid-cols-[1fr_1fr] grid-rows-6 gap-x-14 md:gap-x-14 lg:gap-x-20 gap-y-6 lg:px-14'>
						<picture className='col-start-1 row-start-2 row-span-2'>
							<img
								className='h-full w-full object-cover aspect-square'
								src='https://assets.daliahbanda.com/images/backstage/backstage-usb2-v1.jpg'
								alt='Daliah Banda posando en los camerinos de la Universidad San Buenaventura en Bogotá.'
							/>
						</picture>
						<picture className='col-start-1 row-start-5 row-span-2'>
							<img
								className='h-full w-full object-cover aspect-square'
								src='https://assets.daliahbanda.com/images/backstage/recording-silvia-1-v1.webp'
								alt='Silvia, cantante de Daliah Banda durante la sesión de grabación de voces.'
							/>
						</picture>
						<picture className='col-start-2 row-start-1 row-span-2'>
							<img
								className='h-full w-full object-cover aspect-square'
								src='https://assets.daliahbanda.com/images/live/cambridge/cambridge-p2p-v1.jpg'
								alt='Silvia y Mike de Daliah Banda durante presentación en vivo en el colegio Cambridge en bogotá.'
							/>
						</picture>
						<picture className='col-start-2 row-start-4 row-span-2'>
							<img
								className='h-full w-full object-cover aspect-square'
								src='https://assets.daliahbanda.com/images/live/kaiju/kaiju-show-v1.jpeg'
								alt='Daliah Banda durante presentación en vivo en el bar Kaiju en Bogotá.'
							/>
						</picture>
					</div>
				</section>

				<section className='relative'>
					<div className='bg-[#d8d8d8] p-4 px-14 md:p-14 md:p-18 -rotate-12 flex justify-around items-center scale-120 z-[-1] w-full absolute top-0 left-[0%]'>
						<div>
							<h2 className='tracking-tighter font-headline uppercase font-bold text-2xl md:text-5xl text-black'>
								<span className='text-primary'>Integrantes</span> de la banda
							</h2>
							<h3 className='tracking-tighter font-headline uppercase text-sm text-lightgray'>
								Formación actual
							</h3>
						</div>
						<picture className='basis-30 rotate-12'>
							<img
								src='https://assets.daliahbanda.com/brand/logos/icon/logo-d-daliah-vector-v1.svg'
								alt='Logo de Daliah Banda sobre fondo blanco.'
							/>
						</picture>
					</div>
					<div className='py-15 md:py-23'></div>
					<Integrantes />
				</section>
			</div>
			<section className='px-8 pb-14 md:px-14'>
				<RecommendedSong />
			</section>

			<section className=''>
				<h2 className='text-4xl'>Nuestra música</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
					<article>
						<h3>Single: El amor se acabó</h3>
						<small>El amor se acabó (2022)</small>
						<p>
							Primer sencillo de la banda, una canción que explora el rechazo
							amoroso desde un monólogo introspectivo. El tema combina
							sensibilidad emocional con una instrumentación potente y
							contemporánea.
						</p>
						<picture>
							<img
								className='invert'
								src='https://assets.daliahbanda.com/brand/logos/full/logo-daliah-vector-black-v1.webp'
								alt='Portada del sencillo El amor se acabó de Daliah Banda'
							/>
						</picture>
					</article>
					<article>
						<h3>Single: Intento sobrevivir</h3>
						<small>Intento sobrevivir (2023)</small>
						<p>
							Una canción que retrata el conflicto interno de quien no logra
							expresar sus emociones. Letras honestas y una atmósfera intensa
							acompañan una narrativa profundamente humana.
						</p>
						<picture>
							<img
								className='invert'
								src='https://assets.daliahbanda.com/brand/logos/full/logo-daliah-vector-black-v1.webp'
								alt='Portada ilustrada del sencillo Intento sobrevivir de Daliah Banda'
							/>
						</picture>
					</article>
					<article>
						<h3>Single: Si podré</h3>
						<small>Si podré (2024)</small>
						<p>
							Canción dedicada a quienes dudan de sí mismos y sienten presión
							por encajar en moldes sociales. Su mensaje directo y el trabajo
							instrumental han tenido una recepción destacada entre el público.
						</p>
						<picture>
							<img
								className='invert'
								src='https://assets.daliahbanda.com/brand/logos/full/logo-daliah-vector-black-v1.webp'
								alt='Portada del sencillo Si podré de Daliah Banda, mensaje de autoafirmación'
							/>
						</picture>
					</article>
					<article>
						<h3>Single: Rebelión</h3>
						<small>Rebelión (2025)</small>
						<p>
							Una canción que expresa indignación frente a las nuevas dictaduras
							en América Latina y la apatía social. Actualmente en proceso de
							publicación.
						</p>
						<picture>
							<img
								className='invert'
								src='https://assets.daliahbanda.com/brand/logos/full/logo-daliah-vector-black-v1.webp'
								alt='Imagen conceptual de protesta y rebeldía asociada al próximo sencillo Rebelión de Daliah'
							/>
						</picture>
					</article>
					<article>
						<h3>Album: Daliah</h3>
						<small>Daliah (Próximamente)</small>
						<p>Album recopilatorio de los singles con extras.</p>
						<picture>
							<img
								className='invert'
								src='https://assets.daliahbanda.com/brand/logos/full/logo-daliah-vector-black-v1.webp'
								alt='Imagen conceptual del album Daliah de Daliah'
							/>
						</picture>
					</article>
				</div>
			</section>

			<div className='border-t border-gray-200 py-20 sm:py-32'>
				<div className=''>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						<section>
							<h2>Trayectoria y presentaciones</h2>
							<p>
								Desde su formación, Daliah ha participado en la escena rock
								bogotana en espacios como The Music Hall, The Grange Bar
								Records, La Chorizería, Jersey Bar y Jackass Rock Bar.
							</p>
							<p>
								También ha sido parte de eventos culturales y educativos,
								incluyendo presentaciones en la Universidad Nacional de
								Colombia, donde resultaron ganadores del reality “Batalla de
								Bandas FACARTES - Rock n Blend”.
							</p>
							<picture>
								<img
									className='invert'
									src='https://assets.daliahbanda.com/brand/logos/full/logo-daliah-vector-black-v1.webp'
									alt='Daliah Banda en concierto durante evento cultural universitario en Bogotá'
								/>
							</picture>
						</section>
						<section>
							<h2>Contacto y redes oficiales</h2>
							<p>Para contrataciones, prensa o colaboraciones:</p>
							<ul>
								<li>
									Correo:{' '}
									<a href='mailto:daliahbanda@gmail.com'>
										daliahbanda@gmail.com
									</a>
								</li>
								<li>Instagram: @daliah_banda</li>
								<li>Facebook: Daliah Banda</li>
							</ul>
							<picture className='inline-block w-[300px]'>
								<img
									className='invert'
									src='https://assets.daliahbanda.com/brand/logos/icon/logo-d-daliah-vector-v1.svg'
									alt='Logos de Instagram y Facebook de Daliah Banda'
								/>
							</picture>
						</section>
					</div>
				</div>
			</div>
		</>
	);
}
