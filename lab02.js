
// let username =prompt('please enter your name ')
// alert ('welcom '+ username);

// let name = prompt('please enter my first name').toLowerCase();
// console.log(name)


// while (name !== 'mohammad') {

//        name = prompt('please enter my first name')
//     } 




// let foodtype = prompt('do i like healthy food ? yes or no'.toLowerCase())

// if (foodtype == ('yes')){

//     alert ("no i don't ")
// }

// else if (foodtype == ('y')){

//     alert ("no i don't ")}

// else if(foodtype == ('no')) {

// alert ("that's right"  )
// }

// else if(foodtype == ('n')) {

//     alert ("that's right"  )
//     }








// let status = prompt('AM I single or married ? '.toLowerCase())

// if (status == 'single'){

//     alert ("yes i am  ")
// }else if(status == ('married')) {

// alert ("no i don't "  )
// }



// let age = prompt('How old am I ? '.toLowerCase())

// if (age == 24 ){

//     alert (" yes ")
// }else if(age !== 24) {

// alert ("no i don't "  )}
    








// let masaf = prompt('do i like mansaf yes or no ? '.toLowerCase())

// if (masaf === ('no')){

//     alert (" no of course i like it  ")
// }
// else if (masaf == ('n')){

//     alert (" no of course i like it  ")
// }
// else if(masaf == ('yes')) {

// alert ("of course "  )
// }

// else if(masaf == ('yes')) {

// alert ("of course "  )
// }








// let sport = prompt('do i like sport yes or no ? '.toLowerCase())

// if (sport === 'yes'){

//     alert ("yes i am  ")
// }

// else if (sport == 'y'){

//     alert ("yes i am  ")
// }


// else if(sport === ('no')) {

// alert ("no i like it "  )
// }

// else if(sport == ('n')) {

//     alert ("no i like it "  )
//     }




//     alert ('goodbay '+ username);




// let myAge=Number(prompt("guess my age"));
// for(let i=0;i<4;i++){
// if (myAge==24) { alert("correct")
// break;

// }else if (i == 3 ){
//     alert ('the correct answer is 24')
// break;
// }

// else if (myAge<24) {
//     alert("too low");
//      myAge=Number(prompt("guess my age"));


// } else if (myAge>24){ 
//     alert("too high");       
// myAge=Number(prompt("guess my age"));

// }

// console.log (i)
// }

  


let s =0


let film = ['frinds', 'breaking bad', 'viking', 'preason break'];
let ask = prompt("what is my fav film ?");
for (let i = 1; i < 7; i++) {
    if (film.includes(ask)) {
        alert('yes this is one of them')
     s = s + 1
        

        break;

    } 

    else {
        alert('sorry it is not one of them')
        ask = prompt("what is my fav film");
        

    }


}    alert('the correct answers are:  ' + '  frinds  '+ '  breaking bad '+ '  viking '+ '  preason break ');

alert("YOUR SCORE IS =" + s)











