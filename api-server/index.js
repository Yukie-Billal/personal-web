import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({message: "Invalid request"})
})

app.listen(3000, ()=>console.log("berjalan di port 3000"))