const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    coordinate:{
        latitude : { 
            type: Number, 
            required: true
        },
        longitude : { 
            type: Number, 
            required: true
        }
    },
    photo:{
        type: String,
        required: true
    },
    description: {
        overview : {
            type: String,
            required: true
        },
        historical_significance: { 
            type: String 
        },
        architectural_features: { 
            type: String 
        },
        visitor_information: {
            hours: { 
                type: String 
            },
            entry_fee: { 
                type: String 
            }
        },
        interesting_facts: { 
            type: String 
        }
    }
})

module.exports = mongoose.model('Location', locationSchema)