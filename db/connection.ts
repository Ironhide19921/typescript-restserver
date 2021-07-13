import { Sequelize } from 'sequelize';

// Abrir xampp para localhost, start mysql y manejar tablas y registros con mysql workbench

const db = new Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});

export default db;