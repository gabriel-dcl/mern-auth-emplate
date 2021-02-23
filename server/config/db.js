// Our connection with database

const mongoose = require('mongoose');

const connectDB = async () => {
  mongoose.connect('mongodb+srv://admin:EdcRfv78@coursoc.84ozh.mongodb.net/CoursOC?retryWrites=true&w=majority',
      { useNewUrlParser: true,
        useUnifiedTopology: true })
      .then(() => console.log('Connexion à MongoDB réussie !'))
      .catch(() => console.log('Connexion à MongoDB échouée !'))
}

module.exports = connectDB;