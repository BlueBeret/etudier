import Cryptr from "cryptr";
const cryptr = new Cryptr(process.env.CRYPT_KEY);


export const encrypt = (text) => cryptr.encrypt(text);
export const decrypt = (text) => cryptr.decrypt(text);

