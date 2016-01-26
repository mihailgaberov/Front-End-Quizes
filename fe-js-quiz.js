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

// Answer: function, because the type of bar is "function"
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
=====================================
function foo(a, b) {
    arguments[1] = 2;
    alert(b);
}
foo(1); // undefined
=====================================
NaN === NaN;    // false as NaN is not equal even to itself
=====================================