'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchSlider = fetchSlider;
exports.fetchPeople = fetchPeople;
exports.fetchArticle = fetchArticle;

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pool = _mysql2.default.createPool({
    connectionLimit: 10,
    host: 'sql.h238.vhostgo.com',
    user: 'liubocqswu',
    password: 'rise123456',
    database: 'liubocqswu'
});

function fetchSlider() {
    return new Promise(function (resolve) {
        pool.query('SELECT * FROM  rise_slider_picture', function (error, results, fields) {
            if (error) throw error;
            resolve(results);
        });
    });
}

function fetchTeacher() {
    return new Promise(function (resolve) {
        pool.query('SELECT * FROM  RiseUserEng', function (error, results, fields) {
            if (error) throw error;
            var res = results.map(function (i) {
                i.id = i.ID;
                delete i.ID;
                return i;
            });
            resolve(res);
        });
    });
}

function fetchStudent() {
    return new Promise(function (resolve) {
        pool.query('SELECT * FROM  rise_student', function (error, results, fields) {
            if (error) throw error;
            var res = results.map(function (i) {
                i.project = i.projects;
                i.papers = i.publications;
                i.activity = i.activities;
                i.status === 'undergraduate' ? i.class = 'xsUnder' : i.class = 'zxxs';
                delete i.projects;
                delete i.publications;
                delete i.activities;
                return i;
            });
            resolve(res);
        });
    });
}

function fetchPeople() {
    return Promise.all([fetchStudent(), fetchTeacher()]);
}

function fetchArticle() {
    return new Promise(function (resolve) {
        pool.query('SELECT * FROM  rise_artcle ', function (error, results, fields) {
            if (error) throw error;
            console.log('teacherRise');
            var res = results.map(function (i) {
                i.id = i.ID;
                i.subSort = i['sub_class'];
                i.count = i.browseCounts;
                i.img = i.titleimg;
                i.sort = i.class;
                delete i['sub_class'];
                delete i.browseCounts;
                delete i.titleimg;
                delete i.ID;
                delete i.class;
                return i;
            });
            resolve(res);
        });
    });
}