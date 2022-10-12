const express = require('express')
const app = express()
const port = process.env.PORT || 80

app.all(/^.+$/, (req, res) => {
  res.status(200).json({status: 'ok'})
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

