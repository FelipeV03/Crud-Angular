const mysql = require ("mysql");

const { promisify } = require("util");

const { database } = require("./keys");

const pool = mysql.createPool(database);


// Aca vamos a utiliar la conexion
pool.getConnection((err, conn) => {
    if (err) {

        if (err.code === "PROTOCOL_CONNECTION_LOST") {
            console.error("LA CONEXION A LA BASE DE DATOS FUE CERRADA".bgRed);
        }

        if (err.code === "ER_CON_COUNT_ERROR") {
            console.error("LA BASE DE DATOS TIENE MUCHAS CONEXIONES".bgRed);
        }

        if (err.conde === "ENCONNREFUSED") {
            console.error("CONEXION RECHAZADA".bgRed);
        }
    }

    if (conn) conn.release();
        console.log("CONEXION A LA BASE DE DATOS EXITOSA".bgGreen)
    return;
});


pool.query = promisify(pool.query);





module.exports = pool;