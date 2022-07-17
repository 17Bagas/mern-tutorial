const mongoose = require('mongoose')
const goalSchema = mongoose.Schema (
    {
        text: {
            type: String,
            require: (true, 'Please add a text value')
        },
    },
    {
        timestamps: true,
    }
)
//user: {
//    type: mongoose.Schema.Types.ObjectId,
//    require: True,
//    ref: "Users",
//},


module.exports = mongoose.model('Goals',goalSchema)