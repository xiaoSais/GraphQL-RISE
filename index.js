'use strict';

var _graphql = require('graphql');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _dataBase = require('./src/dataBase');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _dataBase.getData)().then(function (res) {
    console.log(res);
}).catch(function (err) {
    console.log(err);
});
var data = [{
    id: 2,
    flag: 3,
    img: '3',
    articleId: 4
}, {
    id: 2,
    flag: 3,
    img: '3',
    articleId: 0
}, {
    id: 2,
    flag: 3,
    img: '3',
    articleId: 0
}];
var SliderType = new _graphql.GraphQLObjectType({
    name: 'SliderType',
    fields: {
        id: {
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        },
        flag: {
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt)
        },
        img: {
            type: _graphql.GraphQLString
        },
        articleId: {
            type: _graphql.GraphQLInt
        }
    }
});
var HelloWorldType = new _graphql.GraphQLObjectType({
    name: 'HelloWorldType',
    fields: {
        hello: {
            type: _graphql.GraphQLString,
            resolve: function resolve() {
                return 'world';
            }
        },
        sliderGroup: {
            type: new _graphql.GraphQLList(SliderType),
            args: {
                id: {
                    type: _graphql.GraphQLInt
                }
            },
            resolve: function resolve(_, _ref) {
                var id = _ref.id;

                return data.filter(function (i) {
                    return i.id === id;
                });
            }
        }
    }
});

var schema = new _graphql.GraphQLSchema({
    query: HelloWorldType
});

var app = (0, _express2.default)();

app.use('/graphql', (0, _expressGraphql2.default)({
    schema: schema,
    graphiql: true
}));

app.listen(4000);
