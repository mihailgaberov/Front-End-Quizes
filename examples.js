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

