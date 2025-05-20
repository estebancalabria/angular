//Servdor express con cors

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    console.log('GET ' + req.url);
    res.send('Hello World!');
});

//No me gusta la variable global
/*let contador_global = 0;
app.get('/api/visitas', (req, res) => {
    console.log('GET ' + req.url); 
    contador_global++;
    res.json({ contador: contador_global });
});*/

app.get('/api/visitas', (function () {
        let contador_global = 0;  //Evito que por accidente se cambie el valor de la variable desde fuera
        return (req, res) => {
            console.log('GET ' + req.url);
            console.log('GET ' + req.url); 
            contador_global++;
            res.json({ contador: contador_global });
        }
    })()  //IIFE : Inmediately Invoked Function Expression
);

app.get('/api/hora-server', (req, res) => {
    console.log('GET ' + req.url);
    const fecha = new Date();
    const hora = fecha.toLocaleTimeString();
    res.json({ hora: hora });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});