import Cryptr from "cryptr";
const cryptr = new Cryptr(process.env.SECRET);


export const encrypt = (text) => cryptr.encrypt(text);
export const decrypt = (text) => cryptr.decrypt(text);

