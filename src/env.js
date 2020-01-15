

import dotenv from 'dotenv'
dotenv.config()
console.log(process.env, 'eve')

export default {
    REACT_APP_API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
};