'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArticleType = exports.PeopleType = exports.SliderType = undefined;

var _graphql = require('graphql');

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
var ArticleType = new _graphql.GraphQLObjectType({
    name: 'ArticleType',
    fields: {
        id: {
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt)
        },
        title: {
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
        },
        sort: {
            type: _graphql.GraphQLString
        },
        subSort: {
            type: _graphql.GraphQLString
        },
        time: {
            type: _graphql.GraphQLString
        },
        publisher: {
            type: _graphql.GraphQLString
        },
        content: {
            type: _graphql.GraphQLString
        },
        count: {
            type: _graphql.GraphQLInt
        },
        img: {
            type: _graphql.GraphQLString
        },
        sliderFlag: {
            type: _graphql.GraphQLInt
        }
    }
});

var PeopleType = new _graphql.GraphQLObjectType({
    name: 'PeopleType',
    fields: {
        id: {
            type: _graphql.GraphQLInt
        },
        name: {
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
        },
        class: {
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
        },
        profession: {
            type: _graphql.GraphQLString
        },
        gender: {
            type: _graphql.GraphQLString
        },
        title: {
            type: _graphql.GraphQLString
        },
        office: {
            type: _graphql.GraphQLString
        },
        supervisor: {
            type: _graphql.GraphQLString
        },
        supervisorId: {
            type: _graphql.GraphQLInt
        },
        phone: {
            type: _graphql.GraphQLString
        },
        email: {
            type: _graphql.GraphQLString
        },
        position: {
            type: _graphql.GraphQLString
        },
        degree: {
            type: _graphql.GraphQLString
        },
        professionalTitle: {
            type: _graphql.GraphQLString
        },
        area: {
            type: _graphql.GraphQLString
        },
        interesting: {
            type: _graphql.GraphQLString
        },
        introduce: {
            type: _graphql.GraphQLString
        },
        researchField: {
            type: _graphql.GraphQLString
        },
        project: {
            type: _graphql.GraphQLString
        },
        achevement: {
            type: _graphql.GraphQLString
        },
        activity: {
            type: _graphql.GraphQLString
        },
        papers: {
            type: _graphql.GraphQLString
        },
        reports: {
            type: _graphql.GraphQLString
        },
        link: {
            type: _graphql.GraphQLString
        },
        img: {
            type: _graphql.GraphQLString
        }
    }
});
exports.SliderType = SliderType;
exports.PeopleType = PeopleType;
exports.ArticleType = ArticleType;