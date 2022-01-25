/* eslint-disable no-console */
import cipher from './cipher.js';
const returnInfo = document.getElementById("returnMsg");
document.getElementById("encodeBtn").addEventListener("click", function(){
    const textToCipher = (document.getElementById("inText").value);
    const offset = document.getElementById("clueOne").value;
    const returnCiphMsg= document.getElementById("returnText");
    returnInfo.innerHTML="Tu mensaje cifrado es:";
    returnCiphMsg.innerHTML = cipher.encode(offset, textToCipher);
})
document.getElementById("decodeBtn").addEventListener("click", function(){
    const textToDecipher = (document.getElementById("inText").value);
    const offset = document.getElementById("clueOne").value;
    const returnDMsg= document.getElementById("returnText");
    returnInfo.innerHTML="Esto decía el mensaje original:"
    returnDMsg.innerHTML = cipher.decode(offset, textToDecipher);

})