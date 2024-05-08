
import { ShiftCipher } from './class.js';
const toEncrypt = document.getElementById('toEncryptMsg');
const toDecrypt = document.getElementById('toDecryptMsg');
const toEncryptButton = document.getElementById('encryptBtn');
const toDecryptButton = document.getElementById('decryptBtn');
const encryptedMessage = document.getElementById('encryptedMsg');
const decryptedMessage = document.getElementById('decryptedMsg');
const encryptMethod = document.getElementById('encryptMethod');
const decryptMethod = document.getElementById('decryptMethod');
let tempMsgE = '';
let tempTextE = '';
let number = 1;

let tempMsgD = '';
let tempTextD = '';
const shiftCipherTool = new ShiftCipher(number);

toEncryptButton.addEventListener('click', () => {
    tempTextE = toEncrypt.value;
    number = encryptMethod.value;
    tempMsgE = shiftCipherTool.encrypt(tempTextE);
    encryptedMessage.innerHTML = `Encrypted Message:  <span style="color: darkblue; font-weight: bold;">${tempMsgE}</span> `;
    decryptMethod.value = encryptMethod.value;
    toDecrypt.value = tempMsgE;

})

toDecryptButton.addEventListener('click', () => {
    tempTextD = toDecrypt.value;
    tempMsgD = shiftCipherTool.decrypt(tempTextD);
    decryptedMessage.innerHTML = `Decrypted Message: <span style="color: #134400;">${tempMsgD}</span> `;
    toEncrypt.value = '';
    toDecrypt.value = '';
    encryptedMessage.innerHTML = 'Encrypted Message: ';
})
