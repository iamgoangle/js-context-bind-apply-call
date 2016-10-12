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
const print = function (fn) {
    console.log(fn());
}

const myObj = {
    firstname: 'Teerapong',
    lastname: 'Singthong',
    getFullName: function () {
        return `${this.firstname} ${this.lastname}`
    }
}

// the problem is that this context is dertermined by global scope
print(myObj.getFullName); // undefined undefined
```

[Read more](https://javascriptweblog.wordpress.com/2010/08/30/understanding-javascripts-this/)
