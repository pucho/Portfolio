var bio = {
  "name": "Fran",
  "role": "Web Dev",
  "contacts": {
    "mobile": "(598)98866416",
    "email": "fran.mazzoni@gmail.com",
    "github": "pucho",
    "location": "Montevideo"
  },
  "welcomeMessage": "Hi, welcome to my resume",
  "biopic": "https://avatars.githubusercontent.com/pucho",
  "skills" : [
    "Web Dev",
    "3D Design",
    "3D Printing"
  ],
};

var education = {
  "schools": [{
    "name": "Maturana",
    "location": "Montevideo",
    "degree": "HSA",
    "majors": "Math",
    "dates": "2009-2011",
    "url": "http://www.maturana.com.uy"
  }, {
    "name": "Juan 23",
    "location": "Montevideo",
    "degree": "BA",
    "majors": "Engineering",
    "dates": "2012-2013",
    "url": "http://www.juan23.com.uy"
  }],
  "onlineCourses": [{
    "title": "Front End Developer",
    "school": "Udacity",
    "dates": "2016",
    "url": "http://www.udacity.com"
  }, {
    "title": "React and Redux",
    "school": "Udemy",
    "dates": "2015",
    "url": "http://www.udemy.com"
  }]
};

var work = {
  "jobs": [{
    "employer": "INGSW",
    "title": "Web Dev",
    "location": "Montevideo",
    "lat": -34.909000,
    "long": -56.1690221,
    "dates": 2015,
    "description": "Front End Developer"
  }, {
    "employer": "Sonda",
    "title": "SysAdmin",
    "location": "Montevideo",
    "lat": -34.9099233,
    "long": -56.1690221,
    "dates": 2014,
    "description": "Linux SysAdmin"
  }, {
    "employer": "UCS Studio",
    "title": "3D Designer",
    "location": "Buenos Aires",
    "lat": -34.5977572,
    "long": -58.372322,
    "dates": 2013,
    "description": "3D Designer and Animator"
  }]
};

var projects = {
  "projects": [{
    "title": "Redux",
    "dates": "2015",
    "description": "Redux forms",
    "images": ["http://www.placehold.it/100x100.jpg", "http://www.placehold.it/100x100.jpg"]
  }, {
    "title": "Ruby",
    "dates": "2015",
    "description": "Ruby forms",
    "images": ["http://www.placehold.it/100x100.jpg", "http://www.placehold.it/100x100.jpg"]
  }, {
    "title": "VMWare Migration",
    "dates": "2014",
    "description": "VM migration to new version of VMWare",
    "images": ["http://www.placehold.it/100x100.jpg", "http://www.placehold.it/100x100.jpg"]
  }]
};

//Functions for json data display

bio.display = function() {
  $("#bio").append("<h2>Contact</h2>");
  for (var index in bio.contacts){
    var bioDataTemplate = `<div class="col-md-${12 / Object.keys(bio.contacts).length}">
    <h3>${index}</h3><h5>${bio.contacts[index]}</h5>`;
    $("#bio").append(bioDataTemplate);
  }
  $("#bio").append("<h2>Skills</h2>");
  for(index in bio.skills){
    var skillsTemplate = `<div class="col-md-${12 / Object.keys(bio.skills).length}">
    <h4>${bio.skills[index]}</h4>`;
    $("#bio").append(skillsTemplate);
  }
  $("#bio").append("</div");
};

work.display = function() {
  $("#work").append("<hr><h2>Work Experience</h2><hr>");
  for (var job in work.jobs){
    var jobDataTemplate = `<h3>${work.jobs[job].title} at ${work.jobs[job].employer} in ${work.jobs[job].location} (${work.jobs[job].dates})</h3>
    <h4>${work.jobs[job].description}</h4>`;
    $("#work").append(jobDataTemplate);
  }
};

projects.display = function() {
  $("#projects").append("<hr><h2>Projects</h2><hr>");
  for (var index in projects.projects){
    var images = "";
    for (var image in projects.projects[index].images) {
      images += `<img class'img-responsive' src='${projects.projects[index].images[image]}' alt='${projects.projects[index].title}'>`;
    }
    var projectTemplate = `<h3>${projects.projects[index].title} in ${projects.projects[index].dates}</h3>
    <h4>${projects.projects[index].description}</h4>
    ${images}
    `;
    $("#projects").append(projectTemplate);
  }
};

education.display = function () {
  $("#education").prepend("<hr><h2>Formal education</h2><hr>");
  for (var index in education.schools){
    var school = education.schools[index];
    var educationTemplate = `<h3><a href="${school.url}"></a>${school.name} located in ${school.location}</h3>
    <h4>Graduated in ${school.dates} with a degree of ${school.degree} majoring in ${school.majors}</h4>
    `;
    $("#education").append(educationTemplate);
  }
  $("#education").append("<hr><h2>Online education</h2><hr>");
  for (index in education.onlineCourses){
    var school = education.onlineCourses[index];
    var onlineEducationTemplate = `<h3><a href="${school.url}"></a>${school.school}</h3>
    <h4>Graduated in ${school.dates} with a title of ${school.title}</h4>
    `;
    $("#education").append(onlineEducationTemplate);
  }
};

//Functions for map display
var map = {};
map.display = function init_map() {
  var map_center = new google.maps.LatLng(-34.6965124,-57.3428185,11);
  var var_mapoptions = {
    center: map_center,
    zoom: 7
  };
  var var_map = new google.maps.Map($("#map-container")[0], var_mapoptions);
  for(var job in work.jobs){
    var var_location = new google.maps.LatLng(work.jobs[job].lat,work.jobs[job].long);
    var var_marker = new google.maps.Marker({
      position: var_location,
      map: var_map,
      title:`${work.jobs[job].employer}`
    });
  }
};
