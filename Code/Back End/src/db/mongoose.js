const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/black-market', {
    useNewUrlParser: true,
    useCreateIndex: true
});
