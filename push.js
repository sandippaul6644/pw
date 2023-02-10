 var push = require('web-push');

 let vapidKeys = 
 {
    publicKey: 'BBYSUUcNpxDNq0BZlKOsd2Kw9eb7HNXrxvmaFmUvgYEv5DXrGLJSSj12-kO95PokO-8SemBl4_ScRX095IJ37Zo',
    privateKey: 'nRjk75myeO4cxT67b3sBhpk1lUW3UNmD2LUHq1th10w'
  }

  push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey) 
  let sub= {};
  push.sendNotification(sub, 'test message')
