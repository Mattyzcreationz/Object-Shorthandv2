//Same keys and values

function createInstrucutor(firstName, lastName){
    return{
         firstName: firstName,
        lastName: lastName,
    }
}

//ES 2015 versoiom


let createInstrucutor = {
    [firstName]: firstName,
    [lastName]: lastName
}
createInstrucutor.firstName,lastName;


//computed Property Names

var favoriteNumber =  42;

var instructor =- {
    firstName: 'Colt'
}
instructor[favoriteNumber] = 'That is my favorite';


//ES2015

const favoriteNumber = 42;

const instructor = {fistName: 'Colt'

instructor[favoriteNumber]: "THat is my Favorite!";
}



//Object Methods

var instructor = {
    firstName: 'Colt',
    sayHi: function(){
        return "Hi";
    },
    sayBye: function(){
        return this.firstName + "says bye!";
    }
}




//ES2015
const instructor = {
    firstName: 'Colt',
    sayHi(){
        return "Hi";
    },
    sayBye(){
        return this.firstName + "says bye!";
    }
}




//createAnimal function

/**Write a function with generates an anaimal object. The Function should accepts 3 arguments:
 * *species: the species of animal ('cat', 'dog')
 * verb: a string used to a name a function ('bark', 'bleet');
 * noise: a string to be printed when above a function is called ('woof', 'baaa');
 Use one or more of the objects and enhancments weve covered.
*/
/*
const d = createAnimal("dog", "bark", 'Woooof!')
//{species: "dog", "bark: f"}
d.bark() //"Woooof!"

const s = createAnimal ("sheep", "bleet", 'BAAAAaaa')
//{species: 'Sheep, bleet: f}
s.bleet() ///"BAAAAaaa"

const d = createAnimal("dog", "bark", 'Wooooof!')
*/

const createAnimal = {
    species: 'Cat', 
    verb: 'MEOW',
    noise: 'MEOWWWW!',
    c(){
        return this.createAnimal;
    }
};
createAnimal.noise;


const createAnimal = {
    species: 'Dog',
    verb: 'Bark',
    noise: 'Wooof!',
    d(){
        return this.createAnimal;
    }
};


//Partically Correct,,, What i did was for it of each one...

//Looking back at the solutions before submitting raw entry, I know understand the question...
/*This is something i would like to speak on with my mentor about understadning questions and possible understanding a system to properly answer them. */



