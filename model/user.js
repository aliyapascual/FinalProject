const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
},
{collection: 'users-kkn'}
)

const model = mongoose.model('UserSchema', UserSchema)

module.exports = model