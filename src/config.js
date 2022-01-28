import {config} from "dotenv";
config()
//console.log(process.env.openUri); 

export const openUri = process.env.openUri || "mongodb://0.0.0.0/test";
export const PORT = process.env.PORT || 3000