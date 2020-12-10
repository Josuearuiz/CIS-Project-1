//  function useing getElementById to add eventListener for the submit button when clicked
document.getElementById('signin').addEventListener("click", function() {
    var email = document.getElementById('inputEmail').value;
    var pass = document.getElementById('inputPassword').value;
    

 //This if statement checks that both input fields email and password are submitted and stores cookie redirected to landing page. 
    if (email && pass)
        signinbtn(email, pass);
    else
        console.log("fill form correctly");
});

function signinbtn(email, pass) {
    document.cookie = email; //stores the cookie 
    console.log("user is authenticated");//prints out on console that user is authenticated after reading if there is a cookie
    window.location.href ='landingPage.html'; // useing window.location.href to connected to landing page. 
}
