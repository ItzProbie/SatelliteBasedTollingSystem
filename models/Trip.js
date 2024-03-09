const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({

    vehicleType:{
        type : String,
        default : "2AxlesAuto",
        enum : [
            "2AxlesAuto",
            "3AxlesAuto",
            "4AxlesAuto",
            "2AxlesDualTire",
            "3AxlesDualTire",
            "4AxlesDualTire",
            "2AxlesTruck",
            "3AxlesTruck",
            "4AxlesTruck",
            "5AxlesTruck",
            "6AxlesTruck",
            "7AxlesTruck",
            "8AxlesTruck",
            "9AxlesTruck",
            "2AxlesBus",
            "3AxlesBus",
            "4AxlesBus",
            "2AxlesMotorcycle",
            "3AxlesMotorcycle",
            "2AxlesRv",
            "3AxlesRv",
            "4AxlesRv",
            "2AxlesTNC",
            "2AxlesTNCPool",
            "2AxlesTaxi",
            "2AxlesTaxiPool",
            "Carpool2",
            "Carpool3"
          ]
    },
    cashCost:{
        type : Number,
        required : true
    },
    tagCost:{
        type : Number
    },
    routes:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Route"
        }
    ]


    

},{ timestamps : true });

module.exports = mongoose.model("Trip" , tripSchema);