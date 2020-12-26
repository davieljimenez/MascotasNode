const express = require("express");
const router = express.Router();
//Trayendo el modelo de mascota:
const Mascota = require("../models/mascota")

router.get("/", async(req, res) => {

    try {

        const arrayMascotasDB = await Mascota.find()
        console.log(arrayMascotasDB)

        res.render("mascotas", {
            arrayMascotas: arrayMascotasDB

        })

    } catch (error) {
        console.log(error)
    }

})

router.get("/crear", (req, res) => {
    res.render("crear")

})

router.post("/", async(req, res) => {
    const body = req.body
    try {

        await Mascota.create(body)

        res.redirect("/mascotas")

    } catch (error) {
        console.log(`Error al intentar agregar una mascota ${error}`)
    }
})

router.get("/:id", async(req, res) => {
    const id = req.params.id

    try {
        const mascotaDB = await Mascota.findOne({ _id: id })

        res.render("detalle", {
            mascota: mascotaDB,
            error: false
        })

    } catch (error) {
        res.render("detalle", {
            error: true,
            mensaje: `Ha ocurrido un error al tratar de obtener la mascota seleccionada ${error}`
        })
    }
})

router.delete("/:id", async(req, res) => {
    const id = req.params.id

    try {
        const mascotaDB = await Mascota.findByIdAndDelete({ _id: id })

        if (mascotaDB) {
            res.json({
                estado: true,
                mensaje: "El objeto fue eliminado"
            })
        } else {

            res.json({
                estado: false,
                mensaje: "Error al tratar de eliminar el elemento"
            })
        }

    } catch (error) {
        console.log(`Error al tratar de eliminar el elemento seleccionado ${error}`)
    }
})


module.exports = router;