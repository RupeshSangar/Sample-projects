
function calculate(){
    let cm = document.getElementById("cm").value;
    // console.log(`valueis ${cm}`) 
    let kg = document.getElementById("kg").value;
    // console.log(`valueis ${kg}`) 

    let res = (kg / cm / cm) * 10000 

    document.getElementById("result").innerHTML = "Your Body index is " + res.toFixed(2);
}