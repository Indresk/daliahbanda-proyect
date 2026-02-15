// import {fs} from 'fs/promises'

const STATUS_FILE = './liveStatus.json';

let liveStatusCache = false;

async function readLiveStatus() {
  try {
    // const data = await fs.readFile(STATUS_FILE, 'utf8');
    const json = JSON.parse(data);
    return json.status ?? false;
  } catch (error) {
    console.warn('⚠️ liveStatus.json no encontrado o inválido, usando false:', error.message);
    return false;
  }
}

async function writeLiveStatus(isLive) {
  try {
    const statusData = { status: isLive };
    // await fs.writeFile(STATUS_FILE, JSON.stringify(statusData, null, 2), 'utf8');
    console.log(isLive ? '💾 Status guardado: LIVE' : '💾 Status guardado: OFFLINE');
    liveStatusCache = isLive;
  } catch (error) {
    console.error('❌ Error escribiendo liveStatus.json:', error);
  }
}


export async function getStatus(payload) {
  if (!payload) return;
  
  const eventType = `${payload.event}.${payload.type}`;
  console.log('Evento Kick:', eventType, payload);
  
  if (eventType === 'livestream.status.updated') {
    const isLive = payload.data?.is_live ?? false;
    await writeLiveStatus(isLive);
    console.log(isLive ? '🔴 Stream INICIADO' : '⏹️ Stream TERMINADO');
  }
}

export async function getLiveStatus() {
  if (liveStatusCache !== undefined) {
    return liveStatusCache;
  }
  return await readLiveStatus();
}


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