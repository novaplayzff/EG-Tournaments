function openPopup(name){

    document.getElementById("joinPopup").style.display = "flex";

    document.getElementById("tournamentName").innerHTML = name;

}

function closePopup(){

    document.getElementById("joinPopup").style.display = "none";

}

function submitForm(){

const tournament = document.getElementById("tournamentName").innerText;
    
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

const registration = {
    tournament: tournament,
    playerName: name,
    uid: uid,
    email: email,
    phone: phone,
    paymentMethod: payment,
    transactionId: transaction,
    time: new Date().toLocaleString()
};

window.dbPush(
    window.dbRef(window.db, "registrations"),
    registration
);
    
    alert("Registration Submitted Successfully!");

    closePopup();

}
