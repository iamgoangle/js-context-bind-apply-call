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
function print () {
    name();
}

function name () {
    this.name = "Teerapong Singthong";
    return this;
}

console.log( print(name()) );
```

[Read more](https://javascriptweblog.wordpress.com/2010/08/30/understanding-javascripts-this/)
