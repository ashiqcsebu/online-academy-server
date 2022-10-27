const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const researchField = require('./data/research-field.json');
const research = require('./data/research.json');
const checkout = require('./data/research.json');

app.get('/', (req, res) => {
    res.send('Learning api running');
});

app.get('/research-field', (req, res) => {
    res.send(researchField);
});

app.get('/field/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(research);
    }
    else{
        const field_research =  research.filter(r => r.field_id === id);
        res.send(field_research);
    }
});

app.get('/checkout', (req, res) =>{
    res.send(checkout);
});

app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const selectedCheckout = checkout.find(c => c._id === id);
    res.send(selectedCheckout)

});

app.get('/research', (req, res) =>{
    res.send(research);
});

app.get('/research/:id', (req, res) => {
    const id = req.params.id;
    const selectedResearch = research.find(r => r._id === id);
    res.send(selectedResearch)

});

app.listen(port, () => {
    console.log('Learning Server running on port', port);
})


















// const express = require('express');
// const app = express();
// const cors = require('cors');
// const port = process.env.PORT || 5000;

// app.use(cors());

// const researchField = require('./data/research-field.json');
// const research = require('./data/research.json');

// app.get('/', (req, res) => {
//     res.send('Learning api running');
// });

// app.get('/research-field', (req, res) => {
//     res.send(researchField);
// });

// app.get('/field/:id', (req, res) => {
//     const id = req.params.id;
//         const field_research =  research.filter(r => r.field_id === id);
//         res.send(field_research);
    
// });

// app.get('/research', (req, res) =>{
//     res.send(research);
// });

// app.get('/research/:id', (req, res) => {
//     const id = req.params.id;
//     const selectedResearch = research.find(r => r._id === id);
//     res.send(selectedResearch)

// });

// app.listen(port, () => {
//     console.log('Learning Server running on port', port);
// })