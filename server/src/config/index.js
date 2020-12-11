import dotenv from "dotenv"

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'development') {
  const envFound = dotenv.config()  
  if (envFound.error) {
    const errMsg = "Could not find .env file"
    console.error(errMsg)
    throw new Error(errMsg)
  }
}

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, PORT } = process.env

const config = {
  port: PORT,
  dbURL: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
}
export default config
