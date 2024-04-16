// creating class template 2 ways
// 1. function prototype : are the older one

// 2. class prototype
/* 
create template using clsss syntax for creating a Candidates and store each candidate's name, votes.


*/

class Candidates{
// constructor is a special method for crating and intializing an object crated with class.
// it gets called when a new object is created for that class.
// constuctors are used to initialize  the object's states.allocate memory
// Instance of  variable are the variable that are created insaid the constructor of the class

static countCandidate = 0;
static countVotes = 0;

    constructor(name) {


        console.log('constructor called');
        this.name = name,
       this.votes = 0;
       Candidates.countCandidate++;

    }

    getStatus()
    {
        return `Total Number of Candidates : ${Candidates.countCandidate}`;
    }
}
let candidateA = new Candidates("Johon Die");
let candidateB = new Candidates("Jahon Die");
let candidateC = new Candidates("Jahon Die");
console.log(candidateA);
console.log(candidateB);
console.log(candidateC);

console.log(candidateA.getStatus());
console.log(Candidates.countCandidate);