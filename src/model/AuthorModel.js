const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://shamilysasi_:kuttusan111@@solnfiles.zzpja.mongodb.net/libraryapp?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;