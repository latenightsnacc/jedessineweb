require("dotenv").config();
const bcrypt = require("bcryptjs");
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const crypto = require("crypto");
const cors = require("cors");
const path = require('path');
const db = require("./db");
const mysql = require('mysql');
const mysqlStore = require("express-mysql-session")(session);
const multer = require("multer");
const app = express();
const PORT = process.env.PORT;
const ONE_DAY = 24*60*60*1000;

app.use(cors({origin: "http://localhost:3000", credentials: true}));
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const options = {
    connectionLimit: 10,
    password: process.env.DB_PASS,
    user:process.env.DB_USER,
    database: process.env.MYSQL_DB,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    createDatabaseTable: true
}

const pool = mysql.createPool(options);

const sessionStore = new mysqlStore(options, pool);

app.use(session({
    name: process.env.SESS_NAME,
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
        httpOnly:true,
        maxAge: ONE_DAY,
        sameSite: true
    }
}))


app.get("/", (req,res) => {
    res.json({
        message: "Welcome to NYSC CDS E-ATTENDANCE BUILT BY DEBTHEBUILDER"
    })
})
///! Use of Multer
const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, '../client/public/uploads/')     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
 
const upload = multer({
    storage: storage
});
//CORPER SIGN UP

app.post("/api/auth/signup", upload.single('image'), async (req, res) => {
    console.log(req.body);
    console.log(req.file);
     try{
         if(!req.body ){
             return res.status(400).send({
                 message: "Form fields incomplete!"
             })
            
         } else {
             const salt = bcrypt.genSaltSync(10);
             console.log(req.file.filename);
             const firstname= req.body.firstname;
             const surname= req.body.surname;
             const batch= req.body.batch;
             const statecode= req.body.statecode;
             const cdsGroup= req.body.cdsGroup;
             const lga= req.body.lga;
             const ppa= req.body.ppa;
             const email= req.body.email;
             const phoneNo= req.body.phoneNo;
             const profilePic= "http://localhost:3000/uploads/"+req.file.filename;
             const password= bcrypt.hashSync(req.body.statecode, salt);
             const status= req.body.status;
             const roles= req.body.roles;
             const state= req.body.state;

             const insertCorper = await db.insertCorper(firstname,surname,batch,statecode,cdsGroup,lga,ppa,email,phoneNo,profilePic,password,status,roles,state);

             if(insertCorper){
                console.log(insertCorper);
                res.status(200).send({
                    message: "Corper profile created"
                })
             } else {
                res.status(500).send({
                    message: "Error occured while creating profile. "
                });
             }
        }
     }catch(e){
         console.log(e);
         res.status(500).send({
            message: e
        });
     }
    

});
app.post("/recordattendance", async (req, res) => {
    console.log(req.body);
     try{
         if(!req.body ){
             return res.status(400).send({
                 message: "Attendance not recorded for all members!"
             })
            
         } else {
             const salt = bcrypt.genSaltSync(10);
             console.log(req.file.filename);
             const firstname= req.body.firstname;
             const surname= req.body.surname;
             const batch= req.body.batch;
             const statecode= req.body.statecode;
             const cdsGroup= req.body.cdsGroup;
             const lga= req.body.lga;
             const ppa= req.body.ppa;
             const email= req.body.email;
             const phoneNo= req.body.phoneNo;
             const profilePic= "http://localhost:3000/uploads/"+req.file.filename;
             const password= bcrypt.hashSync(req.body.statecode, salt);
             const status= req.body.status;
             const roles= req.body.roles;
             const state= req.body.state;

             const insertCorper = await db.insertCorper(firstname,surname,batch,statecode,cdsGroup,lga,ppa,email,phoneNo,profilePic,password,status,roles,state);

             if(insertCorper){
                console.log(insertCorper);
                res.status(200).send({
                    message: "Corper profile created"
                })
             } else {
                res.status(500).send({
                    message: "Error occured while creating profile. "
                });
             }
        }
     }catch(e){
         console.log(e);
         res.status(500).send({
            message: e
        });
     }
    

});

// CORPER LOG IN
app.post("/api/auth/signin",  async (req,res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;
        const corper = await db.getCorperByEmail(email);

        if(!corper){
            return res.send({
                message: "Invalid email"
            })
        } else {
            const passwordIsValid = bcrypt.compareSync(password, corper.password);

            if(!passwordIsValid){
                return res.send({
                    message: "Invalid password!"
                })
            }

            pool.query("CREATE TABLE IF NOT EXISTS `sessions` (`session_id` varchar(128) COLLATE utf8mb4_bin NOT NULL,`expires` int(11) unsigned NOT NULL,`data` mediumtext COLLATE utf8mb4_bin,PRIMARY KEY (`session_id`)) ENGINE=InnoDB");

            req.session.user = corper;
            req.session.save();
            res.status(200).send(corper)
            console.log("Logged in");
           
        }

        
    }catch(e){
        console.log(e);
    }
    
});
   
app.get("/api/auth/signin", (req,res) => {
    if(req.session.user){
        res.send(req.session.user);
        console.log(req.session);
    }
})

app.get("/members", (req,res) => {
    pool.query("SELECT * FROM corpers", (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

// CORPER LOG OUT
app.get('/api/auth/signout',(req,res) => {
    req.session.destroy(err => {
        if(err){
            return res.send('/dashboard/member');
        }
        sessionStore.close();
        res.clearCookie(process.env.SESS_NAME);
        res.send('Logout successful');
    });
    
});


app.listen(PORT, ()=> {
    console.log(`Server is running on PORT ${PORT}`);
})