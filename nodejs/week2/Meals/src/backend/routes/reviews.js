const jsonObj= require("../data/reviews.json");

const reviewsRouter = (req,res)=>{
    console.log(jsonObj);
    res.send(jsonObj);     
};

module.exports = reviewsRouter;