import expressLoader from "./express"
import mongooseLoader from "./mongoose"

export default async (expressApp) => {
  const mongoConnection = await mongooseLoader()
  console.log("Mongo DB Connected")

  await expressLoader(expressApp)
  console.log("Express Loaded")
}