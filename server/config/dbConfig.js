const mongoose = require('mongoose');
const uri = "mongodb://127.0.0.1:27017/mern-pool";

mongoose.connect(uri,
    {
        useUnifiedTopology: true
    }
).then(() =>console.log("Connection successfull"))
 .catch(() => console.log("Connection failed."));
//  .catch(error => console.error.bind(error, "Connection failed."));
// const db = mongoose.connection;
// db.on("error", );
// db.once("open", function () {
//     console.log("Connection successfull");
// });