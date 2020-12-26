const express = require("express")
const app = express();

require("dotenv").config()


const port = process.env.PORT;

//Conexion a BD:
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.0mmnm.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`


mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Base de datos conectada eficientemente"))
    .catch(e => console.log(`Error al conectar la base de datos... ${e}`))



//motor de plantillas
app.set("view engine", "ejs")
app.set("views", __dirname + "/views")

app.use(express.static(__dirname + "/public"))

//Rutas web
app.use("/", require("./router/rutasWeb"));

app.use("/mascotas", require("./router/Mascotas"));

app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404 EJS",
        descripcion: "Descripcion del 404"
    })
})



app.listen(port, () => {
    console.log(`Servidor a su servicio en el puerto ${port}`)
})