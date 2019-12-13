const jsonObj= require("../data/meals.json");

  const specLimitRouter =  (req, res) => {
    const {limit} = req.params;
    console.log(req.params);
    
    const mealTitle = jsonObj.slice(0,limit)
    res.send(mealTitle);
  };  


module.exports = specLimitRouter;