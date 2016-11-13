//my biography
var bio = {
    "name": "Jae Min Baek",
    "role": "Web Developer",
    "contacts": {
        "mobile": "650-555-5555",
        "email": "jbaek7023@gmail.com",
        "github": "jbaek7023",
        "twitter": "jbaek",
        "location": "Seoul, South Korea"
    },
    "welcomeMessage": "Hello, I'm Front End ninja",
    "skills": [
        "Java", "C", "Ruby on Rails", "MongoDB"
    ],
    "bioPic": "images/my_profile.jpg",
    "display": function() {
        /*Display bio*/
        //name = inName(name);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);

        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        //append img
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMsg);

        var formattedImg = HTMLbioPic.replace("%data%", bio.bioPic);
        $("#header").append(formattedImg);

        /*display skills*/
        if (bio.skills.length > 0) {
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

        /*Add contact information*/
        //Contact Information
        var contact = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(contact);

        var email = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(email);

        var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(twitter);

        var github = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(github);

        var blog = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(blog);
    }
};
bio.display();

//my education
var education = {
    "schools": [{
        "name": "Georgia Tech",
        "location": "Atlanta, GA, USA",
        "degree": "Bachelor of Science",
        "major": ["Computer Science"],
        "dates": "Dec 2013 - Nov 2014",
        "url": "https://www.gatech.edu/"
    }, {
        "name": "Highline College",
        "location": "Des Moines, WA, USA",
        "degree": "Associate of Science",
        "major": ["Computer Science"],
        "dates": "Sep 2011 - Jun 2013",
        "url": "https://www.highline.edu"
    }],
    "onlineCourses": [{
        "title": "Front End Nanodegree",
        "school": "Udacity",
        "dates": "Oct 2016 - in progress",
        "description": "boost web programming skill in the subjects of Responsive, Version Control, HTML/CSS, bootstrap, Ajax, jQuery, Javascript, and so on"
    }],
    "display": function() {
        /*display schools*/
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);

            //school name and degree
            var formattedName = HTMLschoolName.replace("%data%", school.name);
            formattedName = formattedName.replace("#", school.url);
            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            $(".education-entry:last").append(formattedName + formattedDegree);

            var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(formattedDates);

            var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry:last").append(formattedLocation);

            var formattedMajor = HTMLschoolMajor.replace("%data%", school.major);
            $(".education-entry:last").append(formattedMajor);
        });

        education.onlineCourses.forEach(function(course) {
            $("#education").append(HTMLschoolStart);
            //online classes
            var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
            formattedTitle = formattedTitle.replace("#", "https://www.udacity.com");
            var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
            $(".education-entry:last").append(formattedTitle + formattedSchool);

            var formattedDate = HTMLonlineDates.replace("%data%", course.dates);
            $(".education-entry:last").append(formattedDate);

            var formattedLocation = HTMLschoolLocation.replace("%data%", "ONLINE");
            $(".education-entry:last").append(formattedLocation);
        });
    }
};
education.display();

//my work
var work = {
    "jobs": [{
        "employer": "Republic of Korea Army",
        "title": "Enlisted Man, Arcraft Assitant Instructor",
        "location": "Army Aviation School, Nonsan, South Korea",
        "period": "Feb 2015 - Nov 2016 (1 year and 9 months)",
        "description": "Employed Helicopters such as 500MD, UH-1H, AH-1S, UH-60, BO-105, CH-47 to rear warrant officers and military officers"
    }, {
        "employer": "Tutoring Center @ Highline College",
        "title": "Math Tutor",
        "location": "Des Moines, WA, USA",
        "period": "Jan 2013 - June 2013 (6 months)",
        "description": "taught Multicalculus level Mathematics"
    }],
    "display": function() {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            //concat employer and title
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);

            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            $(".work-entry:last").append(formattedEmployer + formattedTitle);

            var formattedDates = HTMLworkDates.replace("%data%", job.period);
            $(".work-entry:last").append(formattedDates);

            /*always add location after date*/
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            $(".work-entry:last").append(formattedLocation);

            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedDescription);
        });
    }
};
work.display();

//my project
var projects = {
    "projects": [{
        "title": "Book Swap",
        "dates": "2014/01/01",
        "description": "Book Swap Webpage for Georgia Tech Student",
        "images": ["images/bookswap_1.jpg", "images/bookswap_3.jpg", "images/bookswap_5.jpg"]
    }, {
        "title": "Yeap",
        "dates": "2013/01/01",
        "description": "Data Mining project with MongoDB",
        "images": []
    }],
    "display": function() {
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedDescription);


            //putting img
            if (project.images.length > 0) {
                $(".project-entry:last").append(HTMLprojectImageCollection);
                project.images.forEach(function(image) {
                    var formattedImage = HTMLprojectImage.replace("%data%", image);
                    $(".image-collection:last").append(formattedImage);
                });
            }
        });
    }
};
projects.display();

/*internationalizeButton*/
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);

/*Google Map doesn't work... :(*/
$("#mapDiv").append(googleMap);
$("#map").initializeMap();