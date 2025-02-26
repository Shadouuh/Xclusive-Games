//tables
const db = require('./db');
const { tables } = require('./models/tables');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

async function createTables() {
    try {
        await db.query(tables.juegos);
        await db.query(tables.desarrolladora);
        await db.query(tables.resenas);
        await db.query(tables.carrito);
        await db.query(tables.carritoItem);
        await db.query(tables.transaccion);
        await db.query(tables.usuarios);
        await db.query(tables.login);
        await db.query(tables.componentes);
        await db.query(tables.requisitos);
        
        console.log('✔️ Tablas creadas correctamente.');
    }
    catch (err) {
        console.error('❌ Error creando las tablas:', err);
    }
}

createTables().then(() => {
    app.listen(port, () => {
        console.log(`Servidor ejecutándose en http://localhost:${port}`);
    });
});