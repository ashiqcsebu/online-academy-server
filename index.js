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
    res.send(courseInfo);
});

app.get('/courses/:id' , (req , res)=>{
    const id = req.params.id;
    const course_details = courseInfo.find(course_detail => course_detail.category_id === id);
    res.send(course_details);
});

app.listen(port, () => {
   console.log('Server running on port', port) ;
});

