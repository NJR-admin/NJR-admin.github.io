function passwordCheck(){
    var password = prompt("Please enter the password.");
    if (password==="community"){
        window.location="./pages/linktree.html";
    } else{
        while(password !=="community"){
            password = prompt("Please enter the password.");
        }
        window.location="./pages/linktree.html";
    }
}