import express from 'express'
import {getStatus} from '../webhooks/kick/getSubscription.js'
import { startFlow } from '../webhooks/kick/startFlow.js'

const WebhookRouter = express.Router()

//kick

WebhookRouter.get('/kick', async (req,res)=>{
    const internalResponse = await startFlow()
    console.log(internalResponse)
    res.status(200).send(JSON.parse(internalResponse))
})

WebhookRouter.post('/kick',express.raw({ type: '*/*' }),(req, res) => {
        try {
            const internalResponse = getStatus(req);
            res.sendStatus(200)
        } catch (err) {
            console.error('Kick webhook error:', err)
            res.sendStatus(500)
        }
    }
)

export default WebhookRouter