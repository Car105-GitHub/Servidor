const models = require('../models');
const bcrypt = require('bcryptjs');
const token = require('../services/token');


//privado


//publico
module.exports = {
    add : async (req, res, next) => {
        try {
            let checkEmail = await  models.Usuario.findOne({email1 : req.body.email1});
            if (!checkEmail){
                req.body.password = await bcrypt.hash(req.body.password, 10);
                const reg = await models.Usuario.create(req.body);
                res.status(200).json(reg);
            }else{
                res.status(404).send({
                    message : 'El usuario ya existe'
                })
            }
        } catch (error) {
            res.status(500).send({
                message : 'Ocurrió un error interno'
            })
            next(error);
        }
    },

    login : async(req, res, next) => {
        try {      

            let checkUser = await models.Usuario.findOne({
                email1 : req.body.email1,
                activo : true
            });
            if(checkUser){
                let match = await bcrypt.compare(req.body.password, checkUser.password);
                if (match){
                    let tokenReturn = await token.encode(checkUser)
                    res.status(200).json({checkUser, tokenReturn})
                }else{
                    res.status(401).send({
                        message : 'Usuario no autorizado'
                    })
                }
            }else{
                res.status(401).send({
                    message: 'Usuario no encontrado' + ' ' + req.body.email1 + ' ' + checkUser
                })
            }

        } catch (error) {
            res.status(500).send({
                message: 'Error interno'

            })
        }
    }
}