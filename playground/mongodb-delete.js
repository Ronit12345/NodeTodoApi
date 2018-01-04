//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID();
//console.log(obj);
//var user = {name: 'Ronit', age: 23};
//var {name} = user;
//console.log(name);
const test = require('assert');
const dbName = 'TodoApp';

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // const col = client.db(dbName).collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });
  //deleteOne
  // const col = client.db(dbName).collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });
  //findOneAndDelete
  // const col = client.db(dbName).collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  //deleteMany for Users
  // const col = client.db(dbName).collection('Users').deleteMany({Name: 'Ronit'}).then((result) => {
  //   console.log(result);
  // });
  //findOneAndDelete
  const col = client.db(dbName).collection('Users').findOneAndDelete({
    _id: new ObjectID("5a4cbb802e771d901b13579d")
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });
  //client.close();
});
