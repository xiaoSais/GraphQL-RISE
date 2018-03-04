import mysql from 'mysql';
const pool = mysql.createPool({
  connectionLimit : 10,
  host     : 'xxx',
  user     : 'xxx',
  password : 'xxx',
  database : 'xxx',
});


export function fetchSlider() {
    return new Promise((resolve)=>{
        pool.query('SELECT * FROM  rise_slider_picture', function (error, results, fields) {
            if (error) throw error;
            resolve(results);
        });
    })
} 

 function fetchTeacher() {
    return new Promise((resolve) => {
        pool.query('SELECT * FROM  RiseUserEng', function (error, results, fields) {
            if (error) throw error;
            const res = results.map(i => {
                i.id = i.ID;
                delete(i.ID);
                return i
            })
            resolve(res);
        })
    })
}

 function fetchStudent() {
    return new Promise((resolve) => {
        pool.query('SELECT * FROM  rise_student', function (error, results, fields) {
            if (error) throw error;
            const res = results.map(i => {
                i.project = i.projects;
                i.papers = i.publications;
                i.activity = i.activities;
                i.status === 'undergraduate' ? i.class = 'xsUnder' : i.class ='zxxs';
                delete(i.projects);
                delete(i.publications);
                delete(i.activities);
                return i;
            });
            resolve(res);
        })
    })
}

export function fetchPeople() {
    return Promise.all([fetchStudent(), fetchTeacher()]);
} 

export function fetchArticle() {
    return new Promise((resolve) => {
        pool.query('SELECT * FROM  rise_artcle ', function (error, results, fields) {
            if (error) throw error;
            const res = results.map(i => {
                i.id = i.ID;
                i.subSort = i['sub_class'];
                i.count = i.browseCounts;
                i.img = i.titleimg;
                i.sort = i.class;
                delete(i['sub_class']);
                delete(i.browseCounts);
                delete(i.titleimg);
                delete(i.ID);
                delete(i.class);
                return i
            })
            resolve(res);
        })
    })
}



