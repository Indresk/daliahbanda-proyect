
import crypto from 'node:crypto'

let liveStatus = false

export function getStatus(req){
    const signature = req.headers['kick-event-signature']
    const messageId = req.headers['kick-event-message-id']
    const timestamp = req.headers['kick-event-message-timestamp']
    const eventType = req.headers['kick-event-type']

    const rawBody = req.body.toString()

    const signedPayload = `${messageId}.${timestamp}.${rawBody}`

    const verify = crypto.createVerify('SHA256')
    verify.update(signedPayload)
    verify.end()

    const PublicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAq/+l1WnlRrGSolDMA+A86rAhMbQGmQ2SapVcGM3zq8ANXjnhDWocMqfWcTd95btDydITa10kDvHzw9WQOqp2MZI7ZyrfzJuz5nhTPCiJwTwnEtWft7nV14BYRDHvlfqPUaZ+1KR4OCaO/wWIk/rQL/TjY0M70gse8rlBkbo2a8rKhu69RQTRsoaf4DVhDPEeSeI5jVrRDGAMGL3cGuyY6CLKGdjVEM78g3JfYOvDU/RvfqD7L89TZ3iN94jrmWdGz34JNlEI5hqK8dd7C5EFBEbZ5jgB8s8ReQV8H+MkuffjdAj3ajDDX3DOJMIut1lBrUVD1AaSrGCKHooWoL2etwIDAQAB'

    const isValid = verify.verify(PublicKey,signature,'base64')

    if (!isValid) {
        throw new Error('No es valida la key');
    }

    const payload = JSON.parse(rawBody)

        if (eventType === 'livestream.status.updated') {
        const { broadcaster_user_id, is_live } = payload.data

        if (is_live) {
            liveStatus = true
            console.log(`🟢 ${broadcaster_user_id} inició live`)
        } else {
            liveStatus = false
            console.log(`🔴 ${broadcaster_user_id} terminó live`)
        }
    }
}

export function getSubscription(){
    return liveStatus
}