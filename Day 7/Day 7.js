// 1. Write a JavaScript program to list the properties of a JavaScript object. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output: name,sclass,rollno

const person = {
    firstName: 'Piyush',
    lastName:  'Maurya',
    gender: 'Male',
    city: "Banglore",
    working: {organisation : 'KIET', basedIn: 'Muradnagar'},
    country: 'India',
    talk : function(){
        console.log("I am writing javascript code");
    },
    walk : function(){
        console.log("I am watching youtube video");
    }
}

console.log(Object.keys(person));

//2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 

delete person.city;
console.log(person);

//3. Write a JavaScript program to get the length of a JavaScript object.  Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 

console.log(Object.values(person).length);

//4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 

var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
    libraryID: 1254
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
    libraryID: 4264
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
    libraryID: 3245  
    }
];


for(var i = 0; i < library.length; i++)
{
    var book = library[i].title  + " written by " +  library[i].author;

    if (library[i].readingStatus){
        console.log("I have read " + book);
    }
    else{
        console.log("I have not read " + book);
    }

}

//6. Write a JavaScript program to sort an array of JavaScript objects.  Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]

library.sort((a,b) =>{
    return b.libraryID - a.libraryID;
});

//5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. Try To Attempt : Difficult Level Increased 

console.log(library);

var volume = {
    radius: 1,
    height: 10
}

var vol = (volume.radius*volume.radius*volume.height*22)/7;

console.log(vol.toFixed(4));








