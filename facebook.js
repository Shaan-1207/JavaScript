				//Exersice: Facebook 1.0

//1.0: Create data-base, using object and array.
//----------------------------------------				
var database=[
	{
		username: "Shahid",
		password: "123"
	}
];

var newsFeed=[
	{
		username: "Sam",
		timeline: "Dev is kool"
	},
	{
		username: "Prince",
		timeline: "Js is so Koooool"
	}
];

//2.0: Create a login prompt
//---------------------
var userNamePrompt= prompt("What's your username?");
var passwordPrompt= prompt("What's your password");

//3.0: Create a sign-in function using JS
//---------------------------------------
function signIn(user, password){
	if (user===database[0].username && password===database[0].password){
		console.log(newsFeed)
	}else {
		alert("Sorry, Incorrect username & password");
	}
}

signIn(userNamePrompt, passwordPrompt);

