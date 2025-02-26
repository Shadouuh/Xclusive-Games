const db = require('../db');

async function createTables() {
    try {
        await db.query(`
            CREATE TABLE IF NOT EXISTS Juegos (
                ID INT PRIMARY KEY AUTO_INCREMENT,
                Nombre VARCHAR(255) NOT NULL,
                Consola VARCHAR(255) NOT NULL,
                Descripcion TEXT,
                Fecha_Lanzamiento DATE,
                FK_Desarrolladora INT
            )
        `);

        await db.query(`
            CREATE TABLE IF NOT EXISTS Desarrolladora (
                ID INT PRIMARY KEY AUTO_INCREMENT,
                Nombre VARCHAR(255) NOT NULL,
                Pais VARCHAR(255),
                Fundacion DATE,
                Descripcion TEXT
            )
        `);

        await db.query(`
            CREATE TABLE IF NOT EXISTS Reseñas (
                ID INT PRIMARY KEY AUTO_INCREMENT,
                FK_Juego INT NOT NULL,
                FK_Usuario INT NOT NULL,
                Mensaje TEXT,
                Estrellas INT CHECK (Estrellas BETWEEN 1 AND 5)
            )
        `);

        await db.query(`
            CREATE TABLE IF NOT EXISTS Carrito (
                ID INT PRIMARY KEY AUTO_INCREMENT,
                FK_Usuario INT NOT NULL,
                FK_Juegos INT NOT NULL,
                Precio_total FLOAT NOT NULL
            )
        `);

        await db.query(`
            CREATE TABLE IF NOT EXISTS CarritoItem (
                ID_item INT PRIMARY KEY AUTO_INCREMENT,
                precio_item FLOAT NOT NULL,
                FK_Juego INT NOT NULL,
                FK_Usuario INT NOT NULL,
                Metodo_Pago VARCHAR(255) NOT NULL,
                FK_Transaccion INT NOT NULL
            )
        `);

        await db.query(`
            CREATE TABLE IF NOT EXISTS Transaccion (
                ID INT PRIMARY KEY AUTO_INCREMENT,
                FK_usuario INT NOT NULL,
                Total FLOAT NOT NULL,
                Fecha_Transaccion DATE NOT NULL
            )
        `);

        await db.query(`
            CREATE TABLE IF NOT EXISTS Usuarios (
                ID_usuario INT PRIMARY KEY AUTO_INCREMENT,
                Nombre_Real VARCHAR(255) NOT NULL,
                Descripcion TEXT,
                Xcoins FLOAT,
                FKrequisitos INT
            )
        `);

        await db.query(`
            CREATE TABLE IF NOT EXISTS Login (
                ID_login INT PRIMARY KEY AUTO_INCREMENT,
                Nombre_usuario VARCHAR(255) NOT NULL,
                Email VARCHAR(255) NOT NULL UNIQUE,
                Contraseña VARCHAR(255) NOT NULL,
                FK_usuario INT NOT NULL
            )
        `);

        await db.query(`
            CREATE TABLE IF NOT EXISTS Componentes (
                Id_requisito INT PRIMARY KEY AUTO_INCREMENT,
                cpu VARCHAR(255) NOT NULL,
                ram VARCHAR(255) NOT NULL,
                placa_video VARCHAR(255) NOT NULL,
                almacenamiento VARCHAR(255) NOT NULL,
                monitor VARCHAR(255),
                mouse VARCHAR(255),
                teclado VARCHAR(255)
            )
        `);
        console.log('✔️ Tablas creadas correctamente.');
    } catch (err) {
        console.error('❌ Error creando las tablas:', err);
    }
}

async function addForeignKeys() {
    try {
        await db.query(`
            ALTER TABLE Juegos 
            ADD CONSTRAINT fk_desarrolladora FOREIGN KEY (FK_Desarrolladora) REFERENCES Desarrolladora(ID)
        `);

        await db.query(`
            ALTER TABLE Reseñas 
            ADD CONSTRAINT fk_reseña_juego FOREIGN KEY (FK_Juego) REFERENCES Juegos(ID),
            ADD CONSTRAINT fk_reseña_usuario FOREIGN KEY (FK_Usuario) REFERENCES Usuarios(ID_usuario)
        `);

        await db.query(`
            ALTER TABLE Carrito 
            ADD CONSTRAINT fk_carrito_usuario FOREIGN KEY (FK_Usuario) REFERENCES Usuarios(ID_usuario),
            ADD CONSTRAINT fk_carrito_juego FOREIGN KEY (FK_Juegos) REFERENCES Juegos(ID)
        `);

        await db.query(`
            ALTER TABLE CarritoItem 
            ADD CONSTRAINT fk_carritoItem_juego FOREIGN KEY (FK_Juego) REFERENCES Juegos(ID),
            ADD CONSTRAINT fk_carritoItem_usuario FOREIGN KEY (FK_Usuario) REFERENCES Usuarios(ID_usuario),
            ADD CONSTRAINT fk_carritoItem_transaccion FOREIGN KEY (FK_Transaccion) REFERENCES Transaccion(ID)
        `);

        await db.query(`
            ALTER TABLE Transaccion 
            ADD CONSTRAINT fk_transaccion_usuario FOREIGN KEY (FK_usuario) REFERENCES Usuarios(ID_usuario)
        `);

        await db.query(`
            ALTER TABLE Usuarios 
            ADD CONSTRAINT fk_usuarios_requisitos FOREIGN KEY (FKrequisitos) REFERENCES Componentes(Id_requisito)
        `);

        await db.query(`
            ALTER TABLE Login 
            ADD CONSTRAINT fk_login_usuario FOREIGN KEY (FK_usuario) REFERENCES Usuarios(ID_usuario)
        `);

        console.log('✅ Claves foráneas agregadas correctamente.');
    } catch (err) {
        if (!err.message.includes("Duplicate")) {
            console.error('❌ Error agregando claves foráneas:', err);
        }
    }
}

async function syncDatabase() {
    await createTables();
    await addForeignKeys();
}

syncDatabase().catch(err => console.error('❌ Error en la base de datos:', err));

module.exports = db;
