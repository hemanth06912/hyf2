const jsonObj= require("../data/reservations.json");

const reservationsRouter = (req,res)=>{
    res.send(jsonObj);
};

module.exports = reservationsRouter;

