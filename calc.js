function Calculate() {
    var distance = document.getElementById("distance").value;
    var gas = document.getElementById("gas").value;

    var consumption = distance / gas;

    if (distance != "" && gas != "") {
        document.getElementById("result").innerHTML = "Your car do " + consumption.toFixed(2) + " km/l";
    }else if(distance == "" && gas == ""){
        document.getElementById("result").innerHTML = "fill in your travel information!";
    }
}
