var attempts = 3;

function validate(){
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    if (name == "Habeebah" && password == "Adejoke"){
        alert("Login Successfully");
        window.location = "/ProfileCard/index.html";
        //window.location = "success.html";
        return false;
    }
    else{
        attempts--;
        alert("You have" + " " + attempts +" " 
        + "attempts left");
        window.location = "index.html";

        if(attempts == 0){
            document.getElementById("name").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }

}