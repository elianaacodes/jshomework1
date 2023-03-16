//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(str, names){
    let found = false;
    for(let i=0; i<names.length; i++){
        let regex = new RegExp('\\b'+names[i]+'\\b', 'i');
        if(str.match(regex)){
            console.log("Matched "+names[i]);
            found = true;
        }
    }
    if(!found){
        console.log("No Matches");
    }
}

findWords(dog_string, dog_names);




//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

for(let i=0; i<arr.length; i+=2){
    arr.splice(i, 1, "even index");
}
return arr;


let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];
console.log(replaceEvens(arr));


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


//====CodeWars Problems======// 

//Question 1//

function greet(){
    return "hello world!"
  }
  
  console.log(greet())


  //Question 2// 

  function simpleMultiplication(number) {
    if (number % 2 === 0) {
      return number * 8;
    } else {
      return number * 9;
    }
  }

//Question 3 -- Volume of a Cuboid//

function get_volume_of_cuboid(length, width, height) {
    return (length * width * height)
}

//Question 4 //
function testEven(n) {
    if (n === 0) {
      return true;
    } else if (n % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }