import { Router } from "express"

export default () => {
  const app = Router()

  // Import and use your API handlers.
  // for testing 
  app.get('/best-club', (req, res) => {
    res.status(200).json({
      message: "Of course Chelsea Football Club!"
    })
  })

  return app
}