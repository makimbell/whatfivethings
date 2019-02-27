var hobbyDiv;
var HobbyA;
var hobbyImg;
var hobbyP;
var containerDiv = document.getElementById("hobbyContainer");

/* This is cool, but it's slow. The website would load faster if I just did all
of this in HTML... */

var hobbyList = [
  {name: "Brewing Beer"},
  {name: "Caligraphy"},
  {name: "Cool Desk Stuff"},
  {name: "Geocaching"},
  {name: "Guitar"},
  {name: "Grilling"},
  {name: "Headphones"},
  {name: "Hiking"},
  {name: "Home Workout"},
  {name: "Kites"},
  {name: "Knife Sharpening"},
  {name: "Mixing Cocktails"},
  {name: "Paintball"},
  {name: "Piano"},
  {name: "Photography"}];

for (let i=0; i < hobbyList.length; i += 1){
  /* Fill in "link" and "image" properties of hobbyList */
  let rawText = hobbyList[i].name.replace(/\s/g, '').toLowerCase()
  hobbyList[i].link = "pages/" + rawText + ".html";
  hobbyList[i].image = "img/" + rawText + ".jpg"
  
  
  /* Create HTML elements */
  hobbyDiv = document.createElement("div");
  hobbyA = document.createElement("a");
  hobbyImg = document.createElement("img");
  hobbyP = document.createElement("p");
  
  /* Modify HTML elements with correct classes and content */
  hobbyDiv.className = "category column";
  hobbyA.href = hobbyList[i].link;
  hobbyImg.src = hobbyList[i].image;
  hobbyImg.className = "categoryImage";
  hobbyP.innerText = hobbyList[i].name;
  
  /* Append elements together to show on page */
  containerDiv.appendChild(hobbyDiv);
  hobbyDiv.appendChild(hobbyA);
  hobbyA.appendChild(hobbyImg);
  hobbyDiv.appendChild(hobbyP);
}



