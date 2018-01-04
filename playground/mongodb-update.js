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

//   const col = client.db(dbName).collection('Todos').findOneAndUpdate({
//     _id: new ObjectID ('5a4cb7af2e771d901b13551a')
//   }, {
//     $set : {
//       completed: true
//     }
//   }, {
//     returnOriginal: false
//   }).then((result) => {
//   console.log(result);
// });
const col = client.db(dbName).collection('Users').findOneAndUpdate({
  _id: new ObjectID ('5a4c934d9d439b1b20c45af2')
}, {
  $set : {
    Name: 'Ronit'
  },
    $inc: {
      Age: 1
  }
}, {
  returnOriginal: false
}).then((result) => {
console.log(result);
});
  //client.close();
});
