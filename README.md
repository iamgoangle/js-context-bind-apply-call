# Scope and Context in JavaScript
JavaScript's implementation of scope and context is a unique of the language.
- Functions can be adopted for various contexts.
- Scope can be encapsulated and preserved.

[Read more](http://ryanmorr.com/understanding-scope-and-context-in-javascript/)

# Context and Scope
Context and scope are not the same thing. Every javascript function
has both **scope** and **context** associated with it.

Scope = it is function-based.
Context = it is object based. You might know that; in other word `this` keyword.

# What's the problem?
By default `this` keyword is executed rely on three type of execution context.
1. Global
2. Function
3. Parent or Outer (Evaluation)

For example:
```javascript
// call() / apply() and bind()
// the mechanism to determine context of this keyword in function
 
const obj = {
                fullname: 'Teerapong Singthong',
  getFullname() {
                return this.fullname;
  }
};
 
console.log(obj.getFullname());                // Teerapong Singthong
 
// change context from window to another one function
const print = (fn) => {
                console.log(fn());
};
 
// this line will be displayed `undefined`
print(obj.getFullname);
 
// to resolve this, we need to point to correct context
// bind() = binding the context and return as a new function
print(obj.getFullname.bind(obj));
 
// Use arrow function to be resolve
print(() => obj.getFullname());
 
// -----------------------------
 
// call() / apply()
// if we need to invoke function and change context
const objChrome = {
                fullname: 'Google Chrome'
};
 
const objFirefox = {
                fullname: 'Firefox'
};
 
console.log(obj.getFullname());                     // Teerapong Singthong
console.log(obj.getFullname.call(objChrome));       // Google Chrome
console.log(obj.getFullname.apply(objFirefox));     // Firefox
```

[Read more](https://javascriptweblog.wordpress.com/2010/08/30/understanding-javascripts-this/)
