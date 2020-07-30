'use strict';

//Get name
var score = 0;
var userName = prompt('What is your name ?').toLowerCase();
alert(userName + ' Hello, Hi, Holla ! Welcome to the freakshow that is my mind ! My name is Steve R. Marical and today were goin crazy together learning all about me. Were gonna start with a series of questions. Please just answer yes or no. Ready ? Then lets get crazy !');

//console.log(userName);

//Question 1
var question1 = prompt('I was born in Oklahoma, That part is true, but was I born in 1978 ? yes or no').toLowerCase();

function questionOne(oklahoma){
  if (oklahoma === 'yes' || oklahoma === 'y') {
    var nice = alert('NICE !!!');
    score++;
    return nice;
  } else if (oklahoma === 'no' || oklahoma === 'n') {
    var noAlert = alert('Wrong answer dude !!');
    return noAlert;
  }
  //console.log(question1);
}

questionOne(question1);
console.log(`Your score is: ${score}`);

// if (question1 === 'yes' || question1 === 'y') {
//   alert('NICE !!!');
//   score++;
// } else if (question1 === 'no' || question1 === 'n') {
//   alert('Wrong answer dude !!');
// }
//console.log('question1' + user guess year born);

//Question 2
var question2 = prompt('Was I a door-to-door Salesman ? yes or no ?').toLowerCase();
if (question2 === 'yes' || question2 === 'y') {
  alert('You got it dude ! I was a door-to-door vaccume cleaner salesman');
  score++;
} else if (question2 === 'no' || question2 === 'n') {
  alert('Sorry Charley, I was.');
}
//console.log('question2' + was I a salesman);

//Question 3
var question3 = prompt('Did I spend almost 2 years living on a mountain as a child ? yes or no ?').toLowerCase();
if (question3 === 'yes' || question3 === 'y') {
  alert('Absoultely !! So techniclly im a mountain man!');
  score++;
} else if (question3 === 'no' || question3 === 'n') {
  alert('Wrong answer Pal. I did.');
}
//console.log('question3' + did I live on a mountain);


//Question 4
var question4 = prompt('Have I ever built a bomb ? yes or no ?').toLowerCase();
if (question4 === 'yes' || question4 === 'y') {
  alert('Right on homie, you answered that right !! I built bombs as an Aviation Ordnanceman for the US Navy.');
  score++;
} else if (question4 === 'no' || question4 === 'n') {
  alert('Wrong !! Come on its not such a huge stretch for me to be a bomb builder.');
}
//console.log('question4' + was I a bomb builder);

//Question 5
var question5 = prompt('Have I ever been fired from a job ? Please answer yes or no ?').toLowerCase();
if (question5 === 'yes' || question5 === 'y') {
  alert('Yup your right ! Ive been fired form every job Ive ever worked at except for the Navy. lol oops.');
  score++;
} else if (question5 === 'no' || question5 === 'n') {
  alert('you loose, wrong answer. Ive lost every job Ive ever had with the exception of the military.');
}
//console.log('question5.toLowerCase');

//Question 6
var attempts = 0;
var allowedAttempts = 4;
var answerSix = 8;

var question6 = Number(prompt('I\'m thinking of a number between 1 and 10. Can you guess what that number is ?').toLowerCase());
while (attempts < allowedAttempts) {
  if (question6 < answerSix) {
    //console.log('Good guess, but WRONG ! Way too low. Try again)
    question6 = Number(prompt('Good guess, but WRONG ! Way too low. Try again.'));
  } else if (question6 > answerSix) {
    //console.log('Ooo so close, but still wrong. Too high. Try again.');
    question6 = Number(prompt('Ooo so close, but still wrong. Too high. Try again.'));
  } else if (question6 === answerSix) {
    //console.log('Hey, hey, hey, you got it right ! Good job !!');
    alert('Hey, hey, hey, you got it right ! Good Job !!');
    attempts = 10;
    score++;
  }
  attempts++;
}
if (attempts === allowedAttempts) {
  alert('Out of guesses and all of them wrong. The correct answer is 8');
}

//Question 7
var attempts7 = 0;
var answer7 = prompt('Ilove animals, name my favorite animal, I\'ll give you 6 trys.').toLowerCase();
var favoriteAnimal = ['cats','dog','tiger','alligator'];
while (attempts7 < 5) {
  attempts7++;
  for (var i = 0; i < favoriteAnimal.length; i++) {
    if (answer7 === favoriteAnimal[i]) {
      //console.log('Good job');
      alert('Good job');
      attempts7 = 10;
      score++;
    }
  }
  if (attempts7 !== 10) {
    //console.log('Try again');
    answer7 = prompt('Try again');
  }
}
if (attempts7 === 5) {
  alert('Your out of chances, the correct answer is cat.');
}
alert(`Thanks for playing my crazy game ${userName}, I invite you to check out my page for more crazy fun and to learn more about me. here is your score ${score} `);

