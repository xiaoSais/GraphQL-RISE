### Graphql_Rise

#### features

* :smile: 使用GraphQL重构了RISE网站的api
* :satisfied: 可以畅快的在Chrome浏览器下体验RISE api的GraphQL查询
* :cry: 这个Repo只做代码托管
* :grin: 隐藏了DateBase.js中的远程数据库账号和密码

#### start

* :stuck_out_tongue: 线上体验查询地址

    ```
    http://120.79.181.46:4000/graphql
    ```

#### useage
    
* 入口查询字段
    
    * people (sort: GraphQLString, id: GraphQLInt)
    * peopleList (sort: GraphQLString)
    * article (id: GraphQLInt)
    * articleList (sort: GraphQLString, subSort: GraphQLString)
    * sloderGroup 

* 查询Case
    * 查询所有学生的的名字,以及id为1的老师的名字，所有可以查询的子字段在schema中均可以找到
    ```
    query {
        peopleList(sort: "zxxs"){
            name
        },
        people(sort: "zxjs", id:1){
            name
        }
    }
    ```
    * 查询轮播图信息

    ``` 
    /*Search*/                                       
    query {
        sliderGroup {
            img
            articleId            
            id
            flag
	    }
    }

    ===>
    
    /*Result*/

    {
        "data": {
            "sliderGroup": [
                {
                    "img": "/upload/summerSchool.jpg",
                    "articleId": 0,
                    "id": "1",
                    "flag": 1
                },
                {
                    "img": "/upload/bijie.jpg",
                    "articleId": 23,
                    "id": "2",
                    "flag": 1
                },
                {
                    "img": "/upload/bijieschool.jpg",
                    "articleId": null,
                    "id": "3",
                    "flag": 1
                }
            ]
        }
    }
    ```
#### toDoList

* :tiger: 只是实现了GraphQL的查询，下一步实现Graphql的数据变更
* :star: http协议转换为https
