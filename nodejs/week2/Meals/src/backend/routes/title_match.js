const jsonObj= require("../data/meals.json");

  const title_matchRouter =  (req, res) => {
    const {title} = req.params;
    console.log(req.params);
    
    const mealTitle = jsonObj.filter(meal => {
      return meal.title === title;
    });
    res.send(mealTitle);
  };  


module.exports = title_matchRouter;