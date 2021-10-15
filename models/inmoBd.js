import mongoose from 'mongoose';
const Schema= mongoose.Schema;

const inmuebleSchema= new Schema({
    tipo:{type: String, required:[true,'Tipo de inmueble obligatorio']},
    habitaciones: {type: String, required:[true,'Tipo de inmueble obligatorio']},
    descripcion: String,
    contacto: String,
    foto1: String,
    foto2: String,
    foto3: String,
    activo:{type: Boolean,default:true}
});
//Convertir modelo
const inmoBD= mongoose.model('inmoBD',inmuebleSchema);
export default inmoBD;