/**
 * Aplicación principal del servidor Express.
 * Configura vistas, rutas y archivos estáticos siguiendo
 * el patrón MVC solicitado en la prueba técnica.
 */

const express = require("express");
const path = require("path");

const app = express();
const homeController = require("./controllers/homeController");

/** Configuración del motor de plantillas */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/** Archivos estáticos */
app.use(express.static(path.join(__dirname, "public")));

/** Ruta principal */
app.get("/", homeController.index);

/** Inicialización del servidor */
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
