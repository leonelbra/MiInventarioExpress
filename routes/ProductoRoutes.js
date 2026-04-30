const express = require("express");
const router = express.Router();

const Producto = require("../models/Producto");


// LISTAR PRODUCTOS
router.get("/", async (req, res) => {

    const productos = await Producto.find();

    res.json(productos);

});


// CREAR PRODUCTO
router.post("/crear", async (req, res) => {

    const nuevoProducto = new Producto(req.body);

    await nuevoProducto.save();

    res.json({
        mensaje: "Producto creado correctamente"
    });

});


// ACTUALIZAR PRODUCTO
router.put("/editar/:id", async (req, res) => {

    await Producto.findByIdAndUpdate(req.params.id, req.body);

    res.json({
        mensaje: "Producto actualizado correctamente"
    });

});


// ELIMINAR PRODUCTO
router.delete("/eliminar/:id", async (req, res) => {

    await Producto.findByIdAndDelete(req.params.id);

    res.json({
        mensaje: "Producto eliminado correctamente"
    });

});


module.exports = router;