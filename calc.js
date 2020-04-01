function Calculate() {
    var consumption = document.getElementById("consumption").value;
    var averageSpeed = document.getElementById("average_speed").value;
    var travelTime = document.getElementById("travel_time").value;
    var fuelPrice = document.getElementById("fuel_price").value;

    var trip = averageSpeed * travelTime;
    var consumptionPrice = (((averageSpeed * travelTime) / consumption) * fuelPrice)

    if (consumption != "" && averageSpeed != "" && travelTime != "" && fuelPrice != "") {
        document.getElementById("result").innerHTML = "You ran " + trip + "km and spent $" + consumptionPrice.toFixed(2);
    }else if(averageSpeed != "" && travelTime != ""){
        document.getElementById("result").innerHTML = "You ran " + trip + "km";
    }else if(consumption == "" && averageSpeed == "" && travelTime == "" && fuelPrice == ""){
        document.getElementById("result").innerHTML = "fill in your travel information!";
    }
}
