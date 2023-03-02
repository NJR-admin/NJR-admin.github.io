function passwordCheck(){
    var password = prompt("Please enter the password.");
    if (password==="community"){
        window.location="./pages/services.html";
    } else{
        while(password !=="community"){
            password = prompt("Please enter the password.");
        }
        window.location="./pages/services.html";
    }
}