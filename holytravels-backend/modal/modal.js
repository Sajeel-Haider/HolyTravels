//Define customers schemma 
const Customer = new mongoose.Schema (
    {
        Name : String,
        address : String,
        Email : String,
        Password : String,
        City: String,
        Phoneno: Number
}) ;

//create shops model
const customer = mongoose.model('customer', Customer);

module.exports = {
 customer
}
