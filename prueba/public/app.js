/**
 * Script encargado del consumo del webservice mediante jQuery.
 * Obtiene datos desde RandomUser API y los imprime en la tabla.
 */

$(document).ready(function () {

    /** Evento click del botón */
    $("#btnCargar").click(function () {

        /** Llamada AJAX al webservice */
        $.ajax({
            url: "https://randomuser.me/api/?results=10",
            method: "GET",

            /** Procesamiento en caso de éxito */
            success: function (response) {

                let datos = response.results;

                $("#tabla tbody").empty();

                datos.forEach(user => {

                    let id = user.id.value ?? "N/A";
                    let contact = user.phone;
                    let lastname = user.name.last;
                    let createdtime = user.registered.date;

                    $("#tabla tbody").append(`
                        <tr>
                            <td>${id}</td>
                            <td>${contact}</td>
                            <td>${lastname}</td>
                            <td>${createdtime}</td>
                        </tr>
                    `);
                });
            },

            /** Manejo de errores */
            error: function () {
                alert("Error al consumir el webservice");
            }
        });

    });

});
