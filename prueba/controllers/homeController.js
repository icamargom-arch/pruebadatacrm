/**
 * Controlador principal.
 * Renderiza la vista solicitada desde el navegador.
 */

module.exports = {

    /**
     * Renderiza la vista index.ejs
     * @param {Object} req - Request HTTP
     * @param {Object} res - Response HTTP
     */
    index: (req, res) => {
        res.render("index");
    }
};
