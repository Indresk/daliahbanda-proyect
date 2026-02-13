let liveStatus = false

export function getStatus(payload){
    if (!payload) return

    const eventType = payload.event || payload.type

    if (eventType !== 'livestream.status.updated') return

    const { is_live } = payload.data || {}

    if (typeof is_live !== 'boolean') return

    liveStatus = is_live

    console.log(
        is_live
        ? '🟢 Stream inició'
        : '🔴 Stream terminó'
    )
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