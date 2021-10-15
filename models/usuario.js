const mongoose=require('mongoose');
const { Schema } = mongoose;


// Usuarios
const usuarioSchema = new Schema({

    nombre: {type: String, required: [true, 'Nombre obligatorio'],maxlength:100},
    apellido: {type: String, required: [true, 'Apellido obligatorio'],maxlength:100},
    telefono: {type: String, required: [true, 'Teléfono obligatorio'],maxlength:10},
    email1: {type: String, required: [true, 'Email obligatorio'],maxlength:100, trim:true, unique:true},
    email2: {type: String, required: [true, 'Email obligatorio'],maxlength:100, trim:true, unique:true},
    password: {type: String, required: [true, 'Password obligatorio'],maxlength:100},
    perfil: {type: String, required: [true, 'Perfil obligatorio']},
    date:{type: Date, default: Date.now},
    activo: {type: Boolean, default: true}
    
});

// Convertir a modelo
const Usuario=mongoose.model('usuario', usuarioSchema);

//export default Nota;
module.exports=Usuario;