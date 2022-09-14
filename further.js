
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

const person = {
    firstName: "Femi",
    lastName: "Adebowale",
    age: "32",
    eyeColor: "Brown eyes",
    skills: "Frontend Web Developer"
}

document.getElementById('demo4').innerHTML = person.firstName + " is " + person.age + " years old," + " a " + person.skills + " with " + person.eyeColor + ".";


var v = myfunction(4, 3);
document.getElementById('democ').innerHTML = v;

function myfunction(a, b) {
    return a * b;
}

function toCelcius(f) {
    return (5/9) * (f-32);
}

document.getElementById('fToC').innerHTML = "The temperature is " + toCelcius(77) + " Celcius";

