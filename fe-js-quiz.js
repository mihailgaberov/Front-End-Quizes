var foo = function foo() {
    console.log(foo === foo);  
};
foo();
//What is printed in the console?

//Answer: true
=====================================
function aaa() {
    return
    {
        test: 1
    };
}
alert(typeof aaa());
What does the above alert?

//Answer: undefined (because of the automatic adding of ";" after 'return' - closing the state, i.e. it's like return; { test: 1};)
=====================================
Number("1") - 1 == 0;

// Answer: true, because the string "1" is being cast to number and then subtracts it
=====================================
(true + false) > 2 + true;

// Answer: false, as true + false = 1 + 0 = 1 which is not bigger than 2 + true = 2 + 1 = 3 
=====================================
function bar() {
    return foo;
    foo = 10;
    function foo() {}
    var foo = '11';
}
alert(typeof bar());

// Answer: function, because of the "hoisting" the definition of "foo" is already known when the "bar" is called, so the type of the returned value "foo" is function.
=====================================
"1" - - "1";

// Answer: 2, as the minus signs convert the strings to numbers and actually do the calculation
=====================================
var x = 3;

var foo = {
    x: 2,
    baz: {
        x: 1,
        bar: function() {
            return this.x;
        }
    }
}

var go = foo.baz.bar;

alert(go());	// 3
alert(foo.baz.bar());	// 1
// Because of the different scopes from where it's invoked
=====================================
new String("This is a string") instanceof String;	// true
=====================================
[] + [] + 'foo'.split('');	// "f,o,o"
=====================================
new Array(5).toString();	// ,,,,
=====================================
var myArr = ['foo', 'bar', 'baz'];
myArr.length = 0;
myArr.push('bin');
console.log(myArr);// ['bin']
=====================================
String('Hello') === 'Hello';	// true
=====================================
var x = 0;
function foo() {
    x++;
    this.x = x;
    return foo;
}
var bar = new new foo;
console.log(bar.x);	// undefined
=====================================
"This is a string" instanceof String;	// true
=====================================
var bar = 1,
    foo = {};

foo: {
    bar: 2;
    baz: ++bar;
};
foo.baz + foo.bar + bar;    // NaN
=====================================
var myArr = ['foo', 'bar', 'baz'];
myArr[2];
console.log('2' in myArr);  // true
=====================================
var arr = [];
arr[0]  = 'a';
arr[1]  = 'b';
arr.foo = 'c';
alert(arr.length);  // 2
=====================================
10 > 9 > 8 === true;    // false
// Order of operations
// ((10 > 9) > 8) => true > 8 => 1 > 8 => false
=====================================
function foo(a, b) {
    arguments[1] = 2;
    alert(b);
}
foo(1); // undefined
=====================================
NaN === NaN;    // false as NaN is not equal even to itself
=====================================

=====================================
JS Scope
=====================================
function() {
    var a = 10;
    if(a > 5) {
        a = 7;
    }
    alert(a);
}
// When executed, what value will be alerted to the screen?

// Answer: 7, as the if statement is true and the assignment in it is valid for "a"
=====================================
function() {
    if(true) {
        var a = 5;
    }
    alert(a);
}

// What would be the value alerted by this function?

// Answer: 5, as the in JS the if statement it not defining its own scope, only functions can define their scopes which is different than the global one, i.e.
//  "Function Scope," as opposed to "Block Scope."
=====================================
var a = 5;
function first() {
    a = 6;
}


function second() {
    alert(a);
}

// Assuming I call these functions in order, what value gets alerted?
// Answer: 6, here we allocate a global variable a and set its value to 5. By calling first(), we change its value to 6. This value, 6, then gets alerted.
=====================================
function first() {
    window.a = 3;
}


function second() {
    alert(a);
}

// Answer: 3, as the global variables in JS are defined as properties of the "window" object
=====================================
var a = 5;
function() {
    var a = 7;
    alert(a);
}

// There are now two variables with the same name, a. Which one does Javascript pick?
// Answer: 7, because the function has its own scope and the local variable which is defined there will be printed. 
// Javascript will work outwards from the innermost level. If it can't find anything at the current level, it moves out a bit more.
=====================================
var a = 6;
function test() {
    var a = 7;
    function again() {
        var a = 8;
        alert(a);  // First
    }
    again();
    alert(a);  // Second
}
test();
​alert(a);​  // Third

// When executed, this will pop up three alerts. In order, what are they?
// Answer: 8, 7, 6, according to the scopes of the functions where the variables are defined
=====================================
function getFunc() {
    var a = 7;
    return function(b) {
        alert(a+b);
    }
}
var f = getFunc();
f(5);
// What's alerted to the screen?
// Answer: 12, as this is closure. 
// Essentially, getFunc() returns a reference to another, anonymous function. 
// Later on, we call that function, and it still has access to all of the variables
// it had access to at the time of creation. All of these variables that the function
// has access to at its creation create a closure, which sticks around for as long as the function pointer itself does.
=====================================