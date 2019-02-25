const app = require('express')()
let statusCode = 200

app.get('/toggle', (req, res) => {
  statusCode = statusCode === 200 ? 502 : 200
  res.send(`switched to ${statusCode}`)
})

app.get('/healthcheck', (req, res) => {
  res.status(statusCode).json(null)
})

app.listen(3031, () => {
  console.log('ayyyyyyyy I am the newer guy')
  setTimeout(() => {
    statusCode = 502
    console.log('502')
  }, 300000)
})
