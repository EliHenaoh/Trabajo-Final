
import mongoose from "mongoose";

// crear una funcion que nos conecte la base de datos
const conexionMongo = async () => {

    await mongoose.connect(process.env.BD_URL, {})


    try {
        console.log("Conexion exitosa");
    } catch (error) {
        console.log("Error de conexion:", error.message);
    };

}

// Tenemos que exportar nuestra funcion para llamarla desde nuestro servidor
export default conexionMongo;
