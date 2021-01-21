`use strict`

const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

class Chipper {

    encrypt(text) {
        let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
        let encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
    }
   
    decrypt(text) {
        let iv = Buffer.from(text.iv, 'hex');
        let encryptedText = Buffer.from(text.encryptedData, 'hex');
        let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString();
    }
}

// execute
let chipper = new Chipper(); // call Class

const message = "michaelstevanlapandio";
const encryptMessage = chipper.encrypt(message);
const decryptMessage = chipper.decrypt(encryptMessage);

console.log("Message: ", message);
console.log("====".repeat(13));
console.log("encryptMessage: ", encryptMessage.encryptedData);
console.log("decryptMessage: ", decryptMessage);