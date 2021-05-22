function ideal() {
    var height = document.getElementById('height').value;
    var bang = height * 9 / 10;
    document.getElementById("result1").innerHTML = "YOUR IDEAL WEIGHT IS " + bang;
}

function BMI() {
    var w = document.getElementById('w').value;
    var h = document.getElementById('h').value;
    var bmi = w / (h / 100 * h / 100);
    document.getElementById("result").innerHTML = "YOUR BMI IS " + bmi ;
    if (bmi < 18.5) {
        document.getElementById("device").innerHTML = " YOU'RE UNDERWEIGHT";
    }
    if (bmi >= 18.5 && bmi <= 24.9  ) {
        document.getElementById("device").innerHTML = "YOU'RE NORMAL";
    }
    if (bmi >= 25 && bmi <= 29.9 ) {
        document.getElementById("device").innerHTML = "YOU'RE OVERWEIGHT";
    }
    if  (bmi >=30 && bmi <= 34.9){
        document.getElementById("device").innerHTML = "YOU'RE OBESE";
    }
    if (bmi > 35){
        document.getElementById("device").innerHTML = "YOU'RE EXTREMLY OBESE";
    }
}
function BMR() {
    var H = document.getElementById('H').value;
    var A = document.getElementById('A').value;
    var W = document.getElementById('W').value
    if (document.getElementById("male").checked === true) {
       
        var bmr_male = 66 + (13.7 * W) + (5 * H) - (6.8 * A);
        document.getElementById("result2").innerHTML = "YOUR BMR IS " + bmr_male + "kcal/day";
    }
    else if (document.getElementById("female").checked === true) {

        var bmr_female = 655 + (9.6 * W) + (1.8 * H) - (4.7 * A);
        document.getElementById("result2").innerHTML = "YOUR BMR IS " + bmr_female + "kcal/day";
    }
}

