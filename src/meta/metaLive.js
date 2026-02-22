import { getStreamingStart,getStreamingEnd } from "../../api/util/dates"

let streamingStart = getStreamingStart()
let streamingEnd = getStreamingEnd()

export const metaLive = {
  title: "Daliah Banda en vivo | Ensayo Metalcore en Directo desde Bogotá",
  description:"Mira a Daliah Banda en vivo durante sus ensayos de metalcore y pop emo punk desde Bogotá. Streaming oficial vía Kick.",
  keywords:"Daliah en vivo, Daliah streaming, ensayo metalcore en vivo, banda en directo Colombia, Daliah Kick, Daliah Banda live",
  author: "Daliah Banda",
  language: "es-CO",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  googlebot: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  canonical: "https://daliahbanda.com/live",

  og: {
    type: "video.other",
    title: "Daliah Banda en vivo | Ensayo oficial vía Kick",
    description:"Transmisión en vivo de los ensayos oficiales de Daliah Banda desde Bogotá.",
    url: "https://daliahbanda.com/live",
    siteName: "Daliah Banda",
    locale: "es_CO",
    image: "https://assets.daliahbanda.com/brand/logos/full/logo-daliah-vector-white-background-v1.webp",
    imageWidth: 1281,
    imageHeight: 675,
    imageAlt:"Daliah Banda transmitiendo ensayo en vivo de metalcore desde Bogotá",
    video: "https://kick.com/daliahbanda"
  },

  twitter: {
    card: "summary_large_image",
    title: "Daliah Banda en vivo | Streaming oficial",
    description:"Ensayo en directo de Daliah Banda vía Kick. Metalcore y pop emo punk desde Bogotá.",
    image: "https://assets.daliahbanda.com/brand/logos/full/logo-daliah-vector-white-background-v1.webp",
    site: "@daliah_banda",
    creator: "@daliah_banda"
  },

  music: {
    genre: "Metalcore, Pop Punk, Emo Punk, Rock Alternativo",
    musician: "Daliah Banda",
    location: "Bogotá, Colombia"
  },

  schema: {
    "@context": "https://schema.org",
    "@type": "VideoObject",

    name: "Daliah Banda - Ensayo en Vivo",
    description:"Transmisión en vivo de los ensayos oficiales de Daliah Banda vía Kick desde Bogotá, Colombia.",

    mainEntityOfPage: "https://daliahbanda.com/live",
    inLanguage: "es-CO",

    thumbnailUrl: [
      "https://assets.daliahbanda.com/brand/logos/full/logo-daliah-vector-white-background-v1.webp"
    ],

    embedUrl: "https://kick.com/daliahbanda",
    contentUrl: "https://kick.com/daliahbanda",
    startDate: streamingStart,
    endDate:streamingEnd,
    isLiveBroadcast: true,
    "eventStatus": "https://schema.org/EventScheduled",

    location: {
      "@type": "City",
      "name": "Bogotá"
    },

    videoFormat: "streaming",

    publisher: {
      "@type": "MusicGroup",
      name: "Daliah Banda",
      foundingDate: "2018",
      foundingLocation: {
        "@type": "City",
        name: "Bogotá",
        address: {
          "@type": "PostalAddress",
          addressCountry: "CO"
        }
      },
      sameAs: [
        "https://www.instagram.com/daliah_banda/",
        "https://www.facebook.com/p/Daliah-Banda-100066621979987/"
      ]
    },

    potentialAction: {
      "@type": "WatchAction",
      target: "https://kick.com/daliahbanda"
    },

    "publication": [
      {
        "@type": "BroadcastEvent",
        "name": "Ensayo en vivo - Daliah Banda",
        "startDate": streamingStart,
        "endDate": streamingEnd,
        "isLiveBroadcast": true,
        "eventStatus": "https://schema.org/EventScheduled",
        "location": {
          "@type": "City",
          "name": "Bogotá"
        },
        "videoFormat": "streaming"
      }
    ]
  }
}