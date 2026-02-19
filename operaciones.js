const fs = require('fs');

const registrar = (nombre, edad, tipo, color, enfermedad) => {


    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));


    const nuevaCita = {
        nombre,
        edad,
        tipo,
        color,
        enfermedad
    };

    // Agregar al arreglo
    citas.push(nuevaCita);

    // Sobrescribe el archivo
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));

    console.log('Cita registrada con éxito 🐾');
};

const leer = () => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    console.log(citas);
};

module.exports = { registrar, leer };