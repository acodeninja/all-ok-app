const express = require('express')
const app = express()
const port = process.env.PORT || 80

app.all(/^.+$/, (req, res) => {
    const {path, hostname, ip} = req;
    console.log(JSON.stringify({event: 'request', path, hostname, ip}));
    res.status(200).json({status: 'ok'})
})

app.listen(port, () => {
    console.log(JSON.stringify({event: 'listening', message: `listening on port ${port}`}))
})

