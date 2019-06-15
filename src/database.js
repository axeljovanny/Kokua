const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/kokua-db-app', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})

.then(db => console.log('DB is connected'))
.catch(err => console.error(err));