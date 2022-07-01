const { createHmac } = require("crypto");

const key1 = "secret-stuff";
const message = "no-ice ";

const hmac1 = createHmac("sha256", key1).update(message).digest("hex");

console.log(hmac1);

const key2 = "nice-pik-bro";

const hmac2 = createHmac("sha256", key2).update(message).digest("hex");

console.log(hmac2);
