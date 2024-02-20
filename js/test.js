import dotenv from 'dotenv';
dotenv.config();
const SITE = {
    USERNAME: process.env.USERNAME ?? '',
    PASSWORD: process.env.PASSWORD ?? '',
    BASEURL : process.env.BASEURL ?? '',
    TOKEN: process.env.TOKEN ?? ''
};

export { SITE };
