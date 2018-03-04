'use strict';

var _graphql = require('graphql');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _querySchema = require('./querySchema');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = new _graphql.GraphQLSchema({
    query: _querySchema.EntryType
});

var app = (0, _express2.default)();

app.use('/graphql', (0, _expressGraphql2.default)({
    schema: schema,
    graphiql: true
}));

app.listen(4000);