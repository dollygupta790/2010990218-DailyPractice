const mongoose = require("mongoose");

mongoose.set("strictQuery" , true);

mongoose.connect('mongodb://localhost:27017/matrimonial-Website')
.then(() => {
    console.log("Connection Successful!");
}).catch((err) => {
    console.log(err);
}); 