const express = require('express');
//import { express}  from 'express'; //Esta es la manera de angular   

const app = express();
const PORT = 3000;

app.get('/hola', (req, res) => {
  res.send('Hola Mundo!');
});


app.get('/hora', (req, res) => {
    res.send(new Date().toLocaleTimeString());
});
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});