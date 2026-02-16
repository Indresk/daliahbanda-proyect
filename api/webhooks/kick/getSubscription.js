export async function getStatus(payload) {
  if (!payload) return;
  
  const eventType = `${payload.event}.${payload.type}`;
  console.log('Evento Kick:', eventType, payload);
  
  if (eventType === 'livestream.status.updated') {
    const isLive = payload.data?.is_live ?? false;
    await writeLiveStatus(fsPromises, isLive);
    console.log(isLive ? '🔴 Stream INICIADO' : '⏹️ Stream TERMINADO');
  }
}

export async function getLiveStatus() {
  const { promises: fsPromises } = await import('node:fs');
  try {
    const data = await fsPromises.readFile('./liveStatus.json', 'utf8');
    return JSON.parse(data).status ?? false;
  } catch {
    return false;
  }
}

async function writeLiveStatus(fsPromises, isLive) {
  const statusData = { status: isLive };
  await fsPromises.writeFile('./liveStatus.json', JSON.stringify(statusData, null, 2), 'utf8');
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