const express = require('express');
const app = express();
app.use(express.json());

// Ruta para el cálculo del área y perímetro de un trapecio
app.get('/trapecio/:base1/:base2/:altura/:lado1/:lado2', (req, res) => {
    let base1 = parseFloat(req.params.base1);
    let base2 = parseFloat(req.params.base2);
    let altura = parseFloat(req.params.altura);
    let lado1 = parseFloat(req.params.lado1);
    let lado2 = parseFloat(req.params.lado2);

    if (isNaN(base1) || isNaN(base2) || isNaN(altura) || isNaN(lado1) || isNaN(lado2)) {
        return res.status(400).json({ error: 'Todos los parámetros deben ser números válidos' });
    }

    let area = ((base1 + base2) * altura) / 2;
    let perimetro = base1 + base2 + lado1 + lado2;

    res.json({
        figura: 'Trapecio',
        area: area.toFixed(2),
        perimetro: perimetro.toFixed(2)
    });
});

// Ruta para el cálculo del área y perímetro de un rombo
app.get('/rombo/:diagonal1/:diagonal2/:lado', (req, res) => {
    let diagonal1 = parseFloat(req.params.diagonal1);
    let diagonal2 = parseFloat(req.params.diagonal2);
    let lado = parseFloat(req.params.lado);

    if (isNaN(diagonal1) || isNaN(diagonal2) || isNaN(lado)) {
        return res.status(400).json({ error: 'Todos los parámetros deben ser números válidos' });
    }

    let area = (diagonal1 * diagonal2) / 2;
    let perimetro = 4 * lado;

    res.json({
        figura: 'Rombo',
        area: area.toFixed(2),
        perimetro: perimetro.toFixed(2)
    });
});

// Ruta para el cálculo del área y perímetro de un círculo
app.get('/circulo/:radio', (req, res) => {
    let radio = parseFloat(req.params.radio);

    if (isNaN(radio)) {
        return res.status(400).json({ error: 'El parámetro radio debe ser un número válido' });
    }

    let area = Math.PI * Math.pow(radio, 2);
    let perimetro = 2 * Math.PI * radio;

    res.json({
        figura: 'Círculo',
        area: area.toFixed(2),
        perimetro: perimetro.toFixed(2)
    });
});
// Ruta para el cálculo del Trinomio Cuadrado Perfecto
app.get('/trinomio/:a/:b', (req, res) => {
    let a = parseFloat(req.params.a);
    let b = parseFloat(req.params.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Ambos parámetros deben ser números válidos' });
    }

    let resultado = Math.pow(a, 2) + 2 * a * b + Math.pow(b, 2);

    res.json({
        figura: 'Trinomio Cuadrado Perfecto',
        expresion: `(${a} + ${b})^2`,
        resultado: resultado.toFixed(2)
    });
});


// Puerto en el que correrá el servidor
const PORT = 3000; // Cambia este puerto si necesitas otro
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
