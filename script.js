function openPopup(name){

    document.getElementById("joinPopup").style.display = "flex";

    document.getElementById("tournamentName").innerHTML = name;

}

function closePopup(){

    document.getElementById("joinPopup").style.display = "none";

}

function submitForm(){

    let name = document.getElementById("playerName").value;
    let uid = document.getElementById("playerUID").value;
    let email = document.getElementById("playerEmail").value;
    let phone = document.getElementById("playerPhone").value;
    let payment = document.getElementById("paymentMethod").value;
    let transaction = document.getElementById("transactionId").value;

    if(name=="" || uid=="" || email=="" || phone=="" || payment=="Select Payment Method" || transaction==""){

        alert("Please fill all fields.");
        return;

    }

    alert("Registration Submitted Successfully!");

    closePopup();

}
