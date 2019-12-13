const jsonObj= require("../data/meals.json");

// Respond with correspond id
  const meals_idRouter =  (req, res) => {
    const {id} = (req.params);
    console.log(req.params);
    const meal_id = parseInt(id);
    const mealId = jsonObj.filter(meal => {
      return meal.id === meal_id;
    });
    res.send(mealId);
  };  


module.exports = meals_idRouter;
