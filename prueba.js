let expression = "eval(10 + 10);";
let func = new Function(expression);
console.log(func());
console.log(eval("Math.sin(1.3)"));
