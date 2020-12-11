import express from "express"

import loaders from "./loaders"
import config from "./config"

const startServer = async () => {
  const app = express()
  await loaders(app)

  app.listen(config.port || 5000, () => {
    console.log("Server listening on " + config.port)
  }).on("error", err => {
    console.error(err)
    process.exit(1)
  })
}

startServer()
