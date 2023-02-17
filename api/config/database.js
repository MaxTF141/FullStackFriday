import mysql from "mysql2";

// import dotenv from "dotenv";
// dotenv.config();

// const database = mysql.createConnection({
//     host: process.env.host,
//     user: process.env.user,
//     password: process.env.password,
//     database: process.env.database
// });

const database = mysql.createConnection({
    host: 'b42ba8m7pixwtpfsh57j-mysql.services.clever-cloud.com',
    user: 'ukiies7pdafhdjxn',
    password: '5wbSuU4HFBiUnwM1rtz2',
    database: 'b42ba8m7pixwtpfsh57j'
});


export default database;