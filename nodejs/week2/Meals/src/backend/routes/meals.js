const jsonObj= require("../data/meals.json");

const mealsRouter = (req,res)=>{
    console.log(jsonObj);
    res.send(jsonObj);     
};

module.exports = mealsRouter;
