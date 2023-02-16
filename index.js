// print out the name of the person who has more letters in their name, with the format "PERSON_NAME has the longest name"

//function will determine the longest name between two variables
function getNames(firstName,secondName) {
    //assigning the length of each to a new variable
    let nameOne = firstName.length;
    let nameTwo = secondName.length;
     //boolean condition that will compare the lengths and assign personName to the longest   
    if (nameOne > nameTwo) {
    //passing data to personName
        personName = firstName;
    }
    //to catch a bug
    else if (nameOne === nameTwo) {
        console.log("The provided names are equivalent in length.")
    }
    //if the above conditions are not met
    else {
        personName = secondName;
    }
    //function returns longest name
    return personName;
}
//function will print result to the user
function announce(){
    console.log(personName + " has the longest name.")
}
//function takes in user input and assigns it to firstName and secondName
getNames(prompt("Enter A Name:"),prompt("Enter Another Name:"));
announce();