
    let a = 5;
    a++
    let x = a
document.getElementById("demo").innerHTML = x;



let b = 5;
let p = Math.pow(b, 2);
document.getElementById('demo').innerHTML = p;


let z = 5;
let y = 5;
let d = 6;

document.getElementById('demo2').innerHTML = (z == y) + "<br>" + (z == d);

const cars = ['volvo', 'Honda', 'Mustang', 'Toyota'];
document.getElementById('demo3').innerText = cars[0] + " " + cars[1] + " " + cars[2] + " " + cars[3];