/*
1-Swap the values of two variables using destructuring 
*/
var x = prompt("Enter the 1st number: ");
var y = prompt("Enter the 2nd number: ");

document.write(`1st = ${x}<br>`);
document.write(`2nd = ${y}<br><br>`);

//using destructuring
[x, y] = [y, x];

document.write(`The value of 1st after swapping = ${x}<br>`);
document.write(`The value of 2nd after swapping = ${y}<br><hr>`);

/*
2- Using rest parameter and spread operator return max value from any array note: 
array length is not fixed return min and max value and display each of them separately 
after function calling
Do all this using function 

*/
let array = [1, 20, 13, 4, -5, 9, 7];

/* Spread operator */
function max(myArr) {
    return Math.max(...myArr);
}
function min(myArr) {
    return Math.min(...myArr);
}
var a = max(array);
console.log(a);
var b = min(array);
console.log(b);
/* Rest parameter */
document.write(`[${array}]<br><br>`);
document.write(`Max value = ${Math.max(1, ...array)}<br>`);
document.write(`Min value = ${Math.min(1, ...array)}<br><hr>`);

/*
3-Create a student literal object that contains: name, University, faculty, 
and final grade, and use print his data in the console using template
 literals in this */
 
 class student{
    name= "Mustafa";
    university= "Cairo";
    faculty= "Science";
    grade="Very Good"
}

var st1 = new student()
console.log(st1.name + " is a student in faculty of " + st1.faculty +" in university " + st1.university +" and his final grade is "+st1.grade+".")



 /* 
 4-Make a set that holds countries names.
Try to add repeated names, will the set accept it?
Print the set values using spread operator and using for…of.
return the numbers of repeated items in set 
make difference from s1 and s2 
make union in another way  

*/ 


let arr = ["Alex","Giza","Mansoura","ASWAN","Mansoura"];
// let arr = ["d","b","c"];
let arr2 = ["ASWAN","Giza","Mansoura","ASWAN","Mansoura"];
// let arr2 = ["a","c","e"];
let set1=new Set(arr);
let set2=new Set(arr2);
let set3=new Set();
console.log(set1); 
// Point b 
for (const x of set1) {
    console.log(x);
}

function getValues (...rest){
    for (const key in rest) {
        console.log(rest[key]);
    }
}
getValues(...set1);
// Point c 
let length_of_arr=arr.length;
let size_of_set1=set1.size;
console.log(`There are ${length_of_arr-size_of_set1} values repeated`);
let flag;
// Point d 
 Set.prototype.difference = function(set2){
    for (let x of this) {
        flag=0;
        for (let y of set2) {
            if(x===y){
                flag=0;
                break;
            }
            else{
                flag=1;
            }
        }
        if(flag==1){
            set3.add(x);
        }
        
    }
    console.log(set3)
}
set1.difference(set2);
// Point e 
let set4=new Set([...set1,...set2]);
console.log(set4);


/*
5-
Make a Map that contains the student name as a key, and object that contains an array
 of his studied courses and his grade in each course. (The object structure as following: 
    {“negm”:[
{Coursename:”JavaScript”, Grade:”Excellent”},
{Coursename:”Jquery”, Grade:”Good”},
{Coursename:”React”, Grade:”V.Good”},
{Coursename:”ESNext”, Grade:”Good},
{Coursename:”NodeJS”, Grade:”V.Good”}]

Loop in the Map and display each student along with his grades in all courses using two ways */

let map = new Map();
map.set(2916, "negm");
map.set(2917, "negm");
// console.log(map);

map.set("mohamed", [
  { Coursename: "JS", Grade: "Good" },
  { Coursename: "Node Js", Grade: "Good" },
  { Coursename: "Angular", Grade: "Good" },
  { Coursename: "Data Base", Grade: "Good" },
  { Coursename: "Network", Grade: "Good" },
]);

map.set("Mostafa", [
  { Coursename: "JS", Grade: "v.Good" },
  { Coursename: "Node Js", Grade: "v.Good" },
  { Coursename: "Angular", Grade: "V.Good" },
  { Coursename: "Data Base", Grade: "v.Good" },
  { Coursename: "Network", Grade: "V.Good" },
]);

map.set("negm", [
  { Coursename: "JS", Grade: "Excellent" },
  { Coursename: "Node Js", Grade: "Excellent" },
  { Coursename: "Angular", Grade: "Excellent" },
  { Coursename: "Data Base", Grade: "Excellent" },
  { Coursename: "Network", Grade: "Excellent" },
]);
console.log(map.get("negm"));

let mySelect = document.getElementById("mySelect");

// First way to loop 
function get_data() {
  if (mySelect.value === "negm") {
    console.log(`Negm Grades :`);
    for (let index = 0; index < map.get("negm").length; index++) {
      console.log(`
                ${map.get("negm")[index].Coursename} course : ${
        map.get("negm")[index].Grade
      } 
                `);
    }
  } else if (mySelect.value === "mohamed") {
    console.log(`Mohamed's Grades :`);
    for (let index = 0; index < map.get("mohamed").length; index++) {
      console.log(`
                ${map.get("mohamed")[index].Coursename} course : ${
        map.get("mohamed")[index].Grade
      } 
                `);
    }
  } else if (mySelect.value === "Mostafa") {
    console.log(`Mostafa's Grades :`);
    for (let index = 0; index < map.get("Mostafa").length; index++) {
      console.log(`
                ${map.get("Mostafa")[index].Coursename} course : ${
        map.get("Mostafa")[index].Grade
      } 
                `);
    }
  }
}
// Second way to loop 

function get_data() {
  if (mySelect.value === "negm") {
    console.log(`Negm Grades :`);
    for (const x of map.get("negm")) {
      console.log(`
            ${x.Coursename} course : ${x.Grade} 
            `);
    }
  } else if (mySelect.value === "mohamed") {
    console.log(`Mohamed Grades :`);
    for (const x of map.get("mohamed")) {
      console.log(`
                ${x.Coursename} course : ${x.Grade} 
                `);
    }
  } else if (mySelect.value === "Mostafa") {
    console.log(`Mostafa Grades :`);
    for (const x of map.get("Mostafa")) {
      console.log(`
                    ${x.Coursename} course : ${x.Grade} 
                    `);
    }
  }
}