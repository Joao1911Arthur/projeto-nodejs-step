const jwt = require("jsonwebtoken");

const admin = async (req, res, next) => {

   if(req.usuarioCargo != "adm"){
    return res.status(401).json({error:"Não tem permição"})
   }

   next()

}

module.exports = admin;