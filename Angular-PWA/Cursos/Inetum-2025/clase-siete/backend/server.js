import express from 'express';
import cors from 'cors';

const port = 3000;

let libros = [ 
    { id: 1, title: 'El Quijote', author: 'Cervantes' },
    { id: 2, title: 'Cien años de soledad', author: 'Gabriel García Márquez' },
    { id: 3, title: 'El amor en los tiempos del cólera', author: 'Gabriel García Márquez' },
    { id: 4, title: '1984', author: 'George Orwell' },
]

let app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Bienvenido a la API de libros!. GET /api/libros para ver los libros disponibles.');   
});


app.get('/api/libros', (req, res) => {
    setTimeout(() => {
        res.json(libros);
    }, 1500);
});

app.get('/api/libros/:id', (req, res) => {
    const libroId = parseInt(req.params.id, 10);
    const libro = libros.find(libro => libro.id === libroId);
    if (!libro) {
        return res.status(404).json({ error: 'Libro no encontrado' });
    }
    res.json(libro);
});

app.delete('/api/libros/:id', (req, res) => {
    const libroId = parseInt(req.params.id, 10);
    const libroIndex = libros.findIndex(libro => libro.id === libroId);
    if (libroIndex === -1) {
        return res.status(404).json({ error: 'Libro no encontrado' });
    }
    libros.splice(libroIndex, 1);
    res.status(204).send({ message: 'Libro eliminado ' + libroId });
});


app.post('/api/libros', (req, res) => {
    const nuevoLibro = req.body;

    //Validar los campos
    if (!nuevoLibro.title || !nuevoLibro.author) {
        return res.status(400).json({ error: 'Faltan campos requeridos' });
    }
    //Validar que el libro no exista
    const libroExistente = libros.find(libro => libro.title === nuevoLibro.title && libro.author === nuevoLibro.author);
    if (libroExistente) {
        return res.status(409).json({ error: 'El libro ya existe' });
    }

    nuevoLibro.id = libros.map(libro => libro.id).reduce((a, b) => Math.max(a, b)) + 1;
    libros.push(nuevoLibro);
    res.status(201).json(nuevoLibro);
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});