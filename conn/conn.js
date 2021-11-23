const mongoose = require('mongoose');

const Conn = (url, user, pass, data) => {
    mongoose.connect(`${url}/${data}`, {
        user: user,
        pass: pass,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('MongoDB Connection OK');
    }).catch(err => console.error('Connection error!', err));
}


module.exports = Conn