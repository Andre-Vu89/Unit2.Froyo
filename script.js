//prompts user to input froyo flavor
const userInputString = prompt(
    "Enter a list of comma-separated froyo flavors.", 
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
//user's input string is split into an array of strings
const stringArray = userInputString.split(",");
console.log(stringArray);

/*loop through the array of flavors. 
object is used to keep count of how many orders there are of each flavor.
counts the number of each flavor in the user's input. */
const flavorObj = {};
for (let i = 0; i < stringArray.length; i++) {
    let flavName = stringArray[i];
    if (flavorObj[flavName]) {
        flavorObj[flavName]++;
    } else {
        flavorObj[flavName] = 1;
    }
}
console.log(flavorObj);

