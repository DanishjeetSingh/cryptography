const { privateDecrypt, publicEncrypt } = require("crypto");
const { publicKey, privateKey } = require("./keypair");

const message = "i like your mom";

const encryptedData = publicEncrypt(publicKey, Buffer.from(message));

console.log(encryptedData.toString("hex"));

const decryptedData = privateDecrypt(privateKey, encryptedData);

console.log(decryptedData.toString("utf-8"));
