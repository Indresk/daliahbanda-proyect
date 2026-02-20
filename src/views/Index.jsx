import { Link } from "react-router"

export default function Index(){

    return(
      <>
        <section id="hero">
          <h1 className='font-bold'>Daliah Banda - Metalcore y Pop Emo Punk desde Bogotá</h1>
          <picture>
            <img src="/DaliahLogoWhite.png" alt="Banda Daliah posando en sesión fotográfica promocional, metalcore y pop emo punk desde Bogotá" />
          </picture>
        </section>

        <section id="" className="m-8">
          <h2>Sonido alternativo que fusiona punk rock, pop-punk y metal progresivo con letras emocionales, sociales y políticas.</h2>
          <p>Daliah es una banda formada en Bogotá en 2018 que construye una propuesta musical intensa y reflexiva. Su sonido recuerda a los openings de la cultura geek y al emo de los 2000, combinando melodía, potencia instrumental y un mensaje directo.</p>
        </section>

        <div className="m-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <section>
            <h2>Quiénes somos</h2>
            <p>Daliah es una agrupación musical colombiana con más de cinco años de trayectoria en la escena alternativa. Su propuesta nace del punk rock y el pop-punk clásico, integrando la complejidad del metal progresivo para crear un sonido energético y contemporáneo.</p>
            <p>Las letras de Daliah abordan temáticas emocionales, sociales y políticas, invitando a la reflexión personal y colectiva sin perder fuerza ni identidad.</p>
            <picture>
              <img src="/DaliahLogoWhite.png" alt="Daliah Banda tocando en vivo en escenario de rock alternativo en Bogotá" />
            </picture>
          </section>

          <section aria-labelledby="live-card" className="live-card">
            <article>
              <header>
                <h2 id="live-card-title">Daliah Banda en vivo</h2>
                <p>Sigue nuestros ensayos oficiales de metalcore y pop emo punk transmitidos en directo desde Bogotá.</p>
              </header>
              <figure>
                <img src="/DaliahLogoWhite.png" alt="Daliah Banda transmitiendo ensayo en vivo de metalcore desde Bogotá" loading="lazy"/>
              </figure>
              <div className="live-card-content">
                <p>Accede al streaming oficial vía <a className="underline text-pink-800" href="https://kick.com/daliahbanda" target="_blank" rel="noopener noreferrer">Kick</a> y conoce el proceso creativo, los arreglos en tiempo real y la energía de la banda durante sus sesiones de ensayo.</p>
                <Link to="/live" title="Ver a Daliah Banda en vivo" className="live-card-button underline text-pink-800">Ver ensayo en vivo</Link>
              </div>
            </article>
          </section>
        </div>

        <div className="m-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <section>
            <h2>Estilo musical e influencias</h2>
            <h3>Metalcore, Pop Emo Punk y Rock Alternativo</h3>
            <p>El sonido de Daliah se mueve entre el metalcore moderno, el pop emo punk y el rock alternativo, con influencias del punk rock de los 90 y 2000 y el metal progresivo de décadas posteriores.</p>
            <p>Esta combinación da como resultado canciones melódicas, intensas y cargadas de energía, con estructuras dinámicas y una fuerte identidad emocional.</p>
            <picture>
              <img src="/DaliahLogoWhite.png" alt="Ilustración oscura y emocional que representa el estilo metalcore y emo punk de Daliah" />
            </picture>
          </section>
          <section>
            <h2>Integrantes de la banda</h2>
            <h3>Formación actual</h3>
            <ul>
              <li>Silvia Berrio - Voz principal</li>
              <li>Rafael Salcedo - Teclados</li>
              <li>Michael Villaizan - Guitarra principal</li>
              <li>Jesús Ardiles - Guitarra rítmica y coros</li>
              <li>Christian Ramírez - Bajo y coros</li>
              <li>Nicolás Araújo - Batería</li>
            </ul>
            <picture>
              <img src="/DaliahLogoWhite.png" alt="Integrantes de Daliah Banda con instrumentos, banda de metalcore colombiana" />
            </picture>
          </section>
        </div>

        <section className="m-8">
          <h2 className="text-4xl">Nuestra música</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <article>
              <h3>Single: El amor se acabó</h3>
              <small>El amor se acabó (2022)</small>
              <p>Primer sencillo de la banda, una canción que explora el rechazo amoroso desde un monólogo introspectivo. El tema combina sensibilidad emocional con una instrumentación potente y contemporánea.</p>
              <picture>
                <img src="/DaliahLogoWhite.png" alt="Portada del sencillo El amor se acabó de Daliah Banda" />
              </picture>
            </article>
            <article>
              <h3>Single: Intento sobrevivir</h3>
              <small>Intento sobrevivir (2023)</small>
              <p>Una canción que retrata el conflicto interno de quien no logra expresar sus emociones. Letras honestas y una atmósfera intensa acompañan una narrativa profundamente humana.</p>
              <picture>
                <img src="/DaliahLogoWhite.png" alt="Portada ilustrada del sencillo Intento sobrevivir de Daliah Banda" />
              </picture>
            </article>
            <article>
              <h3>Single: Si podré</h3>
              <small>Si podré (2024)</small>
              <p>Canción dedicada a quienes dudan de sí mismos y sienten presión por encajar en moldes sociales. Su mensaje directo y el trabajo instrumental han tenido una recepción destacada entre el público.</p>
              <picture>
                <img src="/DaliahLogoWhite.png" alt="Portada del sencillo Si podré de Daliah Banda, mensaje de autoafirmación" />
              </picture>
            </article>
            <article>
              <h3>Single: Rebelión</h3>
              <small>Rebelión (2025)</small>
              <p>Una canción que expresa indignación frente a las nuevas dictaduras en América Latina y la apatía social. Actualmente en proceso de publicación.</p>
              <picture>
                <img src="/DaliahLogoWhite.png" alt="Imagen conceptual de protesta y rebeldía asociada al próximo sencillo Rebelión de Daliah" />
              </picture>
            </article>
            <article>
              <h3>Album: Daliah</h3>
              <small>Daliah (Próximamente)</small>
              <p>Album recopilatorio de los singles con extras.</p>
              <picture>
                <img src="/DaliahLogoWhite.png" alt="Imagen conceptual del album Daliah de Daliah" />
              </picture>
            </article>
          </div>
        </section>

        <div className="m-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <section>
            <h2>Trayectoria y presentaciones</h2>
            <p>Desde su formación, Daliah ha participado en la escena rock bogotana en espacios como The Music Hall, The Grange Bar Records, La Chorizería, Jersey Bar y Jackass Rock Bar.</p>
            <p>También ha sido parte de eventos culturales y educativos, incluyendo presentaciones en la Universidad Nacional de Colombia, donde resultaron ganadores del reality “Batalla de Bandas FACARTES - Rock n Blend”.</p>
            <picture>
              <img src="/DaliahLogoWhite.png" alt="Daliah Banda en concierto durante evento cultural universitario en Bogotá" />
            </picture>
          </section>
          <section>
            <h2>Contacto y redes oficiales</h2>
            <p>Para contrataciones, prensa o colaboraciones:</p>
            <ul>
              <li>Correo: <a href="mailto:daliahbanda@gmail.com">daliahbanda@gmail.com</a></li>
              <li>Instagram: @daliah_banda</li>
              <li>Facebook: Daliah Banda</li>
            </ul>
            <picture className="inline-block w-[300px]">
              <img src="/DaliahLogoWhiteIcon.ico" alt="Logos de Instagram y Facebook de Daliah Banda" />
            </picture>
          </section>
        </div>
      </>
    )
}