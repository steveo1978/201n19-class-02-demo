'use strict';
//Get name
var getName = prompt('What is your name ?');
var message = 'Hello' + getName + ', Holla ! Welcome to the freakshow that is my mind ! My name is Steve R. Marical and today were goin crazy together learning all about me. Were gonna start with a series of questions. Please just answer yes or no. Ready ? Then lets get crazy !' 
//console.log(getName);

alert(message);

//Question 1

var question1 = prompt('I was born in Oklahoma, but was I born in 1978 ? ');

while (question1.toLowerCase() !== 'no' && question1.toLowerCase() !== 'yes') {
  qestion1 = prompt('Please answer with either a yes or a no. was I born in 1978 ?');
}
if (question1 === 'no') {
  alert('NICE !!!');
  //console.log(question1.tolowerCase());
} else {
  alert('Wrong answer dude');

}


//Question 2

var question2 = prompt('Was I a door-to-door Salesman ?');

while (question2.toLowerCase() !== 'no' && question2.toLowerCase() !== 'yes') {
  question2 = prompt('Please answer with either a yes or no was I a door-to-door salesman ?');
}
if (question2 === 'no') {
  alert('You got it dude ! I was a door-to-door vaccume cleaner salesman');
  //console.log(question2.toLowerCase());
} else {
  alert('Sorry Charley, I was.');

}


//Question 3

var question3 = prompt('Did I spend almost 2 years living on a mountain as a child ?');

while (question3.toLowerCase() !== 'no' && question3.toLowerCase() !== 'yes') {
  question3 = prompt('Please answer with a yes or a no, did I live on top of a mountain for 2 years ?');
}
if (question3 === 'no') {
  alert('Absoultely !! So techniclly im a mountain man !')
 //console.log(question3.toLowerCase());
} else {
  alert('Wrong answer Pal. I did.');

}


//Question 4

var question4 = prompt('Have I ever built a bomb ?');

while (question4.toLowerCase() !== 'no' && question4.toLowerCase() !== 'yes') {
  question4 = prompt('Please still answer with a yes or no, have I ever built a bomb ?');
}
if (question4 === 'no') {
  alert('Right on homie, you answered right !! I built bombs as an Aviation Ordnanceman for the US Navy.')
  //console.log(question4.toLowerCase());
} else {
  alert('Wrong !! Come on its not a stretch to be a bomb builder.');

}


//Question 5

var question5 = prompt('Have I ever been fired from a job ?');

while (question5.toLowerCase() !== 'no' && question5.toLowerCase() !== 'yes') {
  question5 = prompt('Please answer with a yes or no, Have I ever been fired from a job ?');
}
if (question5 === 'no') {
  alert('Yup your right ! Ive been fired form every job Ive ever worked at except for the Navy. lol oops.')
  //console.log(question5.toLowerCase());
} else {
  alert('you loose, wrong answer. Ive lost every job Ive ever had with the exception of the military.');

}