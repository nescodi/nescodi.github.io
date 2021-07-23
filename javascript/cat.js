// var firstDiv = document.getElementsByTagName("section > div");
// var h1 = "<h1 text-primary bg-dark col-12> Cat Generator Project </h1>";
// firstDiv.appendChild(h1);
var node = document.createElement("li");                 // Create a <li> node
var textnode = document.createTextNode("Water");         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("cont").textContent("node");     // Append <li> to <ul> with id="myList"



function myFunction() {
    var textnode = '<div style= "display:flex; box-sizing: border-box;"> <img src="www.images.unsplash.com/photo-1497493292307-31c376b6e479?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" style="flex-basics:30%; flex-wrap:wrap;"></div>'
    document.getElementById("myList").appendChild(textnode);
  }
document.getElementsByTagName