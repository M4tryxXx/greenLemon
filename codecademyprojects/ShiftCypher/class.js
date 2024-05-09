
//Declaration of class that return an encryption object.
class ShiftCipher {
    constructor(integer) {
      this._offset = integer;
      this._alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '.', ',', '!', '?'];
    }
    //Encryption method.
    encrypt(string) {
      let encryptedString = '';
      let encryptedArray = [];
      const stringArray = string.split(' ');
      //console.log(stringArray);
      //Looping trough string to be encrypted.
      for (let i = 0; i < stringArray.length; i++) {
        let tempArray = [];
        let word = stringArray[i]
        //Looping trough every word of string to be encrypted to extract each letter and find index of it to encrypt it.
        for (let j = 0; j < word.length; j++) {
          let leterIndex;
            leterIndex = this._alphabet.findIndex(letter => {
              return letter === word[j].toLowerCase();
            });
          let tempIndex = leterIndex + this._offset;
          let count = 0;
          //Function to wrap the encryption return.
          if (tempIndex > this._alphabet.length - 1) {
            for (let i = this._alphabet.length -1 ; i < tempIndex; i++) {
              count++;
            }
            //console.log(count)
            leterIndex = 0 - this._offset + count - 1;  
            //console.log('offsetLetter' + offsetLetter)
          }
          tempArray.push(this._alphabet[leterIndex + this._offset]);
        }
        encryptedArray.push(tempArray.join(''))
      }
      encryptedString = encryptedArray.join(' ');
      return encryptedString.toUpperCase();
    }
    decrypt(string) {
      let decryptedString = '';
      let decryptedArray = [];
      const stringArray = string.split(' ');
      //console.log(stringArray);
      //Looping trough string to be decrypted.
      for (let i = 0; i < stringArray.length; i++) {
        let tempArray = [];
        let word = stringArray[i]
        //Looping trough every word of string to be decrypted to extract each letter and find index of it to decrypt it.
        for (let j = 0; j < word.length; j++) {
          let leterIndex;
            leterIndex = this._alphabet.findIndex(letter => {
              return letter === word[j].toLowerCase();
            });
          let tempIndex = leterIndex - this._offset;
          let count = 0;
          //Function to wrap the decryption return.
          if (tempIndex < 0) {
            for (let i = 0; i > tempIndex; i--) {
              count++;
            }
            //console.log(count)
            leterIndex = this._alphabet.length + this._offset - count;  
          }
          
          tempArray.push(this._alphabet[leterIndex - this._offset]);
        }
        decryptedArray.push(tempArray.join(''))
      }
      decryptedString = decryptedArray.join(' ');
      return decryptedString.toLowerCase();
    }
  }
  
  /*
  const eugenPassword =
    new ShiftCipher(7);
  
  console.log(eugenPassword.encrypt(''));
  console.log(eugenPassword.decrypt(''));
  */
export {ShiftCipher};
  
