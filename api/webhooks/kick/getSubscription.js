import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const FILE = `${__dirname}/liveStatus.json`;

export function getStatus(payload) {
  if (!payload) return;
  
  const eventType = `${payload.event}.${payload.type}`;
  console.log('Evento Kick:', eventType, payload);
  
  if (eventType === 'livestream.status.updated') {
    const isLive = payload.data?.is_live ?? false;
    writeFileSync(FILE, JSON.stringify({ status: isLive }));
    console.log(isLive ? '🔴 Stream INICIADO' : '⏹️ Stream TERMINADO');
  }
}

export function getLiveStatus() {
  try {
    const data = readFileSync(FILE, 'utf8');
    console.log(data)
    return JSON.parse(data).status ?? false;
  } catch {
    return false;
  }
}



// export function getStatus(payload) {
//   if (!payload) return;
  
//   const eventType = `${payload.event}.${payload.type}`;
//   console.log('Evento Kick:', eventType, payload);
  
//   if (eventType === 'livestream.status.updated') {
//     const isLive = payload.data?.is_live ?? false;
//     LiveStatus.setStatus(isLive)
//     console.log(isLive ? '🔴 Stream INICIADO' : '⏹️ Stream TERMINADO');
//   }
// }

// export function getLiveStatus() {
//     return LiveStatus.getStatus()
// }

// export async function getSubscriptions(accessToken) {
//   const response = await fetch(
//     'https://api.kick.com/public/v1/events/subscriptions',
//     {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     }
//   )

//   if (!response.ok) {
//     const error = await response.text()
//     throw new Error(`Get subscription error: ${error}`)
//   }

//   return response.json()
// }