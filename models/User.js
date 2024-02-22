const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// Collection
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});


//to convert to hashed pass
userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        //hj123 - dsfadfadf bascially hasdhed
        user.password = await bcrypt.hash(user.password, 8)
        //wait untile the password is changed
    }
    // this executes the code when the middleware is finished
    next();
});




const User = mongoose.model('User', userSchema)
module.exports = User;