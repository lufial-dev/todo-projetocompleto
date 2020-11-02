const MacaddressValidation = (req, res, next) => {
    if (!req.params.macaddress)
        return res.status(500).json({error : "O macaddress e obrigatório."})
    else
        next();
}
 
module.exports = MacaddressValidation;