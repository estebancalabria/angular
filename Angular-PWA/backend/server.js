const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const BASE_URL = "/contactos";

const app = express();

app.use(cors());
app.use(express.json());

let contactos =  [
    {
      "id": "1",
      "documento": 12345678,
      "nombre": "Juan Pérez",
      "fechaNacimiento": "1985-10-15T00:00:00.000Z",
      "genero": "Masculino"
    },
    {
      "id": "2",
      "documento": 23456789,
      "nombre": "María García",
      "fechaNacimiento": "1990-05-25T00:00:00.000Z",
      "genero": "Femenino"
    }
  ];


function salvarContactosEnArchivo(){
    const fs = require('fs');
    fs.writeFileSync('contactos.json', JSON.stringify(contactos));
}

function leerContactosDeArchivo(){
    const fs = require('fs');
    contactos = JSON.parse(fs.readFileSync('contactos.json'));
}

leerContactosDeArchivo();

app.get(BASE_URL, (req, res) => {
    console.log('GET /contactos');
    leerContactosDeArchivo();
    console.log(contactos);
    res.json(contactos);
});

app.post(BASE_URL, (req, res) => {
    console.log('POST /contactos');
    //Para que req.body tenga el json convertido en un objeto tengo que agregr el middleware express.json()
    const contacto = req.body;

    if (!contacto){
        return res.status(400).json({error: 'El contacto es requerido'});
    }

    if ((contacto.nombre) && (contacto.nombre.length <= 4)){
        return res.status(400).json({error: 'El nombre es requerido o es muy corto'});
    }

    contacto.id = Math.max(...contactos.map(contacto => parseInt(contacto.id)), 0) + 1;
    contactos.push(contacto);
    res.json(contacto);

    salvarContactosEnArchivo();
});

app.put(`${BASE_URL}/:id`, (req, res) => {
    console.log('PUT /contactos/' + req.params.id);
    const id = req.params.id;
    const contacto = req.body;
    const index = contactos.findIndex(contacto => parseInt(contacto.id) === parseInt(id));

    if (index === -1){
        return res.status(404).json({error: 'Contacto no encontrado'});
    }

    contactos[index] = contacto;
    res.json(contactos[index]);

    salvarContactosEnArchivo();
});

app.delete(`${BASE_URL}/:id`, (req, res) => {
    console.log('DELETE /contactos/' + req.params.id);
    const id = req.params.id;
    contactos = contactos.filter(contacto => parseInt(contacto.id) !== parseInt(id));
    res.json({message: 'Contacto eliminado'});

    salvarContactosEnArchivo();
});

app.get('/', (req, res) => {
    res.send('<h1>Bienvenido a mi api de contactos!!</h1>');
});


app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});