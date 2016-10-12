/*
    As we knows that there are three type of context execution
    Most often dertermined by how a fujction is involved.

    Worse case of context execution is global context
*/

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

// global.firstname = "test";
// global.lastname = "xxx";

// the problem is that this context is dertermined by global scope
print(myObj.getFullName);
