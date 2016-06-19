
//Work JSON
var work = {
    "jobs":[
        {
            "employer": "Medienbotschaft Verlag & Events GmbH",
            "title": "Creative Director",
            "location": "Tägerwilen, TG, Switzerland",
            "dates": "2014 - Present",
            "description": "Coordination of the online and offline projects of the publishing house. I oversee the creative process and give guidance to the creative people that work under me.  "
        },
        {
            "employer": "Medienbotschaft Verlag & Events GmbH",
            "title": "Senior Editorial Designer",
            "location": "Tägerwilen, TG, Switzerland",
            "dates": "2009 - 2014",
            "description": "Coordination of the online and offline projects of the publishing house."
        },
        {
            "employer": "Medienbotschaft Verlag & Events GmbH",
            "title": "Marketing|Event-Manager",
            "location": "Tägerwilen, TG, Switzerland",
            "dates": "2007 - 2009",
            "description": "Coordination Marketing and Events."
        }

    ]

};
// Display work json info
work.display = function(){

    for (var job in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(HTMLworkTitle.replace("%data%", work.jobs[job]["title"]))
                                .append(HTMLworkEmployer.replace("%data%", work.jobs[job]["employer"]))
                                .append(HTMLworkLocation.replace("%data%", work.jobs[job]["location"]))
                                .append(HTMLworkDates.replace("%data%", work.jobs[job]["dates"]))
                                .append(HTMLworkDescription.replace("%data%", work.jobs[job]["description"]));
    }

};
// Projects JSON
var projects = {
    "projects": [
        {
            "title": "Resume",
            "dates": "2016",
            "description": "Resume project for Udacity Front-end Web Development Nanodegree",
            "images": "images/Print_Screen_Portfolio.png",
            "github": "https://github.com/Nicolepcx/00_Portfolio_Website_NK/tree/master",
            "demo": "http://nicolepcx.github.io/",
        }

    ]

};
// Display project json info
projects.display = function(){
    var d3Div = new Array(projects.projects.length);
    var progressDiv = new Array(projects.projects.length);

    for (var project in projects.projects){

            $("#projects").append(HTMLprojectStart);

            $(".project-entry:last").append('<div id="div' + project + '"></div>')
                                        .append(HTMLprojectTitle.replace("%data%", projects.projects[project]["title"]))
                                        .append(HTMLprojectImage.replace("%data%", projects.projects[project]["images"]))
                                        .append(HTMLprojectDates.replace("%data%", projects.projects[project]["dates"]))
                                        .append(HTMLprojectDescription.replace("%data%", projects.projects[project]["description"]));
            // display demo or github json info if they exisit
            if (projects.projects[project]["demo"] != undefined )
                $(".project-entry:last").append(HTMLprojectDemo.replace("#", projects.projects[project]["demo"]));
            if (projects.projects[project]["github"] !== undefined )
                $(".project-entry:last").append(HTMLprojectGithub.replace("#", projects.projects[project]["github"]));

    }

};

//Bio JSON
var bio = {
    "first name": "Nicole",
    "last name": "Königstein",
    "role": "Front-End Developer",
    "welcomeMessage": "–Welcome to my Resume Website!– \n I am currently working as a Creative Director at a publishing house. I love to be creative @ work, but I'm also passionate about Programming, Data Science, Machine Learning, Web Design and Web Development. Therefore, I am looking forward to studying more in my foreseeable future, to gain more experience and expertise.",
    "biopic": "images/Passfoto_Nicole_Koenigstein.jpg",
    "contacts":
        {
            "mobile number": "+41-78-834 12 15",
            "email": "nicolepcx@gmail.com",
            "github username": "Nicolepcx",
            "twitter": "nickoenigstein",
            "location": "Kreuzlingen, TG"
        },
    "skills": ["Adobe Creative Suite", "Grafik & Editorial-Design","HTML", "CSS", "Javascript", "JQuery", "WordPress", "Bootstrap"]

};
bio.display = function(){
    var formattedFName = HTMLheaderFName.replace("%data%", bio["first name"].toUpperCase());
    var formattedLName = HTMLheaderLName.replace("%data%", bio["last name"].toUpperCase());
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role.toUpperCase());
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile number"]);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github username"]);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter"]);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio["biopic"]);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio["welcomeMessage"]);


    $("#header").prepend(formattedFName, formattedLName, formattedRole);
    $("#header").append(formattedWelcomeMsg);
    $("#topContacts ul").append(formattedEmail, formattedMobile, formattedLocation, formattedGithub, formattedTwitter);


};
//Education JSON
var education = {
    "schools": [
        {
            "name": "Hamburger Technische Kunstschule",
            "location": "Hamburg, DE",
            "degree": "Bachlor of Arts",
            "majors": ["Editorial Design"],
            "dates": "2007 - 2009",
            "url": "http://www.htk-ak.de/"
        },
    ],
    "onlineCourses": [
        {
            "title": "Passion4digital, Social Media",
            "school": "iversity",
            "date": "2015",
            "url": "https://iversity.org/"
        },
        {
            "title": "Intro to Programming Nanodegree",
            "school": "Udacity",
            "date": "2016",
            "url": "https://www.udacity.com/nanodegrees"
        },
        {
            "title": "Front-end Web Development",
            "school": "Udacity",
            "date": "2016",
            "url": "https://www.udacity.com/nanodegrees"
        }
    ],
};
// Display education json info
education.display = function(){
    for (var school in education.schools){
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school]["dates"]))
                                    .append(HTMLschoolName.replace("%data%", education.schools[school]["name"]).replace("#", education.schools[school]["url"]))
                                    .append(HTMLschoolLocation.replace("%data%", education.schools[school]["location"]));

        for(var major in education.schools[school].majors){
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school]["majors"][major]));
        }
    }
    $("#education").append(HTMLonlineClasses);
    // Display online courses
    for (var onlineCourse in education.onlineCourses){
        var num = education.schools.length + parseInt(onlineCourse);
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse]["date"]))
                                    .append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse]["school"]))
                                    .append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse]["title"]))
                                    .append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse]["url"]));
    }
};
//Map
$("#mapDiv").append(googleMap);

/// chartjs library from: http://www.chartjs.org/docs/#polar-area-chart
var polarData = [
  {
    value: 10,
    color:"#F7464A",
    highlight: "#FF5A5E",
    label: "Adobe Creative Suite",
    labelcolor: "red"
  },
  {
    value: 10,
    color:"#F06613",
    highlight: "#FF5A5E",
    label: "Grafik & Editorial-Design",
    labelcolor: "orange"
  },
  {
    value: 8,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "HTML",
    labelcolor: "green"
  },
  {
    value: 8,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "CSS",
    labelcolor: "yellow"
  },
   {
    value: 8,
    color: "#032239",
    highlight: "#0a5b97",
    label: "WordPress",
    labelcolor: "darker-blue"
  },
  {
    value: 5,
    color: "#949FB1",
    highlight: "#A8B3C5",
    label: "JavaScript",
    labelcolor: "gray"
  },

   {
    value: 5,
    color: "#23582b",
    highlight: "#06cc24",
    label: "Python",
    labelcolor: "darker-green"
  },
  {
    value: 3,
    color: "#4D5360",
    highlight: "#616774",
    label: "MySQL",
    labelcolor: "darker-gray"
  }

  ];

// Display a list of skill labels
var skillsChartLabels = function(){
    for (skill in polarData){
      var skillLabel = polarData[skill].label;
      var skillLabelColor = polarData[skill].labelcolor;
      var skillHTML = '<span class="label ' + skillLabelColor + '">' + skillLabel + '</span>';
      $("#skills-list").append(skillHTML);
    }
};


// Call functions
window.onload = function(){
    var ctx = document.getElementById("skills-chart").getContext("2d");
    window.myPolarArea = new Chart(ctx).PolarArea(polarData, {
        responsive:false
    });
    // Call skillsChartLabels function defined
    skillsChartLabels();
};
// Call bio, work, projects and education functions
bio.display();
work.display();
projects.display();
education.display();






