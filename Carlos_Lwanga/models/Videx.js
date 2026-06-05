const mongoose = require("mongoose");
const VidexSchema = new mongoose.Schema({
    name: {
        type: String
    },
        Quality: {
        type: String
    }, 
    Date: {
        type: Number
    }, 
    Thumbnail: {
        type: Number
    },
    color: {
        type: String
    },
    ID: {
        type: String
    }

});

module.exports = mongoose.model("Videos", VidexSchemaSchema)