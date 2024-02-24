const express = require("express");
const router = express.Router();
const{ customer } = require('../modal/modal')

router.get('/' , (req,res) => {
    res.render('hi')
})

router.post('/sign-up' , (req,res) => {

    //console.log(req.body);
   const customers  = new customer ({
    name : req.body.Name,
    address : req.body.addrress,
    Email : req.body.email,
    Password : req.body.password,
    City: req.body.city,
    Phoneno: req.body.phoneNo
   });

   customers.save();

   res.render('hii');
  
});


module.exports = router;