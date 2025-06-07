const name='satyam';
const age=22;

// console.log(name+age+"value");

// console.log(`hello this is ${name} my age is ${age}`);

const nameagain=new String('satyam-sri-sri');

// console.log(nameagain[5]);

// console.log(nameagain.__proto__);

// console.log(nameagain.toUpperCase());

// console.log(nameagain.charAt(7));

// console.log(nameagain.indexOf('y'));

let newString=nameagain.substring(-11,4);
// console.log(newString);

let anotherStirng=nameagain.slice(-12,4);
// console.log(anotherStirng);

let newStringOne="    satyam   "
console.log(newStringOne);
console.log(newStringOne.trim());

let url='https:/satyam.com%20sri';

console.log(url.replace('%20','-'));
console.log(url.includes("max"));

console.log(nameagain.split('-'));

