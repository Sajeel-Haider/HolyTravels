const express = require("express");
const router = express.Router();

router.get('/' , (req,res) => {
    res.render('hi')
})

router.post('/sign-up' , (req,res) => {

    //console.log(req.body);
   const cuss  = new cus ({
    name : req.body.Name,
    address : req.body.addrress,
    Email : req.body.email,
    Password : req.body.password,
    City: req.body.city,
    Phoneno: req.body.phoneNo
   });

   cuss.save();

   res.redirect('/');
  
});


module.exports = router;