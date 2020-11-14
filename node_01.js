const express = require('express');
const bodyparser = require('body-parser');
const ejs = require('ejs');
const fs = require('fs');
const static = require('serve-static');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyparser.urlencoded({extended: false}));

const router = express.Router();

app.use(static(path.join(__dirname, 'public')));

let header = fs.readFileSync('header.ejs', 'utf-8');
let footer = fs.readFileSync('footer.ejs', 'utf-8');
let quick = fs.readFileSync('quick.ejs', 'utf-8');

router.route('/').get((req, res) => {
    let index = fs.readFileSync('index.ejs', 'utf-8');
    let html = ejs.render(index, {header: ejs.render(header), footer: ejs.render(footer), quick: ejs.render(quick)});
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    res.end(html);
});

router.route('/login').get((req, res) => {
    let login = fs.readFileSync('login.ejs', 'utf-8');
    let html = ejs.render(login, {footer: ejs.render(footer)});
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    res.end(html);
}); 

router.route('/join').get((req, res) => {
    let join = fs.readFileSync('join.ejs', 'utf-8');
    let html = ejs.render(join, {header: ejs.render(header), footer: ejs.render(footer), quick: ejs.render(quick)});
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    res.end(html);
}); 

router.route('/notice/list').get((req, res) => {
    let notice_list = fs.readFileSync('notice_list.ejs', 'utf-8');
    let html = ejs.render(notice_list, {header: ejs.render(header), footer: ejs.render(footer), quick: ejs.render(quick)});
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    res.end(html);
}); 

router.route('/notice/view').get((req, res) => {
    let notice_view = fs.readFileSync('notice_view.ejs', 'utf-8');
    let html = ejs.render(notice_view, {header: ejs.render(header), footer: ejs.render(footer), quick: ejs.render(quick)});
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    res.end(html);
}); 

router.route('/program').get((req, res) => {
    let program = fs.readFileSync('program.ejs', 'utf-8');
    let html = ejs.render(program, {header: ejs.render(header), footer: ejs.render(footer), quick: ejs.render(quick)});
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    res.end(html);
}); 

app.use('/', router);
app.all('*', (req, res) => { 
    res.status(404).send('<h2>페이지를 찾을 수 없습니다.</h2>');
});

app.listen(port, () => {
    console.log('Server listening on port : ' + port);
});
