if(process.env.NODE_ENV == 'production') {
  module.exports = {mongoURI: 'mongodb://danny:danny123@ds245927.mlab.com:45927/vidjot-prod'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}