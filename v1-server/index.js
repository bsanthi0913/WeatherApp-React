const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');
const cors = require("cors");



const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'root',
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
				response.status(200).json({message: "success"});
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