'use strict'
let score = 0;
let username = prompt('please enter your name ')
<<<<<<< HEAD
alert('welcom ' + username);
=======

alert('welcome ' + username);
>>>>>>> 3e886e4102072b5e2ca95907d7a9b3801be15d49

let name = prompt('please enter my first name').toLowerCase();

function f1() {
    

if (name == 'mohammad') {
<<<<<<< HEAD

    alert('thats true ');
    console.log('thats true ');
    score++;
}


=======
    alert('thats true ');
    score++;
}
}
f1(name);
>>>>>>> 3e886e4102072b5e2ca95907d7a9b3801be15d49


<<<<<<< HEAD
if (foodtype == ('yes')) {

    alert("no i don't ")
=======
let foodtype = prompt('Do i like healthy food ? yes or no'.toLowerCase())
function f2(){
if (foodtype == ('yes')) {

    alert("wrong, i don't ")
>>>>>>> 3e886e4102072b5e2ca95907d7a9b3801be15d49
}

else if (foodtype == ('y')) {

<<<<<<< HEAD
    alert("no i don't ")
=======
    alert("wrong, i don't ")
>>>>>>> 3e886e4102072b5e2ca95907d7a9b3801be15d49
}

else if (foodtype == ('no')) {
    score++;
    alert("that's right")
<<<<<<< HEAD
    console.log('thats true ');
=======
>>>>>>> 3e886e4102072b5e2ca95907d7a9b3801be15d49
}

else if (foodtype == ('n')) {
    score++;
    alert("that's right")
<<<<<<< HEAD
    console.log('thats true ');
}


=======
}
}
f2(foodtype);
>>>>>>> 3e886e4102072b5e2ca95907d7a9b3801be15d49






let status = prompt('AM I single or married ? '.toLowerCase())
<<<<<<< HEAD

if (status == 'single') {
    score++;
    alert("yes i am  ")
    console.log('thats true ');
} else if (status == ('married')) {

    alert("no i don't ")
=======
function f3(){
if (status == 'single') {
    score++;
    alert("yes correct  ")
} else if (status == ('married')) {

    alert("no im not ")
>>>>>>> 3e886e4102072b5e2ca95907d7a9b3801be15d49
}
}
f3(status);

let age = prompt('How old am I ? '.toLowerCase())
<<<<<<< HEAD

if (age == 24) {
    score++;
    alert(" yes ")
    console.log('thats true ');
} else if (age !== 24) {

    alert("no i don't ")
}


=======
function f4(){
if (age == 24) {
    score++;
    alert(" yes ")
} else if (age !== 24) {
>>>>>>> 3e886e4102072b5e2ca95907d7a9b3801be15d49

    alert("no i don't ")
}
}
f4(age);






let masaf = prompt('do i like mansaf yes or no ? '.toLowerCase())
function f5(){
if (masaf === ('no')) {

<<<<<<< HEAD
if (masaf === ('no')) {

=======
>>>>>>> 3e886e4102072b5e2ca95907d7a9b3801be15d49
    alert(" no of course i like it  ")
}
else if (masaf == ('n')) {

    alert(" no of course i like it  ")
}
else if (masaf == ('yes')) {
    score++;
<<<<<<< HEAD
    alert("of course ")
    console.log('thats true ');
=======
    alert("of course!!! ")
>>>>>>> 3e886e4102072b5e2ca95907d7a9b3801be15d49
}

else if (masaf == ('y')) {
    score++;
<<<<<<< HEAD
    alert("of course ")
    console.log('thats true ');
=======
    alert("of course!!! ")
>>>>>>> 3e886e4102072b5e2ca95907d7a9b3801be15d49
}
}
f5(masaf);






let sport = prompt('do i like sport yes or no ? '.toLowerCase())
<<<<<<< HEAD

if (sport === 'yes') {
    score++;
    alert("yes i am  ")
    console.log('thats true ');
=======
function f6(){
if (sport === 'yes') {
    score++;
    alert("yes, correct ")
>>>>>>> 3e886e4102072b5e2ca95907d7a9b3801be15d49
}

else if (sport == 'y') {
    score++;
<<<<<<< HEAD
    alert("yes i am  ")
    console.log('thats true ');
=======
    alert("yes, correct ")
>>>>>>> 3e886e4102072b5e2ca95907d7a9b3801be15d49
}


else if (sport === ('no')) {

<<<<<<< HEAD
    alert("no i like it ")
=======
    alert("no i love sports ")
>>>>>>> 3e886e4102072b5e2ca95907d7a9b3801be15d49
}

else if (sport == ('n')) {

<<<<<<< HEAD
    alert("no i like it ")
}









let myAge = Number(prompt("guess my age"));
for (let i = 0; i < 4; i++) {
    if (myAge == 24) {
        alert("correct")
        console.log('thats true ');
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
    alert('goodbay ' + username);
=======
    alert("no i love sports ")
}
>>>>>>> 3e886e4102072b5e2ca95907d7a9b3801be15d49
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

<<<<<<< HEAD
        A7 = prompt("what is my fav film ?");
=======
        A7 = prompt("what are my fav series ?");
>>>>>>> 3e886e4102072b5e2ca95907d7a9b3801be15d49




    }
}}
f8(A7);


<<<<<<< HEAD


}
alert(score + 'out of 8');
alert('the right answers are :' + ' prison break ' + ' freinds ' + ' vikings ' + ' the walking dead ');
=======


alert('the right answers are :' + ' prison break ' + ' freinds ' + ' vikings ' + ' the walking dead ');
alert(score + 'out of 8');
alert('goodbye ' + username);

>>>>>>> 3e886e4102072b5e2ca95907d7a9b3801be15d49
