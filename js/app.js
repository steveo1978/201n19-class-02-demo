'use strict';
//Get name
var getName = prompt('What is your name ?');
var message = 'Hello' + getName +', Holla ! Welcome to the freakshow that is my mind ! My name is Steve R. Marical and today were goin crazy together learning all about me. Were gonna start with a series of questions. Please just answer yes or no. Ready ? Then lets get crazy !'

//console.log(getName);

alert(message);

//Question 1

var question1 = prompt('I was bron in Oklahoma, but what year was I born ? ');
while (question1.toLowerCase() !=='no'
&& question1.toLowerCase() !== 'yes') {
  qestion1 = prompt('Please answer with either a yes or a no. was I born in 1978 ?');
}
if (question1 ==='no'){
  alert('NICE !!!');
  //console.log(question1tolowerCase());
} else {
  alert('Wrong answer dude');

}
//question 2

  Var question2 = prompt('')