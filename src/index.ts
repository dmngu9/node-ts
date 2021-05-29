import express, { Request, Response } from 'express'

const PORT = 3001

const app = express()

app.get('/', (req: Request, res: Response) => {
  let count = Math.random()
  res.send(count)
})

app.listen(PORT, () => {
  console.log(`app runnin on port ${PORT}`)
})

