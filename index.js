const express = require('express')
const path = require('path');
const app = express()
const port = 3000

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

app.use('/static', express.static(path.join(__dirname, 'public')));

//middleware
app.use('/user/:id', (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}, (req, res) => {
  res.send(`User Info ${req.params.id}`)
})

//use EJS
app.set('view engine', 'ejs');
app.set('views', './views');
//set route for ejs
const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
app.get('/example/ejs', (req, res) => {
  res.render('example', { items });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`http://localhost:${port}`);
})