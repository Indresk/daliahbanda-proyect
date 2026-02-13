export async function startFlow(accessToken) {
  const webhookUrl = `https://daliahbanda.com/webhook/kick`

  const response = await fetch(
    'https://api.kick.com/public/v1/events/subscriptions',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        events: [
          {
            event: 'livestream.status.updated',
            method: 'webhook',
          },
        ],
        webhook_url: webhookUrl,
      }),
    }
  )

  if (!response.ok) {
    const error = await response.text()
    throw new Error(`Kick subscription error: ${error}`)
  }

  return response.json()
}
