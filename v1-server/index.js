const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');
const cors = require("cors");
const { log } = require('console');



const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'santhi',
	database : 'nodelogin'
});

const app = express();
app.use(cors());

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

app.get("/", (req, res)=> {
    console.log("haha");
    res.send("hello");
})



// // http://localhost:3000/auth
app.post('/login', function(request, response) {
    let email = request.body.email;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (email && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM accounts WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				// request.session.loggedin = true;
				// request.session.username = username;
				// Redirect to home page
                console.log(results[0].username);
				response.status(200).json({message: results[0].username});

			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.post("/register", (req, res) => {
    let email  = req.body.email;
    let name = req.body.name;
    let password =  req.body.password;
    let confirm=  req.body.confirm;

    if(email && name && password && confirm){
        if(password != confirm){
            console.log("----> password not same");
            res.sendStatus(409);
            return;
        }
        
        console.log("inside");
        const sqlSearch = "SELECT * FROM accounts WHERE email = ?";
        const search_query = mysql.format(sqlSearch,[email]);
        const sqlInsert = "INSERT INTO accounts VALUES (0,?,?,?)";
        const insert_query = mysql.format(sqlInsert,[name, password, email]);
        connection.query(search_query, function (error, results, fields){
            if( error) throw error;
            if( results.length != 0){
                console.log("---> user already exists");
                res.sendStatus(409);
            }
            else{
                connection.query(insert_query, (error, results, fields)=> {
                    if( error) throw error;
                    console.log(" ====> createed new user");
                    res.sendStatus(200);
                });
            }
        });

    }

})

// // http://localhost:3000/home
// app.get('/home', function(request, response) {
// 	// If the user is loggedin
// 	if (request.session.loggedin) {
// 		// Output username
//         console.log('Welcome back, ' + request.session.username + '!');
// 		// response.send();
// 	} else {
// 		// Not logged in
//         console.log('Please login to view this page!');
// 		// response.send();
// 	}
// 	response.end();
// });

app.listen(3000, ()=> {
    console.log("listening on port 3000");
});