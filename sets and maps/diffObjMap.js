let a = [];
let s = new Set();
let obj = [1,2,3,4,5,6,7,8,9];

for(let i=0;i<obj.length;i++)
{
    console.time('array');
    a.push(obj[i]);
    console.timeEnd('array');
    console.time('set');
    console.timeEnd('set');
}

let op;
console.time('arr');
op = a.indexOf(2)!==-1;
console.timeEnd('arr');
console.time('s1');
op = s.has(2);
console.timeEnd('s1');