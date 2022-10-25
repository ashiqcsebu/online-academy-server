const express = require('express')
const app = express();
 const cors = require('cors')
const port = process.env.PORT || 5000 ;

 app.use(cors())

const courses =require('./data/courses.json');
 const courseInfo = require('./data/courseInfo.json');


app.get('/courses', (req, res)=>{
   res.send(courses);
 });

app.get('/course-categories', (req, res)=>{
    res.send(coursesInfo);
});

app.get('/course-info/:id' , (req , res)=>{
    const id = req.params.id;
    if(id === '08'){
        res.send(courseInfo)
    }
    const category_news = courseInfo.filter(n => n.category_id === id);
    res.send(category_news);
});

// app.get('/course/:id' , (req , res)=>{

//     const id = req.params.id ;
//     const selectedNews = courseInfo.find(n => n._id === id);
//     res.send(selectedNews);
// });

app.listen(port, () => {
   console.log('Server running on port', port) ;
});

