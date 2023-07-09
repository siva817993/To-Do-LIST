const express = require('express');
const path=require('path');
const port = 8087;
const db = require('./config/mongoose');
const Task = require('./models/task');

const app = express();

app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', function(req, res){
    const todolist = Task.find({}).exec();
    todolist.then(tasks => {
        res.render('home', {task: tasks});
    }).catch(err => {
        console.log('Error', err);
    });
});

app.post('/create-task', function(req, res){
    let deadline = req.body.date ? req.body.date : 'No deadline';
    let Deadline=req.body.time ? req.body.time :'NO Limit';
    let s=req.body.category ? req.body.category:'NO Category'
    const task = new Task({
        description: req.body.description,
        category: s,
        date: deadline,
        time: Deadline,
    });

    task.save()
        .then(() => {
            console.log('Task created .');
            res.redirect('back');
        })
        .catch(err => {
            console.log('Error', err);
            res.redirect('back');
        });
});

app.get('/delete-task', function(req, res){
    const ids = Object.keys(req.query);

    Task.deleteMany({_id: {$in: ids}})
        .then(() => {
            console.log('Tasks deleted successfully.');
            res.redirect('back');
        })
        .catch(err => {
            console.log('Error', err);
            res.redirect('back');
        });
});

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
    }

    console.log(`Server is running on port : ${port}`);
});
