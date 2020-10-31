//This function will show the user input in the console
//It will also use an equality operator to determine where to send the user in the div at the bottom of the page. 

function displayInConsole()

{

  var textVal = document.getElementById("textVal").value;
  var numVal = document.getElementById("pageId").value;
  console.log("The text value entered is: " + textVal + "The number entered is: " + numVal);

  // This if statement uses an equality operator to determine the link to send a user to.
  //For example, if the user inputs 1 then they get a link to page 1.

  if (numVal == 1) {
    var myURL = "./Page 1.html";
  }
  else if (numVal == 2) {
    var myURL = "./Page 2.html";
  }
  else if (numVal == 3) {
    var myURL = "./Page 3.html";
  }

  // useing getElementById to set the values in the div at the bottom of the page. 
  document.getElementById("display").innerHTML = "The text value entered is : " + textVal + "<br> The number entered is : " + numVal;

  // useing the href to get the links.  
  document.getElementById('link').href = myURL;
}
