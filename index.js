const express = require('express')

// Give error. ; and "". Remove ; and replace ''
// const app = express();
// const x = "happy"

const app = express()

// function as a callback
// app.get('/', function (res, req) {
//   res.send('hello')
// process.exit(1)
// })

app.listen(3000, () => {
  console.log(' App is listening')
})
