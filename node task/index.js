const { log } = require('console');
const fs = require('fs');

const users = [
    {"firstName": "John", "lastName": "Doe", "birthYear": 1970,"passed":2008},
    {"firstName": "mohamed", "lastName": "saad", "birthYear": 1980,"passed":2018},
    {"firstName": "michael", "lastName": "levy", "birthYear": 1950,"passed":2020},
    {"firstName": "sean", "lastName": "Dyche", "birthYear": 1999,"passed":2010},
    {"firstName": "jackie", "lastName": "robertson", "birthYear": 1990,"passed":2018},
    {"firstName": "mady", "lastName": "kroos", "birthYear": 1980,"passed":2019}
]
const userJSON = JSON.stringify(users,null,2);

fs.writeFileSync('test.json',userJSON,'utf-8');


const readData = fs.readFileSync('test.json','utf-8');

const parsedData = JSON.parse(readData);

console.log(parsedData);

fs.unlinkSync('test.json');

