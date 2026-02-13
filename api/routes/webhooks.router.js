import express from 'express'
import {getStatus} from '../webhooks/kick/getSubscription.js'
import { getKickAuthUrl, exchangeCodeForToken} from '../webhooks/kick/kick.oauth.js'
import { getValidKickToken } from '../webhooks/kick/verifyToken.js'
import { startFlow } from '../webhooks/kick/startFlow.js'

const WebhookRouter = express.Router()

//kick

WebhookRouter.get('/kick/login', (req, res) => {
  const url = getKickAuthUrl()
  res.redirect(url)
})

WebhookRouter.get('/kick/oauth/callback', async (req, res) => {
  try {
    const { code } = req.query

    if (!code) {
      return res.status(400).send('Missing code')
    }

    const tokenData = await exchangeCodeForToken(code)

    process.env.KICK_REFRESH_TOKEN = tokenData.refresh_token

    const accessToken = tokenData.access_token

    console.log('✅ OAuth completado')
    console.log('Access Token:', accessToken)

    await startFlow(accessToken)

    res.send('OAuth completado y suscripción creada')
  } catch (error) {
    console.error(error)
    res.status(500).send('OAuth error')
  }
})


WebhookRouter.post('/kick',express.json(), async (req, res) => {
  try {
    console.log('📩 Webhook recibido:', req.body)
    getStatus(req.body)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

export default WebhookRouter