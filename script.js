function openPopup(name) {
    document.getElementById("joinPopup").style.display = "flex";
    document.getElementById("tournamentName").innerHTML = name;
}

function closePopup() {
    document.getElementById("joinPopup").style.display = "none";
}
