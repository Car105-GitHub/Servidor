const mongoose=require('mongoose');
const Schema = mongoose.Schema;

/// Perfiles
const perfilSchema = new Schema({

    perfil: {type: String, required: [true, 'Perfil obligatorio']},
    publicaAvisos: {type: Boolean,  default: true},
    editaAvisos: {type: Boolean,  default: true},
    eliminaAvisos: {type: Boolean,  default: true},
    publicaServicios: {type: Boolean,  default: true},
    editaServicios: {type: Boolean,  default: true},
    eliminaServicios: {type: Boolean,  default: true},
    contactaVendedores: {type: Boolean,  default: true},
    contactaProfesionales: {type: Boolean,  default: true},
    date:{type: Date, default: Date.now}    
});

/// Convertir a modelo
const Perfil=mongoose.model('Perfil', perfilSchema);

//export default Nota;
module.exports=Perfil;