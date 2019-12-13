const jsonObj= require("../data/reservations.json");

// Respond with correspond id
  const reservations_idRouter =  (req, res) => {
    const {id} = (req.params);
    console.log(req.params);
    const reservation_id = parseInt(id);
    const reservationId = jsonObj.filter(meal => {
      return meal.id === reservation_id;
    });
    res.send(reservationId);
  };  


module.exports = reservations_idRouter;