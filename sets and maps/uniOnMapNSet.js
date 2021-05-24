let s1 = new Set([10,20,30]);
let s2 = new Set(['hello', 'hi', 'bye']);

let newSet = new Set([...s1,...s2]);
console.log(newSet);

let anime = new Map();
let series = new Map();

anime.set('black clover', 'asta');
anime.set('baccano', 'dallas');

series.set('dr. house', 'gregory house');
series.set('how to get away with murder', 'annalise keating');

let animeAndSeries = new Map([...anime].concat([...series]));
console.log(animeAndSeries);