//uses decodedCookie to split into a array "ca" .
var decodedCookie = decodeURIComponent(document.cookie);
var ca = decodedCookie.split(';');

// if statement that checks  set cookie and uses getElementById to show welcome back alert when user is authenticated.
if (ca[0] != "") {
    document.getElementById('heading').innerHTML = "Welcome Back";
}
else {
    document.getElementById('heading').innerHTML = "Landing Page";
}
