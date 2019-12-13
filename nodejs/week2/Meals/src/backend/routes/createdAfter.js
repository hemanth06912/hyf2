const jsonObj= require("../data/meals.json");

// Respond with correspond id
  const createdAfterRouter =  (req, res) => {
    const date = req.params;
    console.log(req.params);
    const givenDate = new date(date);
    const actDate = jsonObj.map(date=> {
      date.createdAt 
    });
    if (givenDate > actDate){
      return "no searched data";
    } else 
    if(actDate >givenDate){
      return actDate;
    }
  };  


module.exports = createdAfterRouter;