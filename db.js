const mongoose = require("mongoose")
mongoose.connect(process.env.CONNECTION_STRING)
        .then(()=>console.log("Successfully Connected to DB"))
        .catch((err)=>console.error("Error connecting to DB", err));

        