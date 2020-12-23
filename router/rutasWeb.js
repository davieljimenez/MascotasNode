const express = require('express')
const router = express.Router();

router.get("/", (req, res) => {

    res.render("index", { titulo: "Index Dinamico" })
})

router.get("/servicios", (req, res) => {
    res.render("servicios", { tituloServicios: "Pagina de Servicios🆘" })
})

module.exports = router;