'use strict'
let score = 0;
let username = prompt('please enter your name ')

alert('welcome ' + username);

let name = prompt('please enter my first name').toLowerCase();

function f1() {
    

if (name == 'mohammad') {
    alert('thats true ');
    score++;
}
}
f1(name);


let foodtype = prompt('Do i like healthy food ? yes or no'.toLowerCase())
function f2(){
if (foodtype == ('yes')) {

    alert("wrong, i don't ")
}

else if (foodtype == ('y')) {

    alert("wrong, i don't ")
}

else if (foodtype == ('no')) {
    score++;
    alert("that's right")
}

else if (foodtype == ('n')) {
    score++;
    alert("that's right")
}
}
f2(foodtype);






let status = prompt('AM I single or married ? '.toLowerCase())
function f3(){
if (status == 'single') {
    score++;
    alert("yes correct  ")
} else if (status == ('married')) {

    alert("no im not ")
}
}
f3(status);

let age = prompt('How old am I ? '.toLowerCase())
function f4(){
if (age == 24) {
    score++;
    alert(" yes ")
} else if (age !== 24) {

    alert("no i don't ")
}
}
f4(age);






let masaf = prompt('do i like mansaf yes or no ? '.toLowerCase())
function f5(){
if (masaf === ('no')) {

    alert(" no of course i like it  ")
}
else if (masaf == ('n')) {

    alert(" no of course i like it  ")
}
else if (masaf == ('yes')) {
    score++;
    alert("of course!!! ")
}

else if (masaf == ('y')) {
    score++;
    alert("of course!!! ")
}
}
f5(masaf);






let sport = prompt('do i like sport yes or no ? '.toLowerCase())
function f6(){
if (sport === 'yes') {
    score++;
    alert("yes, correct ")
}

else if (sport == 'y') {
    score++;
    alert("yes, correct ")
}


else if (sport === ('no')) {

    alert("no i love sports ")
}

else if (sport == ('n')) {

    alert("no i love sports ")
}
}
f6(sport);






let myAge = Number(prompt("guess my age"));
function f7(){
for (let i = 0; i < 4; i++) {
    if (myAge == 24) {
        alert("correct")
        score++;
        break;

    } else if (i == 3) {
        alert('the correct answer is 24')
        break;
    }

    else if (myAge < 24) {
        alert("too low");
        myAge = Number(prompt("guess my age"));


    } else if (myAge > 24) {
        alert("too high");
        myAge = Number(prompt("guess my age"));

    }

    console.log(i)
}
}
f7(myAge);



let Q7 = ['freinds', 'prison break', 'vikings', 'the walking dead',];
let A7 = prompt("what are my fav series ?");
function f8(){
let flag = false;
for (let a = 1; a < 6; a++) {
    for (let i = 0; i < Q7.length; i++) {
        if (A7 === Q7[i]) {
            alert('yes this is one of them')
            flag = true;
            score = score + 1;
            break;
        }
    }
    
    if (flag == true) {
        break;
    }
    if (flag === false) {
        alert('sorry it is not one of them')

        A7 = prompt("what are my fav series ?");




    }
}}
f8(A7);




alert('the right answers are :' + ' prison break ' + ' freinds ' + ' vikings ' + ' the walking dead ');
alert(score + 'out of 8');
alert('goodbye ' + username);

