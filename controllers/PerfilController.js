const models = require('../models');
const bcrypt = require('bcryptjs');
const token = require('../services/token');


//privado

//publico
module.exports = {
    add : async (req, res, next) => {
        try {
            let checkPerfil = await  models.Perfil.findOne({perfil : req.body.perfil});
            if (!checkPerfil){                
                const reg = await models.Perfil.create(req.body);
                res.status(200).json(reg);
            }else{
                const reg = await models.Perfil.updateOne(req.body);
                res.status(200).json(reg);
            }
        } catch (error) {
            res.status(500).send({
                message : 'Ocurrió un error interno'
            })
            next(error);
        }
    }    
}