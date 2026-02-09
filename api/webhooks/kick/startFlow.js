export async function startFlow() {
    const accessToken = process.env.KICK_ACCESS_TOKEN
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

    const data = await response.json()

    return data

    console.log('starterFuncionando')
}
