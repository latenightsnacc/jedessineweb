require('dotenv').config();

const mysql = require("mysql");

const pool = mysql.createPool({
    connectionLimit: 10,
    password: process.env.DB_PASS,
    user:process.env.DB_USER,
    database: process.env.MYSQL_DB,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    createDatabaseTable: true
});

let db = {};

db.insertCorper = (firstname, surname, batch, statecode, cdsGroup,lga,ppa,email,phoneNo, profilePic, password,status,roles,state) => {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO corpers (firstname, surname, batch, statecode, cdsGroup, lga, ppa, email, phoneNo, profilePic, password, status, roles, state) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [firstname,surname,batch,statecode,cdsGroup,lga,ppa,email,phoneNo,profilePic,password,status,roles,state], (error, corper) => {
            if(error){
                return reject(error);
            }
            return resolve(corper)
        })
    })
}

db.recordAttendance = (date, month, year, type, status, comment, corperI)
db.getCorperById = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM corpers WHERE id = ?', [id], (error, corper) => {
           if(error){
               return reject(error);
           } 
           return resolve(corper);
        })
        
    })
}

db.getCorperByEmail = (email) => {
    return new Promise((resolve, reject) =>{
        pool.query('SELECT * FROM corpers WHERE email = ?', [email], (error,corper) => {
            if(error){
                return reject(error);
            }
            return resolve(corper[0]);
        })
    })
}
db.getCorpersByCDS = () => {
    return new Promise((resolve, reject) =>{
        pool.query('SELECT * FROM corpers', (error,corpers) => {
            if(error){
                return reject(error);
            }
            return resolve(corpers);
        })
    })
}

db.getCorpersByCdsGroup = (cdsGroup, status) => {
    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM corpers WHERE cdsGroup = ? AND status = ? ", [cdsGroup, status], (error, corpers) => {
            if(error){
                return reject(error);
            }
            return resolve(corpers[0])
        })
    })
}
module.exports = db;