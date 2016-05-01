/*
 Copyright 2016 Packt Publishing

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

const data = require('./data');

function Collection(database, collection) {
  this.database = database;
  this.collection = collection;
}

Collection.create = function(databaseName, collectionName) {
  return data.create( databaseName )
    .then(function(database) {
      const collection = data.getCollection(database, collectionName);
      return new Collection(database, collection);
    });
};

Collection.tryGetId = function(id) {
  return data.tryGetId(id);
};

Collection.getId = function(id) {
  return data.getId(id);
};

Collection.prototype = {

  save: function(document, options) {
    return data.save(this.database, this.collection, document, options);
  },

  update: function(query, update, options) {
    return data.update(this.database, this.collection, query, update, options);
  },

  insert: function(document, options) {
    return data.insert(this.database, this.collection, document, options);
  },

  findById: function(id) {
    return data.findById(this.database, this.collection, id);
  },

  findOne: function(query, projection, options) {
    return data.findOne(this.database, this.collection, query, projection, options);
  },

  find: function(query, projection, options) {
    return data.find(this.database, this.collection, query, projection, options);
  },

  findAndModify: function(query, doc, options) {
    return data.findAndModify(this.database, this.collection, query, sort, doc, options);
  },

  findArray: function(query, projection, options) {
    return data.findArray(this.database, this.collection, query, projection, options);
  },

  remove: function(query, justOne) {
    return data.remove(this.database, this.collection, query, justOne);
  },

  removeOne: function(query = { }) {
    return data.removeOne(this.database, this.collection, query);
  },

  count: function(query, projection, options) {
    return data.count(this.database, this.collection, query, projection, options);
  },

  tryGetId: function(id) {
    return data.tryGetId(id);
  },

  getId: function(id) {
    return data.getId(id);
  }
};

exports = module.exports = Collection;