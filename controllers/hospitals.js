const Hospital = require('../models/Hospital')

//Get all
// exports.getHospitals = (req, res, next) => {
//     res.status(200).json({success:true, msg:'Show all hospitals'});
// };

//Real get all hospital
exports.getHospitals = async (req, res, next) => {
    try{
        const hospitals = await Hospital.find();
        res.status(200).json({success: true, count: hospitals.length, data: hospitals});
    }catch(err){
        res.status(400).json({success: false});
    }
};

//Get one hospital with id
// exports.getHospital = (req, res, next) => {
//     res.status(200).json({success:true, msg:`Show hospitals ${req.params.id}`});
// };

//Real get one hospital
exports.getHospital = async (req, res, next) => {
    try{
        const hospital = await Hospital.findById(req.params.id);

        if(!hospital){
            return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, data: hospital});
    }catch(err){
        res.status(400).json({success: false});
    }
};

//Create new 
// exports.createHospital = (req, res, next) => {
//     console.log(req.body);
//     res.status(200).json({success:true, msg:'Create new hospitals'});
// };

//Real create hospital in database
exports.createHospital = async (req, res, next) => {
    const hospital =  await Hospital.create(req.body);
    res.status(201).json({success: true, data: hospital});
};

//Update
// exports.updateHospital = (req, res, next) => {
//     res.status(200).json({success:true, msg:`Update hospital ${req.params.id}`});
// };

//Real Update to database
exports.updateHospital = async (req, res, next) => {
    try{
        const hospital = await Hospital.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if(!hospital){
            return res.status(400).json({success: falase});
        }
        res.status(200).json({success: true, data: hospital});
    }catch(err){
        res.status(400).json({success: false});
    }
};

//Delete
// exports.deleteHospital = (req, res, next) => {
//     res.status(200).json({success:true, msg:`Delete hospital ${req.params.id}`});
// };

//Real Delete from database
exports.deleteHospital = async (req, res, next) => {
    try{
        const hospital = await Hospital.findByIdAndDelete(req.params.id);
        if(!hospital){
            return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, data: {}});
    }catch(err){
        res.status(400).json({success: false});
    }
};




