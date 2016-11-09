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
	"bioPic" : "images/my_profile.jpg",
	"display" : function() {
		/*Display bio*/
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

		/*display skills*/
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
	}
}
bio.display();

//my education
var education = {
	"schools" : [
		{
			"name" : "Georgia Tech",
			"location" : "Atlanta, GA, USA",
			"degree" : "Bachelor of Science",
			"major" : ["Computer Science"],
			"dates" : "Dec 2013 - Nov 2014",
			"url" : "www.gatech.edu/"
		},
		{
			"name" : "Highline College",
			"location" : "Des Moines, WA, USA",
			"degree" : "Associate of Science - Honors Scholar",
			"major" : ["Computer Science"],
			"dates" : "Sep 2011 - Jun 2013",
			"url" : "www.highline.edu"
		}
	],
	"onlineCourses" : [ 
		{
			"title" : "Front End Nanodegree",
			"school" : "Udacity",
			"dates" : "2016/10/08 - in progress",
			"description" : "boost web programming skill in the subjects of Responsive, Version Control, HTML/CSS, bootstrap, Ajax, jQuery, Javascript, and so on"
		}	
	],
	"display" : 0
}

//my work
var work = {
	"jobs": [
	{
		"employer" : "Republic of Korea Army",
		"title" : "Enlisted Man, Arcraft Assitant Instructor",
		"location" : "Army Aviation School, Nonsan, South Korea",
		"period" : "2015/02/09 - 2016/11/08",
		"description" : "Employed Helicopters such as 500MD, UH-1H, AH-1S, UH-60, BO-105, CH-47 to rear warrant officers and military officers"
	},
	{
		"employer" : "Highline College",
		"name" : "Math Tutor",
		"period" : "2013/01/09 - 2013/06/15",
		"description" : "taught Multicalculus level Mathematics" 
	}
	],
	"display" : 0
}

//my project
var projects = {
	"projects" : [{
		"title" : "Book Swap",
		"dates" : "2014/01/01",
		"description": "Book Swap Webpage for Georgia Tech Student",
		"images" : ["images/noimage.img"]
	},	
	{	
		"title" : "Yeap",
		"dates" : "2013/01/01",
		"description": "Data Mining project with MongoDB",
		"images" : ["images/noimage.img"]
	}],
	"display" : 0
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














