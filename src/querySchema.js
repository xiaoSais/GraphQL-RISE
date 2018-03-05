import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLList,
    GraphQLInt
} from 'graphql';
import { SliderType, PeopleType, ArticleType } from './schema';
import { fetchSlider, fetchPeople, fetchArticle } from './dataBase';
let data ={
    slider: [],
    people: [],
    article: []
}

fetchSlider()
    .then(res => { 
        data.slider =  res;
    })
    .catch(err => {
        console.log(err);
    })

fetchPeople()
    .then(res => {
        data.people = [... res[0], ...res[1]];
    })
    .catch(err => console.log(err));

fetchArticle()    
    .then(res => {
        data.article = res;
    })
    .catch(err => console.log(err));

const EntryType = new GraphQLObjectType({
    name: 'EntryType',
    fields: {
        sliderGroup: {
            type: new GraphQLList(SliderType),
            resolve: () => data.slider
        },
        peopleList: {
            type: new GraphQLList(PeopleType),
            args: {
                sort: {
                    type:GraphQLString
                }
            },
            resolve: (peopleList, {sort}) => {
                return !sort ? data.people : data.people.filter(i => i.class === sort);
            }
        },
        people: {
            type: PeopleType,
            args: {
                sort: {
                    type: GraphQLString 
                },
                id: {
                    type: GraphQLInt
                }
            },
            resolve: (people, { sort, id }) => {
                return data.people.filter(i => i.id === id && i.class === sort)[0]
            },
        },
        articleList: {
            type: new GraphQLList(ArticleType),
            args: {
                sort: {
                    type: GraphQLString
                },
                subSort: {
                    type: GraphQLString
                }
            },
            resolve: (articleList, {sort, subSort}) => {
                return !sort ? data.article : !subSort ? data.article.filter( i=> i.sort === sort) 
                            : data.article.filter(i=> i.sort === sort && i.subSort === subSort)
            }
        },
        article: {
            type: ArticleType,
            args: {
                id: {
                    type: GraphQLInt
                }
            },
            resolve: (article, {id}) => data.article.filter(i => i.id === id)[0]
        }
    }
});

export { EntryType };