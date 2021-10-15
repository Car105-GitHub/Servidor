import express from 'express';
import req from 'express/lib/request';
const router = express.Router();

//importar el modelo nota
import inmoBD from '../models/inmoBD';


//Agregar una registro

router.post('/nuevo-registro', async(req,res)=>{
    const body= req.body;

    try {
        const inmoDB = await inmoBD.create(body);
        res.status(200).json(inmoDB);
        
    } catch (error) {
        return res.status(500).json({
            mensaje:'Ocurrio algo inesperado',
            error
        })
        
    }
});

// Get busca todos los registros

router.get('/buscarTodo',async(req,res)=>{

    try {
        const inmoDB= await inmoBD.find();
        res.json(inmoDB);
        
    } catch (error) {
        return res.status(400).json({
            mensaje:'Error en la busqueda',
            error
        })
        
    }


});

//Get con parametro
router.get('/buscarParametro/:id',async(req,res)=>{
const _id = req.params.id;
    try {
        const inmoDB = await inmoBD.findOne({_id});
        res.json(inmoDB);


        
    } catch (error) {
        return res.status(400).json({
            mensaje: 'erro en la busqueda de parametro',
            error
        })
        
    }


})

// Delete eliminar una inmueble

router.delete('/eliminarParametro/:id',async(req,res)=>{
    const _id = req.params.id;

    try {

        const inmoDB = await inmoBD.findByIdAndDelete({_id});
        if(!inmoDB){
            return res.status(400).json({
                mensaje: 'No se econtro inmueble',
                error
            })

        }
        res.json(inmoDB);
        
    } catch (error) {

        return res.status(400).json({
            mensaje: 'Ocurrio en error en el delete'
        })
        
    }

});

//Put actualizar inmueble

router.put('/actualizar/:id' , async(req,res)=>{
    const _id = req.params.id;
    const body = req.body;

    try {
        
        const inmoDB = await inmoBD.findByIdAndUpdate(
        _id,
        body,{new: true} );
        res.json(inmoDB);

        
    } catch (error) {

        return res.status(400).json({
            mensaje:'No se logró actualizar',
            error
        })
        
    }


});


//Exportar la configuracion de express
module.exports=router;