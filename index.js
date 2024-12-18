const express = require('express');
const app = express();
app.use(express.json());

// Cálculo del área de un trapecio
app.get('/trapecio/:base1/:base2/:altura', (req, res) => {
    let base1 = parseFloat(req.params.base1);
    let base2 = parseFloat(req.params.base2);
    let altura = parseFloat(req.params.altura);
    let area = ((base1 + base2) * altura) / 2;
    res.send('El área del trapecio es: ' + area);
});

// Cálculo del área de un rombo
app.get('/rombo/:diagonal1/:diagonal2', (req, res) => {
    let diagonal1 = parseFloat(req.params.diagonal1);
    let diagonal2 = parseFloat(req.params.diagonal2);
    let area = (diagonal1 * diagonal2) / 2;
    res.send('El área del rombo es: ' + area);
});

// Cálculo del área de un círculo
app.get('/circulo/:radio', (req, res) => {
    let radio = parseFloat(req.params.radio);
    let area = Math.PI * Math.pow(radio, 2);
    res.send('El área del círculo es: ' + area);
});

app.listen(3000, () => {
    console.log('Servidor ejecutándose en el puerto 3000');
});
