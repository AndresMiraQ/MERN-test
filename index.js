const http = require('http'); // commonjs
//import http from 'http'; // esmodules 

const notes = [
    {
        title: 'My next trip',
        body: 'I would like to go to Spain'
    },
    {
        title: 'Habits to work on',
        body: 'Excercise, Sleep, Eat, etc'
    }
];

const app = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(notes));
    });
    
    const PORT = 3001;
    app.listen(PORT);
    console.log(`Server running at http://localhost:${PORT}/`);