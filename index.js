const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/mongoose_test', { useNewUrlParser: true, useUnifiedTopology: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection lost'))
db.once('open', function () {
    console.log('we are connected')
})
const someSchema = new mongoose.Schema({
    name: 'String'
})
const TestSchema = mongoose.model('TestSchema', someSchema)
const someData = new TestSchema({ name: 'John Weak' })
console.log('someData', someData)