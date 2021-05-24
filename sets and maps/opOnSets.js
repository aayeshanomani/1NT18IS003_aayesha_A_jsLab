let mtset = new Set();
let anme = new Set(['boku no hero academia', 'jujutsu kaisen', 'one piece', 'naruto', {"tokyo ghoul": "season 1"}])

console.log(anme.values());
console.log(anme.keys());
console.log(anme.entries());

anme.add("black clover");
console.log(anme);

let anime2 = new Set(['shounen', 'adventure', 'sport']);
console.log(anime2);

let a = [...anime2];
console.log(a);

let a2 = ['light', 'yagami', 'L'];
console.log(a2);

let a3 = Array.from(new Set(a2));
console.log(a3);