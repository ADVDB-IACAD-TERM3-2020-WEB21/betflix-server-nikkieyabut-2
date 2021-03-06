/*
  yabut's notes:
    https://mongoosejs.com/docs/guide.html
    https://mongoosejs.com/docs/connections.html
*/

// TODO: Import Mongoose here
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true})


// TODO: Connect to mongo here
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  // we're connected!
})

var movieSchema = new mongoose.Schema({
  title: String,
  // type: String,
  // filename: String 
      /// hindi naman pala nag-connect yung ibang data types ng nasa movies collection :<
})

// TODO: Replace `{}` with actual Movie model
const Movie = mongoose.model('Movie', movieSchema)

const getMovieList = async () => {
  return await Movie.find({})
}

const resolvers = {
    Query: {
      movies: async () =>  {
        const movieList = await getMovieList()
        return movieList
      }
    },
  };
  
export default resolvers;