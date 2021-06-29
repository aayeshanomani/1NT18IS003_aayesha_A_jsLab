function person(name, age)
{
    this.name = name || 'Nameless'
    this.age = age || 18
}

function student(name, age, sem)
{
    this.parent = person
    this.parent(name, age)
    this.sem = sem
}

function stud3year(name, age, sem, sec)
{
    this.parent = student
    this.parent(name, age, sem)
    this.sec = sec
}

let a = new stud3year('Anskh', 18, 1, 'A')
console.log(a)