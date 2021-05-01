'use strict'
let score = 0;
let username = prompt('please enter your name ')
alert('welcom ' + username);

let name = prompt('please enter my first name').toLowerCase();
console.log(name)


if (name == 'mohammad') {

    alert('thats true ');
    console.log('thats true ');
    score++;
}



let foodtype = prompt('do i like healthy food ? yes or no'.toLowerCase())

if (foodtype == ('yes')) {

    alert("no i don't ")
}

else if (foodtype == ('y')) {

    alert("no i don't ")
}

else if (foodtype == ('no')) {
    score++;
    alert("that's right")
    console.log('thats true ');
}

else if (foodtype == ('n')) {
    score++;
    alert("that's right")
    console.log('thats true ');
}








let status = prompt('AM I single or married ? '.toLowerCase())

if (status == 'single') {
    score++;
    alert("yes i am  ")
    console.log('thats true ');
} else if (status == ('married')) {

    alert("no i don't ")
}



let age = prompt('How old am I ? '.toLowerCase())

if (age == 24) {
    score++;
    alert(" yes ")
    console.log('thats true ');
} else if (age !== 24) {

    alert("no i don't ")
}









let masaf = prompt('do i like mansaf yes or no ? '.toLowerCase())

if (masaf === ('no')) {

    alert(" no of course i like it  ")
}
else if (masaf == ('n')) {

    alert(" no of course i like it  ")
}
else if (masaf == ('yes')) {
    score++;
    alert("of course ")
    console.log('thats true ');
}

else if (masaf == ('y')) {
    score++;
    alert("of course ")
    console.log('thats true ');
}








let sport = prompt('do i like sport yes or no ? '.toLowerCase())

if (sport === 'yes') {
    score++;
    alert("yes i am  ")
    console.log('thats true ');
}

else if (sport == 'y') {
    score++;
    alert("yes i am  ")
    console.log('thats true ');
}


else if (sport === ('no')) {

    alert("no i like it ")
}

else if (sport == ('n')) {

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
}















let Q7 = ['freinds', 'prison break', 'vikings', 'the walking dead',];
let A7 = prompt("what is my film ?");
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

        A7 = prompt("what is my fav film ?");




    }




}
alert(score + 'out of 8');
alert('the right answers are :' + ' prison break ' + ' freinds ' + ' vikings ' + ' the walking dead ');