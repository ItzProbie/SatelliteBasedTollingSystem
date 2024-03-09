const mongoose = require("mongoose");

const routeSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    road : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    lat : {
        type : Number,
        require : true
    },
    lng : {
        type : Number,
        require : true
    },
    cashCost : {
        type : Number,
        required : true
    },
    tagCost : {
        type : Number,
    },


});

module.exports = mongoose.model("Route" , routeSchema);