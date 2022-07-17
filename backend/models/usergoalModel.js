const mongoose = require('mongoose')
const usergoalSchema = mongoose.Schema (
    {
        name: {
            type: String,
            required: [true, "Please add a name"],
        }, 
        text: {
            type: String,
            require: (true, 'Please add a text value')
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('UserGoals',usergoalSchema)