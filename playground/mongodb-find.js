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

    //const col = client.db(dbName).collection('Todos').find().toArray().then((docs) => { // for finding all the items in todo list
  //const col = client.db(dbName).collection('Todos').find({completed: false}).toArray().then((docs) => { // finding through completed status


  // const col = client.db(dbName).collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });
  const col = client.db(dbName).collection('Users').find({Name: 'Ronit'}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch users', err);
  });

  //client.close();
});
