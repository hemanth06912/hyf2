const jsonObj= require("../data/meals.json");

  const max_priceRouter =  (req, res) => {
    const {maxPrice} = req.params;
    console.log(req.params);
    
    const mealPrice = jsonObj.filter(meal => {
      return meal.Price < maxPrice;
    });
    res.send(mealPrice);
  };  


module.exports = max_priceRouter;