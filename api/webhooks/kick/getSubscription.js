export function getStatus(payload) {
  if (!payload) return;
  
  const eventType = `${payload.event}.${payload.type}`;
  console.log('Evento Kick:', eventType, payload);
  
  if (eventType === 'livestream.status.updated') {
    const isLive = payload.data?.is_live ?? false;
    liveStatus = isLive;
    console.log(isLive ? '🔴 Stream INICIADO' : '⏹️ Stream TERMINADO');
  }
  
  if (eventType === 'chat.message.sent') {
    console.log('💬 Mensaje:', payload.data?.message);
  }
}

export async function getSubscriptions(accessToken) {
  const response = await fetch(
    'https://api.kick.com/public/v1/events/subscriptions',
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Get subscription error: ${error}`)
  }

  return response.json()
}

export function getSubscription(){
    return liveStatus
}