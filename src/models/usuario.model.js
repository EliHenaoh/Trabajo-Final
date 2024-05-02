// importamos mongoose para poder usar Schema
import mongoose from "mongoose";

const Schema = mongoose. Schema;




const usurioSchema = new Schema({

  nombreCompleto:{
    type:  String,
    required: true
  },
  correo:{
    type: String,
    required: true
  },

  contrasena:{
    type: String,
    required: true
  }
});



const usuarioModel = mongoose.model ("usuario",usurioSchema);

export default usuarioModel;