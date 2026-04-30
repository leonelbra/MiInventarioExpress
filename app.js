const express = require("express");
const mongoose = require("mongoose");

const app = express();
const bcrypt = require("bcrypt");

async function prueba() {

    const password = "123456";

    const hash = await bcrypt.hash(password, 10);

    console.log("Contraseña encriptada:");
    console.log(hash);

}

prueba();
const session = require("express-session");

app.use(session({

    secret: "secreto",

    resave: false,

    saveUninitialized: false

}));

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/uploads", express.static("uploads"));

// IMPORTAR RUTAS
const productoRoutes = require("./routes/productoRoutes");


// USAR RUTAS
app.use("/productos", productoRoutes);


// CONEXIÓN MONGODB
mongoose.connect("mongodb://127.0.0.1:27017/inventario")
.then(() => {
    console.log("Mongo conectado");
})
.catch((err) => {
    console.log(err);
});


// RUTA PRINCIPAL
app.get("/", (req, res) => {
    res.send("Servidor funcionando");
});


// SERVIDOR
app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});