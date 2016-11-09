//my biography
var bio = {
	"name" : "Jae Min Baek",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "650-555-5555",
		"email" : "jbaek7023@gmail.com",
		"github" : "jbaek7023",
		"twitter" : "jbaek", 
		"location" : "Seoul, South Korea"
	},
	"welcomeMessage" : "What's up!",
	"skills" : [
		"Java", "C", "Ruby on Rails", "MongoDB"
	],
	"bioPic" : "images/my_profile.jpg"
	"display" : display();
}

//my education
var education = {
	"schools" : [
		{
			"name" : "Georgia Tech",
			"city" : "Atlanta, GA, USA",
			"degree" : "BS",
			"major" : ["Computer Science"]
		},
		{
			"name" : "Highline College",
			"city" : "Des Moines, WA, USA",
			"degree" : "AS",
			"major" : ["Computer Science"]
		}
	]
}

//my work
var work = {
	"jobs": [
	{
		"employer" : "Republic of Korea Army",
		"title" : "Enlisted Man",
		"period" : "2015/02/09 - 2015/11/08",
		"description" : "Discharged with no issue"
	},
	{
		"employer" : "Highline College",
		"name" : "Math Tutor",
		"period" : "2013/01/09 - 2013/06/15",
		"description" : "taught Multicalculus level Mathematics" 
	}
	]
}

//my project
var projects = {
	"projects" : [{
		"title" : "Book Swap",
		"images" : [],
		"dates" : "2014/01/01",
		"description": "Book Swap Webpage for Georgia Tech Student"
	},	
	{	
		"title" : "CS4400H",
		"images" : [],
		"dates" : "2013/01/01",
		"description": "Data Mining project with MongoDB"
	}]	
}		


/*function takes no parameter*/
function display(){

}

//append name
var name="JaeMin Baek"
//name = inName(name);
var formattedName = HTMLheaderName.replace("%data%", name);

var role="Front End Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
//append img
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", "Hello, I'm Front End ninja");
$("#header").append(formattedWelcomeMsg);

var formattedImg = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(formattedImg);


 //append mobile, email, github, twitter location


if(bio.skills.length >0) {
	//append skill start
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);


}
//Contact Information
var mob = "010-5309-2224";
var contact = HTMLmobile.replace("%data%", mob);
$("#topContacts").append(contact); 

var em = "jbaek7023@gmail.com"
var email = HTMLemail.replace("%data%", em);
$("#topContacts").append(email); 


var tw = "noTwitter"
var twitter = HTMLtwitter.replace("%data%", tw);
$("#topContacts").append(twitter); 

var git = "jbaek7023@github.io"
var github = HTMLblog.replace("%data%", git);
$("#topContacts").append(github); 

var blo = "jbaek7023.github.io/MyWebpage"
var blog = HTMLmobile.replace("%data%", blo);
$("#topContacts").append(blog); 

/**HEADING FINISHED HERE*/


function displayWork() {
	//code goes here
	for(job in work.jobs) {
		//create new div for work experience
		$("#workExperience").append(HTMLworkStart);
		//concat employer and title
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDates);
	}
}
displayWork(); 



/*encapsulation*/
projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length>0) {
			for(image in projects.projects[project].imgages) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
projects.display();

$("#mapDiv").append(googleMap);








/*Footer*/
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0]+ " " + name[1];
}
$("#main").append(internationalizeButton);

/*Analytics mouse click*/
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});














