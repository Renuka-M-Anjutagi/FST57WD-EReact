class Person{

    constructor(name,lname,age)
    {
        this.name = name,
        this.lname = lname,
        this.age = age
    }

    getFullName()
    {
        return `The person fullname ${this.name}.${this.lname}`;
    }


    setAge(newage)
    {
        this.age = newage;
    }
    getDetails()
    {
        return `The person fullname ${this.name}.${this.lname}.${this.age}`;
    }
}

let person = new Person('Renuka','Anjutagi','80');
console.log(person.getFullName());
console.log(person.getDetails());
person.setAge(40);
console.log(person.getDetails());