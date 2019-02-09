var hobbyDiv;
var HobbyA;
var hobbyImg;
var hobbyP;
var containerDiv = document.getElementById("hobbyContainer");
var node;

var hobbyList = [
  {name: "Brewing Beer", link: "brewingbeer.html", image: "https://dummyimage.com/250/000000/fff&text=Test+image"},
  {name: "Caligraphy", link: "caligraphy.html", image: "https://dummyimage.com/250/000000/fff&text=Test+image"},
  {name: "Cool Desk Stuff?", link: "cooldeskstuff.html", image: "https://dummyimage.com/250/000000/fff&text=Test+image"},  {name: "Geocaching", link: "geocaching.html", image: "https://dummyimage.com/250/000000/fff&text=Test+image"},  {name: "Grilling", link: "grilling.html", image: "https://dummyimage.com/250/000000/fff&text=Test+image"},
  {name: "Guitar", link: ".html", image: "https://dummyimage.com/250/000000/fff&text=Test+image"},
  {name: "Headphones", link: "headphones.html", image: "https://dummyimage.com/250/000000/fff&text=Test+image"},  {name: "Hiking", link: "hiking.html", image: "https://dummyimage.com/250/000000/fff&text=Test+image"},  {name: "Home Workout", link: "homeworkout.html", image: "https://dummyimage.com/250/000000/fff&text=Test+image"},
  {name: "Kites", link: "kites.html", image: "https://dummyimage.com/250/000000/fff&text=Test+image"},
  {name: "Knife Sharpening", link: "knifesharpening.html", image: "https://dummyimage.com/250/000000/fff&text=Test+image"},
  {name: "Mixing Cocktails", link: "mixingcocktails.html", image: "https://dummyimage.com/250/000000/fff&text=Test+image"},
  {name: "Office Ergonomics", link: "officeergonomics.html", image: "https://dummyimage.com/250/000000/fff&text=Test+image"},
  {name: "Paintballing", link: "paintballing.html", image: "https://dummyimage.com/250/000000/fff&text=Test+image"},
  {name: "Piano", link: "piano.html", image: "https://dummyimage.com/250/000000/fff&text=Test+image"},
  {name: "Photography", link: "photography.html", image: "https://dummyimage.com/250/000000/fff&text=Test+image"}
];for (let i=0; i < hobbyList.length; i += 1){
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



