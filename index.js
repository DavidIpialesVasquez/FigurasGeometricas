const express = require('express');
const app = express();
app.use(express.json());

// Cálculo del área y perímetro de un trapecio
app.get('/trapecio/:base1/:base2/:altura/:lado1/:lado2', (req, res) => {
    let base1 = parseFloat(req.params.base1);
    let base2 = parseFloat(req.params.base2);
    let altura = parseFloat(req.params.altura);
    let lado1 = parseFloat(req.params.lado1);
    let lado2 = parseFloat(req.params.lado2);

    let area = ((base1 + base2) * altura) / 2;
    let perimetro = base1 + base2 + lado1 + lado2;

    res.json({
        figura: 'Trapecio',
        area: area,
        perimetro: perimetro
    });
});

// Cálculo del área y perímetro de un rombo
app.get('/rombo/:diagonal1/:diagonal2/:lado', (req, res) => {
    let diagonal1 = parseFloat(req.params.diagonal1);
    let diagonal2 = parseFloat(req.params.diagonal2);
    let lado = parseFloat(req.params.lado);

    let area = (diagonal1 * diagonal2) / 2;
    let perimetro = 4 * lado;

    res.json({
        figura: 'Rombo',
        area: area,
        perimetro: perimetro
    });
});

// Cálculo del área y perímetro de un círculo
app.get('/circulo/:radio', (req, res) => {
    let radio = parseFloat(req.params.radio);

    let area = Math.PI * Math.pow(radio, 2);
    let perimetro = 2 * Math.PI * radio;

    res.json({
        figura: 'Círculo',
        area: area,
        perimetro: perimetro
    });
});

app.listen(3000, () => {
    console.log('Servidor ejecutándose en el puerto 3000');
});
