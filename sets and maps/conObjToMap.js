let anime = new Map();
anime.set('one piece', 'luffy');
anime.set('dr. stone', 'senku');
anime.set('full metal alchemist', 'edward');
anime.set('jujutsu kaisen', 'itadori');
console.log(anime);

val = anime.entries;

console.log(anime.keys());
console.log(anime.values());

console.log(anime.get('one piece'));
console.log(anime.has('dr. stone'));

anime.delete('jujutsu kaisen');
console.log(anime);

let b = anime.values();
console.log(b);

for(let [key, value] of anime)
{
    console.log(key +' has '+value);
}