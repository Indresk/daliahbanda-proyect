import { useEffect } from 'react'

const metaIndex = ({ 
  title = "Daliah Banda | Metalcore · Pop Emo Punk desde Bogotá",
  description = "Daliah es una banda de metalcore y pop emo punk formada en Bogotá. Su sonido mezcla punk rock, pop-punk y metal progresivo con letras sociales, emocionales y políticas.",
  image = "/DaliahLogoWhite.png",
  url = "https://daliahbanda.com",
  twitterHandle = "@daliah_banda"
}) => {
  useEffect(() => {
    // Dynamic head (client-side)
    const titleEl = document.querySelector('title')
    if (titleEl) titleEl.textContent = title

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) metaDescription.setAttribute('content', description)
  }, [title, description])

  return (
    <>
      {/* SSR Head */}
      <title>{title}</title>
      
      <meta name="description" content={description} />
      <meta name="keywords" content="Daliah Banda, Daliah Bogotá, banda metalcore Colombia, pop emo punk Colombia, rock alternativo Bogotá, metal progresivo colombiano, banda emo Colombia, Daliah música, Daliah rock" />
      <meta name="author" content="Daliah Banda" />
      <meta name="language" content="es-CO" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="music.group" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Daliah Banda" />
      <meta property="og:locale" content="es_CO" />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:image:width" content="1281" />
      <meta property="og:image:height" content="675" />
      <meta property="og:image:alt" content="Daliah Banda - Metalcore y Pop Emo Punk desde Bogotá" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${image}`} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />

      {/* Music Schema */}
      <meta name="music:genre" content="Metalcore, Pop Punk, Emo Punk, Rock Alternativo" />
      <meta name="music:musician" content="Daliah Banda" />
      <meta name="music:location" content="Bogotá, Colombia" />

      {/* JSON-LD */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MusicGroup",
            "name": "Daliah Banda",
            "alternateName": ["Daliah", "DaliahBanda"],
            "description": description,
            "genre": ["Metalcore", "Pop Punk", "Emo Punk", "Rock Alternativo", "Metal Progresivo"],
            "foundingLocation": {
              "@type": "City",
              "name": "Bogotá",
              "address": { "@type": "PostalAddress", "addressCountry": "CO" }
            },
            "foundingDate": "2018",
            "sameAs": [
              "https://www.instagram.com/daliah_banda/",
              "https://www.facebook.com/p/Daliah-Banda-100066621979987/"
            ],
            "member": [
              { "@type": "Person", "name": "Silvia Berrio", "role": "Voz principal" },
              { "@type": "Person", "name": "Rafael Salcedo", "role": "Teclado" },
              { "@type": "Person", "name": "Michael Villaizan", "role": "Guitarra principal" },
              { "@type": "Person", "name": "Jesús Ardiles", "role": "Guitarra rítmica y coros" },
              { "@type": "Person", "name": "Christian Ramírez", "role": "Bajo y coros" },
              { "@type": "Person", "name": "Nicolás Araújo", "role": "Batería" }
            ],
            "track": [
              { "@type": "MusicRecording", "name": "El amor se acabó" },
              { "@type": "MusicRecording", "name": "Intento sobrevivir" },
              { "@type": "MusicRecording", "name": "Si podré" },
              { "@type": "MusicRecording", "name": "Rebelión" }
            ],
            "email": "daliahbanda@gmail.com"
          })
        }}
      />
    </>
  )
}

export default metaIndex