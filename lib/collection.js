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
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var data = require('./data');

var Collection = function () {
  _createClass(Collection, null, [{
    key: 'create',
    value: function create(databaseName, collectionName) {
      return data.create(databaseName).then(function (database) {
        var collection = data.getCollection(database, collectionName);
        return new Collection(database, collection);
      });
    }
  }, {
    key: 'tryGetId',
    value: function tryGetId(id) {
      return data.tryGetId(id);
    }
  }, {
    key: 'getId',
    value: function getId(id) {
      return data.getId(id);
    }
  }]);

  function Collection(database, collection) {
    _classCallCheck(this, Collection);

    this.database = database;
    this.collection = collection;
  }

  _createClass(Collection, [{
    key: 'save',
    value: function save(document) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      return data.save(this.database, this.collection, document, options);
    }
  }, {
    key: 'update',
    value: function update(query, _update) {
      var options = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

      return data.update(this.database, this.collection, query, _update, options);
    }
  }, {
    key: 'insert',
    value: function insert(document) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      return data.insert(this.database, this.collection, document, options);
    }
  }, {
    key: 'findById',
    value: function findById(id) {
      return data.findById(this.database, this.collection, id);
    }
  }, {
    key: 'findOne',
    value: function findOne() {
      var query = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      var projection = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
      var options = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

      return data.findOne(this.database, this.collection, query, projection, options);
    }
  }, {
    key: 'find',
    value: function find() {
      var query = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      var projection = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
      var options = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

      return data.find(this.database, this.collection, query, projection, options);
    }
  }, {
    key: 'findAndModify',
    value: function findAndModify() {
      var query = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      var sort = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
      var doc = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
      var options = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

      return data.findAndModify(this.database, this.collection, query, sort, doc, options);
    }
  }, {
    key: 'findArray',
    value: function findArray() {
      var query = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      var projection = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
      var options = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

      return data.findArray(this.database, this.collection, query, projection, options);
    }
  }, {
    key: 'remove',
    value: function remove() {
      var query = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      var justOne = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      return data.remove(this.database, this.collection, query, justOne);
    }
  }, {
    key: 'removeOne',
    value: function removeOne() {
      var query = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return data.removeOne(this.database, this.collection, query);
    }
  }, {
    key: 'count',
    value: function count() {
      var query = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      var projection = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
      var options = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

      return data.count(this.database, this.collection, query, projection, options);
    }
  }, {
    key: 'tryGetId',
    value: function tryGetId(id) {
      return data.tryGetId(id);
    }
  }, {
    key: 'getId',
    value: function getId(id) {
      return data.getId(id);
    }
  }]);

  return Collection;
}();

exports = module.exports = Collection;