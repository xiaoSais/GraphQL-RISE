'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EntryType = undefined;

var _graphql = require('graphql');

var _schema = require('./schema');

var _dataBase = require('./dataBase');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var data = {
    slider: [],
    people: [],
    article: []
};

(0, _dataBase.fetchSlider)().then(function (res) {
    data.slider = res;
}).catch(function (err) {
    console.log(err);
});

(0, _dataBase.fetchPeople)().then(function (res) {
    data.people = [].concat(_toConsumableArray(res[0]), _toConsumableArray(res[1]));
}).catch(function (err) {
    return console.log(err);
});

(0, _dataBase.fetchArticle)().then(function (res) {
    data.article = res;
}).catch(function (err) {
    return console.log(err);
});

var EntryType = new _graphql.GraphQLObjectType({
    name: 'EntryType',
    fields: {
        hello: {
            type: _graphql.GraphQLString,
            resolve: function resolve() {
                return 'world';
            }
        },
        sliderGroup: {
            type: new _graphql.GraphQLList(_schema.SliderType),
            resolve: function resolve() {
                return data.slider;
            }
        },
        peopleList: {
            type: new _graphql.GraphQLList(_schema.PeopleType),
            args: {
                sort: {
                    type: _graphql.GraphQLString
                }
            },
            resolve: function resolve(peopleList, _ref) {
                var sort = _ref.sort;

                return !sort ? data.people : data.people.filter(function (i) {
                    return i.class === sort;
                });
            }
        },
        people: {
            type: _schema.PeopleType,
            args: {
                sort: {
                    type: _graphql.GraphQLString
                },
                id: {
                    type: _graphql.GraphQLInt
                }
            },
            resolve: function resolve(people, _ref2) {
                var sort = _ref2.sort,
                    id = _ref2.id;

                return data.people.filter(function (i) {
                    return i.id === id && i.class === sort;
                })[0];
            }
        },
        articleList: {
            type: new _graphql.GraphQLList(_schema.ArticleType),
            args: {
                sort: {
                    type: _graphql.GraphQLString
                },
                subSort: {
                    type: _graphql.GraphQLString
                }
            },
            resolve: function resolve(articleList, _ref3) {
                var sort = _ref3.sort,
                    subSort = _ref3.subSort;

                return !sort ? data.article : !subSort ? data.article.filter(function (i) {
                    return i.sort === sort;
                }) : data.article.filter(function (i) {
                    return i.sort === sort && i.subSort === subSort;
                });
            }
        },
        article: {
            type: _schema.ArticleType,
            args: {
                id: {
                    type: _graphql.GraphQLInt
                }
            },
            resolve: function resolve(article, _ref4) {
                var id = _ref4.id;
                return data.article.filter(function (i) {
                    return i.id === id;
                })[0];
            }
        }
    }
});

exports.EntryType = EntryType;