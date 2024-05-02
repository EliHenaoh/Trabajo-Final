//importamos el modelo
import usuarioModel from "../models/usuario.model.js";






// preba inicial
// LOGICA PARA MOSTRAR USUARIOS

// return res.send("Funciona la peticion GET");

export const getUsuario = async (req, res) => {

    // MANEJO DE ERRORES CON TRY Y CATCH

    try {
        let usuarios = await usuarioModel.find();
        return res.send(usuarios);
    } catch (error) {
        return res.json({ error: "error al mostrar los datos" + error });
    }
}
// return res.send(" Funciona la funcion POST");
export const postUsuario = async (req, res) => {
    // MANEJO DE ERRORES CON TRY Y CATCH

    try {
        let datosUsuario = req.body;
        let nuevoUsuario = await usuarioModel.create(datosUsuario);
        return res.json(nuevoUsuario);

    } catch (error) {
        return res.json({ error: " error al crear el usuario", mesagge: error.mesagge });
    }
}
//return res.send(" Funciona la funcion PUT");
export const putUsuario = async (req, res) => {
    try {
        let datosModificar = req.body;
        let idModificar = req.params._id;

        await usuarioModel.findByIdAndUpdate(idModificar, datosModificar);
        return res.json({ mesagge: " Usuario actualizado correctamente" });
    } catch (error) {
        return res.json({ error: "error al modificar usuario", mesagge: error.mesagge });
    }

}

//return res.send(" Funciona la funcion DELETE");
export const deleteUsuario = async (req, res) => {
    try {
        let idEliminar = req.params._id;
        let usuarioEliminado = await usuarioModel.findByIdAndDelete(idEliminar);
        if (usuarioEliminado) {
            return res.json({ mesagge: " Usuario eliminado correctamente" });
        } else {
            return res.json({ mesagge: "Ups! No se pudo eliminar el usuario" });
        }
    } catch (error) {
        return res.json({ error: "error al eliminar usuario", message: error.mesagge });

    }

}