import crypto from 'crypto'; 

const { KICKCLIENTID, KICKCLIENTSECRET, KICKREDIRECTURI, KICKTOKENURL, KICKAUTHURL } = process.env;

export function generatePKCEPair() {
  const verifier = crypto.randomBytes(32).toString('base64url');
  const challenge = crypto.createHash('sha256')
    .update(verifier)
    .digest('base64url');
  return { code_verifier: verifier, code_challenge: challenge };
}

export function getKickAuthUrl(state = crypto.randomUUID()) { 
  const pkce = generatePKCEPair(); 
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: KICKCLIENTID,
    redirect_uri: KICKREDIRECTURI,
    scope: 'events:subscribe livestream:read',
    code_challenge: pkce.code_challenge,  
    code_challenge_method: 'S256',        
    state: state                          
  });
  console.log(`${KICKAUTHURL}?${params.toString()}`);
  return `${KICKAUTHURL}?${params.toString()}`;
}

export async function exchangeCodeForToken(code, codeVerifier) { 
  const response = await fetch(KICKTOKENURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      client_id: KICKCLIENTID,
      client_secret: KICKCLIENTSECRET,
      redirect_uri: KICKREDIRECTURI,
      code_verifier: codeVerifier
    }),
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Token exchange failed: ${error}`);
  }
  return response.json();
}

export async function refreshKickToken(refreshToken) {
  const response = await fetch(KICKTOKENURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: KICKCLIENTID,
      client_secret: KICKCLIENTSECRET,
    }),
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Refresh token failed: ${error}`);
  }
  return response.json();
}