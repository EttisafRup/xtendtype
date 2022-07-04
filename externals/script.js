// Display the Name
let name = prompt('Enter your Name : ');
let sn = document.getElementById('name');
sn.innerText = name;

let a = prompt('Enter your 1st profession');
let b = prompt('Enter your 2nd profession');
let c = prompt('Enter your 3rd profession');

if (a == null || b == null || c == null) {
    alert('Enter a valid input first! Otherwise Ettisaf will become angry to you!')
    location.reload();
}

// TypeScript Declearation 
var options = {
    strings: [a, b, c],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true,
  };  

  var typed = new Typed('.typed', options);