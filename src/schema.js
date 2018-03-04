import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt
} from 'graphql';

const SliderType = new GraphQLObjectType({
    name: 'SliderType',
    fields: {
        id: {
           type: new GraphQLNonNull(GraphQLID),
        },
        flag: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        img: {
            type: GraphQLString,
        },
        articleId: {
            type: GraphQLInt
        }
    }
})
const ArticleType = new GraphQLObjectType({
    name: 'ArticleType',
    fields: {
        id: {
           type: new GraphQLNonNull(GraphQLInt),
        },
        title: {
            type: new GraphQLNonNull(GraphQLString),
        },
        sort: {
            type: GraphQLString,
        },
        subSort: {
            type: GraphQLString,
        },
        time: {
            type: GraphQLString,
        },
        publisher: {
            type: GraphQLString,
        },
        content: {
            type: GraphQLString,
        },
        count: {
            type: GraphQLInt,
        },
        img: {
            type: GraphQLString,
        },
        sliderFlag: {
            type: GraphQLInt
        }
    }
})

const PeopleType = new GraphQLObjectType({
    name: 'PeopleType',
    fields: {
        id: {
            type: GraphQLInt,
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        class: {
            type: new GraphQLNonNull(GraphQLString),
        },
        profession: {
            type: GraphQLString,
        },
        gender: {
            type: GraphQLString,
        },
        title: {
            type: GraphQLString,           
        },
        office: {
            type: GraphQLString,
        },
        supervisor: {
            type: GraphQLString,
        },
        supervisorId: {
            type: GraphQLInt,
        },
        phone: {
            type: GraphQLString,
        },
        email: {
            type: GraphQLString,
        },
        position: {
            type: GraphQLString,
        },
        degree: {
            type: GraphQLString,
        },
        professionalTitle: {
            type: GraphQLString,
        },
        area: {
            type: GraphQLString,
        },
        interesting: {
            type: GraphQLString,
        },
        introduce: {
            type: GraphQLString,
        },
        researchField: {
            type: GraphQLString,
        },
        project: {
            type: GraphQLString,
        },
        achevement: {
            type: GraphQLString,
        },
        activity: {
            type: GraphQLString,
        },
        papers: {
            type: GraphQLString,
        },
        reports: {
            type: GraphQLString,
        },
        link: {
            type: GraphQLString,
        },
        img: {
            type: GraphQLString,
        }
    }
})
export { SliderType, PeopleType, ArticleType };