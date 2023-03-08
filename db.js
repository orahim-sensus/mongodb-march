//creating two functions. 1 for connecting to database. 2 to retrieve the data from database

const { MongoClient } = require("mongodb");

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect("mongodb://127.0.0.1:27017/bookstore")
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  }, // establish connection to DB
  getDb: () => dbConnection, //return that connection to database
};
