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

  //const col = client.db(dbName).collection('Todos').insertOne({

    //text: 'Something to do',
    //completed: false

  //}, (err, result) => {
    //if(err) {
      //return console.log('Unable to insert todo', err);
    //}
    //console.log(JSON.stringify(result.ops, undefined, 2));
  //});

  //const col1 = client.db(dbName).collection('Users').insertOne({

    //Name: 'Ronit',
    //Age: 23,
    //Location: 'Bangalore'

  //}, (err, result) => {
    //if(err) {
      //return console.log('Unable to insert user', err);
    //}
    //console.log(result.ops[0]._id.getTimestamp());
  //});



  client.close();
});
