"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Abrir xampp para localhost, start mysql y manejar tablas y registros con mysql workbench
const db = new sequelize_1.Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});
exports.default = db;
//# sourceMappingURL=connection.js.map