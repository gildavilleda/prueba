const express = require ('express');
const app = express();

app.set('port',3000);


app.listen(app.get('port'), (rest, req)=>{
    console.log('SERVER RUNNING IN http://localhost:3000');
})