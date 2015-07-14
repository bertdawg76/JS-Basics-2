//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function() {
  var name = 'Tyler';
  return function() {
    return 'The original name was ' + name;
  };
};

//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

var inner = outer();

//Once you do that, invoke inner.

document.write('Function definition of inner: ' + inner);
document.write('<br>');
document.write('Function invocation: ' + 'inner()' + ' ==> ' + inner());
document.write('<hr>');


//Next problem



var callFriend = function() {
  var friend = 'Jake';
  function callF(number) {
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

var message = callFriend();

document.write('Message: ' + message('435-215-9248'));
document.write('<hr>');


//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

var makeCounter = function() {
  var i = 0;
  return function() {
    return ++i;
  };
};

var count = makeCounter();

// count() // 1
// count() // 2
// count() // 3
// count() // 4

for (var i = 0; i < 4; i++) {
  document.write((i + 1) + '. Invocation: ' + count());
  document.write('<br>');
}

document.write('<hr>');


//Next Problem



/*
  Write a function that accepts another function as it's first argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
*/

var secure = function(funct) {
  var count = 0; 
    return function() {
      count++;
      if (count <= 1) {
      funct();
      } else {
        document.write('Function can only be invoked once!');
        document.write('<br>');
      }
    };
};

var once = function() {
  document.write('hello world');
  document.write('<br>');
};

var oneTime = secure(once);

oneTime();
oneTime();
oneTime();
oneTime();

document.write('<hr>');


//Next Problem



/*
  Now, similar to the last problem, write a function called 'fnCounter' that accepts two parameters. 
  The first parameter will be an anonymous function and the second parameter, 'N', will be a number. 
  Now, in 'fnCounter', allow the anonymous funciton to be invoked 'N' number of times. After it's been 
  invoked 'N' number of times, return 'STOP'.
*/

var secure = function(n, funct) {
  var count = 0; 
    return function() {
      count++;
      if (count <=n) {
        funct();
      } else {
        document.write('STOP');
        document.write('<br>');
      }
    };
};

var whatever = function() {
  document.write('hello world');
  document.write('<br>');
};

var nTimes = secure(5, whatever);

nTimes();
nTimes();
nTimes();
nTimes();

document.write('<hr>');


//Next Problem


var counter = function(){
  for (var i = 1; i <= 5; i++) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  }
};

// Above you have a function named counter. Examine the function (without running the code) then 
// below write what you expect to happen when the funciton is invoked. *Hint: setTimeout calls a 
// function or evaluates an expression after a specified number of milliseconds.

// If you invoke counter() it will not log the numbers form 1 to 5!

// Now, run the function in your console and note what happpens.
// Was your answer right or wrong?

// Answer Here

// Fix the counter function so that it works the way you expect it to work. 
// (logging 1 then 2 then 3, etc)

var counter = function(){
  for (var i = 1; i <= 5; i++) {
    setTimeout(function(x) {
      console.log(x);
    }.bind(null, i), i * 1000);
  }
};

counter();


//Next Problem



/*
  Make the following code work
  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5
  *Hint: Don't let this fool you. Break down what's really happening here.
*/

var funcArray = [function(){return 1;}, function(){return 2;}, function(){return 3;},
  function(){return 4}, function(){return 5;}];

document.write(funcArray[0]());
document.write('<br>');
document.write(funcArray[1]());
document.write('<br>');
document.write(funcArray[2]());
document.write('<br>');
document.write(funcArray[3]());
document.write('<br>');
document.write(funcArray[4]());
document.write('<br>');
document.write(funcArray[5]());