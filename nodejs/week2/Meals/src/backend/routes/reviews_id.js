const jsonObj= require("../data/reviews.json");

// Respond with correspond id
  const reviews_idRouter =  (req, res) => {
    const {id} = req.params;
    console.log(req.params);
    const re_id = parseInt(id);
    const reviewId = jsonObj.filter(meal => {
      return meal.id === re_id;
    });
    res.send(reviewId);
  };  


module.exports = reviews_idRouter;
