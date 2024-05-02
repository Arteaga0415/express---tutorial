const express = require('express')
const path = require('path');
const app = express()
const port = 3000

const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
//send text
app.get('/', (req, res) => {
  res.send('Hello World!')
})
//send objects 
app.get('/object', (req, res) => {
  res.json(items)
})
//serve html files
app.use(express.static('public'));
app.get('/example', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'example.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`Server is running on http://localhost:${port}`);
})