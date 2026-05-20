function tempconvert(){
    let c = parseFloat(document.getElementById("temp").value);
    let f= 9*c/5+32;
    document.getElementById("result").innerText=
    "Temperature in Fahrenheit : "+ f.toFixed(2);
}