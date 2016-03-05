$( document ).ready(function() {
		console.log($("._main").length.text)
		console.log("afuera")
    if ($("._main").length.text == undefined){
			console.log("atroden")
			$("._main").load("https://raw.githubusercontent.com/pucho/pucho.github.io/master/partials/_main.html");
		}
});


var work = {
	"jobs": [{
		"employer": "INGSW",
		"title": "Web Dev",
		"location": "Montevideo",
		"dates": 2015,
		"description": "Front End Developer"
	}, {
		"employer": "Sonda",
		"title": "SysAdmin",
		"location": "Montevideo",
		"dates": 2014,
		"description": "Linux SysAdmin"
	}, {
    "employer": "UCS Studio",
		"title": "3D Designer",
		"location": "Buenos Aires",
		"dates": 2013,
		"description": "3D Designer and Animator"
  }]
}

var projects = {
	"projects": [{
		"title": "Redux",
		"dates": 2015,
		"description": "Redux forms",
		"images": ["www.placehold.it/100x100.jpg", "www.placehold.it/100x100.jpg"]
	}, {
		"title": "Ruby",
		"dates": 2015,
		"description": "Ruby forms",
		"images": ["www.placehold.it/100x100.jpg", "www.placehold.it/100x100.jpg"]
	}, {
		"title": "VMWare Migration",
		"dates": 2014,
		"description": "VM migration to new version of VMWare",
		"images": ["www.placehold.it/100x100.jpg", "www.placehold.it/100x100.jpg"]
	}]
}

var bio = {
  "name": "Fran",
  "age": 32,
  "role": "Web Dev",
  "contacts": {
    "mobile": "(598)98866416",
    "email": "fran.mazzoni@gmail.com",
    "github": "pucho"
  },
  "pictureURL": "https://avatars.githubusercontent.com/pucho",
  "welcome-message": "Hi, welcome to my resume",
  "location": "Montevideo",
  "skills" : [
    "Web Dev",
    "3D Design",
    "3D Printing"
  ]
}

var education = {
	"schools": [{
		"name": "Maturana",
		"location": "Montevideo",
		"degree": "HSA",
		"majors": "Math",
		"dates": 2009,
		"url": "www.maturana.com.uy"
	}, {
		"name": "Juan 23",
		"location": "Montevideo",
		"degree": "BA",
		"majors": "Engineering",
		"dates": 2014,
		"url": "www.juan23.com.uy"
	}],
	"onlineCourses": [
    {
		  "title": "Front End Developer",
		  "school": "Udacity",
		  "dates": 2016,
		  "url": "www.udacity.com"
	  },
    {
      "title": "React and Redux",
  		"school": "Udemy",
  		"dates": 2015,
  		"url": "www.udemy.com"
    }
  ]
}








// if (bio.skills.length > 0) {
//   $("#header").append(HTMLskillsStart)
//
//   var formattedSkill = HTMLskills.replace("%data%", bio.skills[0])
//   $("#skills").append(formattedSkill);
// }
//
// for (job in work.jobs) {
//   $("#workExperience").append(HTMLworkStart)
//
//   var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer)
//   var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title)
//   var formattedEmployerTitle = formattedEmployer + formattedTitle
//
//   $(".work-entry:last").append(formattedEmployerTitle)
// }
