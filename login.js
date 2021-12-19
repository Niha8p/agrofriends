function validate()
{
    var username=document.getElementById("username").nodeValue;
    var password=document.getElementById("passwword").nodeValue;

if(username=="admin" && password=="user")
{
    alert("login successful");
    return false;
}
else{
    alert("login failed");
}

}