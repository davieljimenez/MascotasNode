const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("mascotas", {
        arrayMascotas: [
            { id: "1235s45", nombre: "Rex", descripcion: "Descripcion de rex" },
            { id: "555s5", nombre: "Scooby", descripcion: "Descripcion de Scooby" },
        ]
    })
})

module.exports = router;