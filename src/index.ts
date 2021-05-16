import express, { Request, Response } from 'express'

const PORT = 3001

const app = express()

app.get('/', (req: Request, res: Response) => {
  let count = 3
  res.send('hello')
})

app.listen(PORT, () => {
  console.log(`app runnin on port ${PORT}`)
})

