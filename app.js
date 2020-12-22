const express = require("express")
const app = express();

const port = process.env.PORT || 3002;
app.use(express.static(__dirname + "/public"))

//motor de plantillas
app.set("view engine", "ejs")
app.set("views", __dirname + "/views")

app.get("/", (req, res) => {

    res.render("index", { titulo: "Index Dinamico" })
})

app.get("/servicios", (req, res) => {
    res.render("servicios", { tituloServicios: "Pagina de Servicios🆘" })
})

app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404 EJS",
        descripcion: "Descripcion del 404"
    })
})



app.listen(port, () => {
    console.log(`Servidor a su servicio en el puerto ${port}`)
})